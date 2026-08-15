-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- First signup becomes admin
CREATE OR REPLACE FUNCTION public.bootstrap_first_admin()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created_bootstrap_admin
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.bootstrap_first_admin();

-- Posts
CREATE TABLE public.posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT 'General',
  read_time text NOT NULL DEFAULT '5 min',
  cover_image_url text,
  content text NOT NULL DEFAULT '',
  featured boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  published_at timestamptz,
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.posts TO authenticated;
GRANT ALL ON public.posts TO service_role;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published posts"
ON public.posts FOR SELECT
USING (status = 'published');

CREATE POLICY "Staff can view all posts"
ON public.posts FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Staff can insert posts"
ON public.posts FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Staff can update posts"
ON public.posts FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Staff can delete posts"
ON public.posts FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_posts_updated_at
BEFORE UPDATE ON public.posts
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX posts_status_published_at_idx ON public.posts (status, published_at DESC);

INSERT INTO public.posts (slug, title, category, read_time, excerpt, featured, status, published_at, content) VALUES
('seo-roadmap-2026', 'The 2026 SEO Roadmap: What Actually Moves Rankings Now', 'SEO', '9 min', 'AI overviews, EEAT, and topical authority — a practical playbook for compounding organic growth.', true, 'published', now() - interval '2 days', 'Search has changed more in the last 18 months than in the previous five years. AI overviews compress the click-through funnel, and topical authority now decides who gets cited.

## Build topical authority, not page count
Map your niche into clusters and publish depth before breadth. One authoritative hub beats twenty thin posts.

## Make EEAT visible
Named authors, real credentials, original data, and clear sourcing. Crawlers and readers both reward it.

## Fix the technical foundation
Core Web Vitals, clean internal linking, and crawlable architecture are still the cheapest ranking wins available.'),
('meta-ads-creative-system', 'The Creative System We Use to Scale Meta Ads Past 5x ROAS', 'Performance', '11 min', 'Inside the testing framework, hook library and creative ops behind our highest-performing accounts.', false, 'published', now() - interval '6 days', 'Creative is the targeting. Once you accept that, scaling Meta becomes a production problem, not a bidding problem.

## The hook library
We keep a running bank of hooks by angle — pain, proof, curiosity, contrarian — and rotate them weekly.

## Test structure
One campaign, broad targeting, disciplined creative volume. Judge at the ad level, not the campaign level.

## Creative ops
A predictable weekly output beats occasional brilliance. Ship, measure, cut, double down.'),
('landing-pages-that-convert', 'Anatomy of a Landing Page That Converts at 12%+', 'CRO', '7 min', 'The structural patterns, copy frameworks and proof elements that consistently win.', false, 'published', now() - interval '11 days', 'High-converting pages are not prettier — they are clearer.

## Above the fold
One promise, one proof point, one action. Remove everything competing for attention.

## Proof stacking
Testimonials, numbers, logos and screenshots placed exactly where doubt appears.

## Friction audit
Every extra field costs conversions. Ask only for what your sales process actually needs.'),
('local-seo-checklist', 'The Local SEO Checklist for 2026', 'SEO', '8 min', 'Every step we use to dominate map-pack rankings for service businesses.', false, 'published', now() - interval '17 days', 'Local search rewards consistency and proximity signals more than raw domain strength.

## Google Business Profile
Complete every field, post weekly, and keep categories tight to your primary service.

## Citations and reviews
Consistent NAP across directories, plus a steady review cadence with keyword-rich replies.

## Location pages
One genuinely useful page per service area — not templated doorway pages.'),
('b2b-linkedin-playbook', 'The B2B LinkedIn Playbook for Pipeline Generation', 'Performance', '10 min', 'How to combine organic, ads and ABM to fill pipeline with ICP accounts.', false, 'published', now() - interval '24 days', 'LinkedIn works when organic credibility and paid reach point at the same account list.

## Define the account list first
Everything downstream — content, ads, outbound — targets that list.

## Founder-led organic
Personal profiles outperform company pages. Post insight, not announcements.

## Paid layering
Use ads for reach and retargeting against the same accounts your team is working manually.'),
('content-engine-30-days', 'Build a Content Engine in 30 Days', 'Content', '6 min', 'From topical map to publishing rhythm — the system we deploy with every new client.', false, 'published', now() - interval '30 days', 'A content engine is a repeatable process, not a burst of articles.

## Week 1: topical map
Cluster your keywords into hubs and spokes tied to revenue, not traffic.

## Week 2: templates
Briefs, outlines and internal-link rules so writers never start from a blank page.

## Weeks 3-4: publish and measure
Ship on a fixed cadence, then refresh winners quarterly.');