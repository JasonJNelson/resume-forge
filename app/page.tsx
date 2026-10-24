import Link from "next/link";
import { CheckCircle, FileText, Briefcase, Zap, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-bold text-xl text-brand-600">
            <FileText className="h-6 w-6" />
            ResumeForge
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#features" className="hover:text-brand-600">Features</a>
            <a href="#how-it-works" className="hover:text-brand-600">How it works</a>
            <a href="#pricing" className="hover:text-brand-600">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-sm font-medium hover:text-brand-600">
              Log in
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
            <Star className="h-4 w-4" />
            Built for job seekers who want results
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Get more interviews.
            <br />
            <span className="text-brand-600">Track every application.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Score your resume for ATS systems, get clear fixes, and organize your entire job search in one simple dashboard. No more spreadsheets. No more guessing.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-lg font-semibold text-white hover:bg-brand-700"
            >
              Check Your Resume Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-gray-300 px-8 py-4 text-lg font-semibold hover:bg-gray-50"
            >
              See Pricing
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required · Free forever plan</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Everything you need to land the job</h2>
            <p className="mt-2 text-gray-600">One tool instead of five different apps.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Instant ATS Score</h3>
              <p className="mt-2 text-gray-600">
                See exactly how well your resume will perform with applicant tracking systems. Fix issues before you apply.
              </p>
            </div>
            <div className="rounded-2xl border p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Job Application Tracker</h3>
              <p className="mt-2 text-gray-600">
                Keep every application, interview, and offer organized. Update status, add notes, and never lose track again.
              </p>
            </div>
            <div className="rounded-2xl border p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">AI-Powered Fixes</h3>
              <p className="mt-2 text-gray-600">
                Get specific suggestions and rewrite weak sections so your resume stands out to both humans and machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">How it works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-bold">1</div>
              <h3 className="mt-4 font-semibold">Upload or paste resume</h3>
              <p className="mt-2 text-sm text-gray-600">Drop in a PDF or paste your text.</p>
            </div>
            <div>
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-bold">2</div>
              <h3 className="mt-4 font-semibold">Get your score + fixes</h3>
              <p className="mt-2 text-sm text-gray-600">See issues and actionable improvements instantly.</p>
            </div>
            <div>
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-bold">3</div>
              <h3 className="mt-4 font-semibold">Track applications</h3>
              <p className="mt-2 text-sm text-gray-600">Add jobs, update status, and stay organized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="py-20 text-center">
        <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
        <p className="mt-2 text-gray-600">Start free. Upgrade only when it helps you land interviews.</p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 text-left shadow-sm">
            <h3 className="text-xl font-semibold">Free</h3>
            <div className="mt-2 text-4xl font-bold">$0</div>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✓ 3 resume checks</li>
              <li>✓ 10 tracked jobs</li>
              <li>✓ Basic ATS score</li>
            </ul>
            <Link
              href="/dashboard"
              className="mt-8 block rounded-full border py-3 text-center font-semibold hover:bg-gray-50"
            >
              Start Free
            </Link>
          </div>
          <div className="rounded-2xl border-2 border-brand-500 bg-white p-8 text-left shadow-lg">
            <h3 className="text-xl font-semibold">Pro</h3>
            <div className="mt-2 text-4xl font-bold text-brand-600">
              $12<span className="text-lg font-normal text-gray-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✓ Unlimited resume checks</li>
              <li>✓ Unlimited jobs</li>
              <li>✓ AI rewrites</li>
              <li>✓ PDF upload</li>
            </ul>
            <Link
              href="/pricing"
              className="mt-8 block rounded-full bg-brand-600 py-3 text-center font-semibold text-white hover:bg-brand-700"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to improve your job search?</h2>
        <p className="mt-2 text-brand-100">Join people who stopped guessing and started getting interviews.</p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-semibold text-brand-600 hover:bg-gray-100"
        >
          Check Your Resume Free
        </Link>
      </section>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-6xl px-6">
          ResumeForge — Built on the $20/mo stack. Ship fast.
        </div>
      </footer>
    </div>
  );
}
