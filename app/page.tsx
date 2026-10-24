import Link from "next/link";
import { FileText, Briefcase, Zap, CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5 font-semibold text-xl tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
              <FileText className="h-4 w-4" />
            </div>
            ResumeForge
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900">How it works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-6 pt-20 pb-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-500"></span>
            Trusted by job seekers landing interviews faster
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl leading-[1.1]">
            Resume scoring that<br />actually gets interviews.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
            Instant ATS analysis, precise fixes, and a clean system to track every application. Built for people who treat their job search like a professional process.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-7 py-3.5 text-base font-medium text-white hover:bg-gray-800 shadow-sm"
            >
              Analyze your resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              View pricing
            </Link>
          </div>
          <p className="mt-5 text-sm text-gray-500">No credit card required · Free plan available</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight">Everything in one focused tool</h2>
            <p className="mt-3 text-gray-600">Stop switching between resume checkers, spreadsheets, and notes apps.</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Precise ATS scoring</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Understand exactly where your resume stands and what to improve before you hit submit.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Application tracking</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">A clean, focused place to manage every opportunity, status update, and note.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Targeted improvements</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Clear, specific suggestions and AI rewrites that strengthen your positioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Simple process. Clear results.</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <div>
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">1</div>
              <h3 className="mt-5 font-semibold">Upload your resume</h3>
              <p className="mt-2 text-sm text-gray-600">Paste text or upload a PDF.</p>
            </div>
            <div>
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">2</div>
              <h3 className="mt-5 font-semibold">Review score & fixes</h3>
              <p className="mt-2 text-sm text-gray-600">See issues and improvements immediately.</p>
            </div>
            <div>
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">3</div>
              <h3 className="mt-5 font-semibold">Track applications</h3>
              <p className="mt-2 text-sm text-gray-600">Stay organized through every stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Straightforward pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade when it delivers value.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-left">
              <h3 className="text-lg font-semibold">Free</h3>
              <div className="mt-3 text-4xl font-semibold tracking-tight">$0</div>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>✓ 3 resume analyses</li>
                <li>✓ 10 tracked applications</li>
                <li>✓ Core ATS scoring</li>
              </ul>
              <Link href="/dashboard" className="mt-8 block rounded-lg border border-gray-300 py-3 text-center text-sm font-medium hover:bg-gray-50">
                Start free
              </Link>
            </div>
            <div className="rounded-xl border-2 border-gray-900 bg-white p-8 text-left shadow-sm">
              <h3 className="text-lg font-semibold">Pro</h3>
              <div className="mt-3 text-4xl font-semibold tracking-tight">$12<span className="text-base font-normal text-gray-500">/mo</span></div>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>✓ Unlimited analyses</li>
                <li>✓ Unlimited applications</li>
                <li>✓ AI-powered rewrites</li>
                <li>✓ PDF upload</li>
              </ul>
              <Link href="/pricing" className="mt-8 block rounded-lg bg-gray-900 py-3 text-center text-sm font-medium text-white hover:bg-gray-800">
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight">Start improving your job search today</h2>
          <p className="mt-3 text-gray-400">Clear scoring, better resumes, and organized applications.</p>
          <Link href="/dashboard" className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-100">
            Analyze your resume free
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-10 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-6xl px-6">
          ResumeForge · Professional resume analysis and job tracking
        </div>
      </footer>
    </div>
  );
}
