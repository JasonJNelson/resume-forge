import Link from "next/link";
import { CheckCircle, FileText, Briefcase, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-bold text-xl text-brand-600">
            <FileText className="h-6 w-6" />
            ResumeForge
          </div>
          <div className="flex gap-4">
            <Link href="/dashboard" className="text-sm font-medium hover:text-brand-600">
              Dashboard
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
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Launch-ready resumes.
          <br />
          <span className="text-brand-600">Organized job hunt.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Get an instant ATS score, fix weak sections, and track every application
          in one clean dashboard. Built for people who want results, not more tools.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="rounded-full bg-brand-600 px-8 py-3 text-lg font-semibold text-white hover:bg-brand-700"
          >
            Check Your Resume Free
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Instant Resume Score</h3>
            <p className="mt-2 text-gray-600">
              ATS compatibility, keyword gaps, length, and formatting issues in seconds.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Job Organizer</h3>
            <p className="mt-2 text-gray-600">
              Track applications, interviews, offers, and notes without spreadsheets.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Actionable Fixes</h3>
            <p className="mt-2 text-gray-600">
              Clear suggestions so you know exactly what to improve before applying.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Simple pricing</h2>
        <p className="mt-2 text-gray-600">Start free. Upgrade when it pays for itself.</p>
        <div className="mx-auto mt-8 max-w-sm rounded-2xl border bg-white p-8 shadow-sm">
          <div className="text-4xl font-bold">Free</div>
          <ul className="mt-6 space-y-2 text-left text-gray-700">
            <li>✓ 3 resume checks</li>
            <li>✓ 10 tracked jobs</li>
            <li>✓ Basic score + suggestions</li>
          </ul>
          <div className="mt-8 text-4xl font-bold text-brand-600">$12<span className="text-lg font-normal text-gray-500">/mo</span></div>
          <ul className="mt-6 space-y-2 text-left text-gray-700">
            <li>✓ Unlimited checks</li>
            <li>✓ Unlimited jobs</li>
            <li>✓ AI rewrite suggestions</li>
            <li>✓ Priority support</li>
          </ul>
          <Link
            href="/dashboard"
            className="mt-8 block rounded-full bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700"
          >
            Start Free
          </Link>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        ResumeForge — Built on the $20/mo stack. Ship fast.
      </footer>
    </div>
  );
}
