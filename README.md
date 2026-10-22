# ResumeForge

Lean SaaS for **Resume Checking + Job Application Organizer**.

Built exactly on the $20/mo stack:
- Domain → Cloudflare Registrar (~$12/yr)
- Frontend → Vercel (free)
- Database + Auth → Supabase (free tier)
- Emails → Resend (free 3k/mo)
- Payments → Stripe (pay-as-you-go)
- Analytics → PostHog or Cloudflare (free)

## Features
- Resume checker with score, ATS issues, keyword gaps, and suggestions
- Job tracker (status, notes, dates, company, role)
- Clean modern dashboard
- Auth + Stripe ready

## Quick Start (Local Demo)

```bash
cd resume-forge
npm install
npm run dev
```

Open http://localhost:3000 — demo mode works without any keys.

## Production Setup (10 minutes)

1. **Domain** — Buy on Cloudflare Registrar
2. **Supabase** — Create project → copy URL + anon key into `.env.local`
3. **Vercel** — Connect GitHub repo → add env vars → deploy
4. **Stripe** — Create products/prices → add keys
5. **Resend** — Optional for transactional emails
6. Point DNS to Vercel

See `.env.example` for required variables.

## Database Tables (Supabase SQL)

```sql
-- resumes
create table resumes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  content text,
  score int,
  analysis jsonb,
  created_at timestamptz default now()
);

-- jobs
create table jobs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  company text,
  title text,
  url text,
  status text default 'Applied',
  notes text,
  applied_date date,
  created_at timestamptz default now()
);

-- Enable RLS and policies as needed
```

## Monetization Ideas
- Free: 3 resume checks + 10 jobs
- Pro ($9–19/mo): Unlimited checks, AI rewrites, export, priority support

## New Features (v2)

- **PDF Upload** — Upload a resume PDF and extract text automatically
- **AI Rewrite** — Calls OpenAI (gpt-4o-mini) when `OPENAI_API_KEY` is set; falls back to mock otherwise
- **Supabase Auth** — Email + Google login via Auth UI
- **Stripe Checkout** — `/pricing` page with working checkout session endpoint

Add these to `.env.local`:

```
OPENAI_API_KEY=sk-...
NEXT_PUBLIC_STRIPE_PRICE_ID=price_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Create a Stripe Price for the Pro plan and paste its ID.
