"use client";

import { useState } from "react";

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const checkout = async (priceId: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (e) {
      alert("Checkout failed. Check Stripe keys.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold">Simple pricing</h1>
        <p className="mt-2 text-gray-600">Start free. Upgrade when ResumeForge pays for itself.</p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-semibold">Free</h2>
            <div className="mt-4 text-4xl font-bold">$0</div>
            <ul className="mt-6 space-y-2 text-left text-gray-700">
              <li>✓ 3 resume checks</li>
              <li>✓ 10 tracked jobs</li>
              <li>✓ Basic ATS score</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-brand-500 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold">Pro</h2>
            <div className="mt-4 text-4xl font-bold text-brand-600">
              $12<span className="text-lg font-normal text-gray-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-left text-gray-700">
              <li>✓ Unlimited resume checks</li>
              <li>✓ Unlimited jobs</li>
              <li>✓ AI rewrite with OpenAI</li>
              <li>✓ PDF upload</li>
              <li>✓ Priority support</li>
            </ul>
            <button
              onClick={() => checkout(process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || "price_...")}
              disabled={loading}
              className="mt-8 w-full rounded-full bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
            >
              {loading ? "Redirecting…" : "Upgrade to Pro"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
