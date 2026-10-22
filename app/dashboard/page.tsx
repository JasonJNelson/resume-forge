"use client";

import { useState } from "react";
import { FileText, Plus, Briefcase, Trash2, CheckCircle2, Sparkles, Upload } from "lucide-react";
import AuthButton from "@/components/AuthButton";

type Job = {
  id: string;
  company: string;
  title: string;
  status: string;
  notes: string;
  date: string;
};

const STATUSES = ["Applied", "Interview", "Offer", "Rejected", "Withdrawn"];

function analyzeResume(text: string) {
  const words = text.trim().split(/\s+/).length;
  const hasEmail = /@/.test(text);
  const hasPhone = /\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/.test(text);
  const hasLinkedIn = /linkedin\.com/i.test(text);
  const keywords = ["led", "managed", "developed", "increased", "improved", "reduced", "built", "designed"];
  const foundKeywords = keywords.filter((k) => text.toLowerCase().includes(k));

  let score = 40;
  if (words > 200 && words < 800) score += 15;
  if (hasEmail) score += 10;
  if (hasPhone) score += 10;
  if (hasLinkedIn) score += 5;
  score += Math.min(foundKeywords.length * 4, 20);

  const issues: string[] = [];
  if (words < 200) issues.push("Resume is too short — aim for 300–600 words.");
  if (words > 900) issues.push("Resume is long — trim to 1–2 pages.");
  if (!hasEmail) issues.push("Missing email address.");
  if (!hasPhone) issues.push("Missing phone number.");
  if (!hasLinkedIn) issues.push("Add your LinkedIn profile URL.");
  if (foundKeywords.length < 3) issues.push("Add more action verbs and quantifiable achievements.");

  const suggestions = [
    "Start bullets with strong action verbs (Led, Built, Increased).",
    "Quantify results whenever possible (e.g. “increased revenue 32%”).",
    "Tailor keywords to the job description before applying.",
    "Keep formatting simple — ATS systems prefer clean text.",
  ];

  return { score: Math.min(score, 98), issues, suggestions, wordCount: words, keywords: foundKeywords };
}

export default function Dashboard() {
  const [resumeText, setResumeText] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [rewritten, setRewritten] = useState("");
  const [rewriting, setRewriting] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "1",
      company: "Acme Corp",
      title: "Senior Product Manager",
      status: "Interview",
      notes: "Second round next Tuesday",
      date: "2026-10-15",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newJob, setNewJob] = useState({ company: "", title: "", status: "Applied", notes: "", date: "" });

  const handleAnalyze = () => {
    if (!resumeText.trim()) return;
    setAnalysis(analyzeResume(resumeText));
    setRewritten("");
  };

  const handleRewrite = async () => {
    if (!resumeText.trim()) return;
    setRewriting(true);
    try {
      const res = await fetch("/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: resumeText }),
      });
      const data = await res.json();
      setRewritten(data.rewritten || "Rewrite failed");
    } catch {
      setRewritten("Error calling AI rewrite");
    } finally {
      setRewriting(false);
    }
  };

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/parse-pdf", { method: "POST", body: formData });
      const data = await res.json();
      if (data.text) {
        setResumeText(data.text);
        setAnalysis(null);
        setRewritten("");
      } else {
        alert("Could not extract text from PDF");
      }
    } catch {
      alert("PDF upload failed");
    }
  };

  const addJob = () => {
    if (!newJob.company || !newJob.title) return;
    setJobs([
      ...jobs,
      { ...newJob, id: Date.now().toString(), date: newJob.date || new Date().toISOString().split("T")[0] },
    ]);
    setNewJob({ company: "", title: "", status: "Applied", notes: "", date: "" });
    setShowForm(false);
  };

  const updateStatus = (id: string, status: string) => {
    setJobs(jobs.map((j) => (j.id === id ? { ...j, status } : j)));
  };

  const deleteJob = (id: string) => {
    setJobs(jobs.filter((j) => j.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-bold text-xl text-brand-600">
            <FileText className="h-6 w-6" />
            ResumeForge
          </div>
          <AuthButton />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Resume Checker */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <FileText className="h-5 w-5 text-brand-600" />
                Resume Checker
              </h2>
              <label className="flex cursor-pointer items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-sm hover:bg-gray-200">
                <Upload className="h-4 w-4" />
                PDF
                <input type="file" accept=".pdf" className="hidden" onChange={handlePdfUpload} />
              </label>
            </div>

            <textarea
              className="mt-4 h-64 w-full rounded-xl border p-4 text-sm focus:border-brand-500 focus:outline-none"
              placeholder="Paste your resume text or upload a PDF..."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
            />

            <div className="mt-4 flex gap-3">
              <button
                onClick={handleAnalyze}
                className="flex-1 rounded-full bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700"
              >
                Analyze
              </button>
              <button
                onClick={handleRewrite}
                disabled={rewriting}
                className="flex items-center justify-center gap-2 rounded-full border border-brand-600 px-5 py-3 font-semibold text-brand-600 hover:bg-brand-50 disabled:opacity-50"
              >
                <Sparkles className="h-4 w-4" />
                {rewriting ? "Rewriting…" : "AI Rewrite"}
              </button>
            </div>

            {analysis && (
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">ATS Score</span>
                  <span className="text-3xl font-bold text-brand-600">{analysis.score}/100</span>
                </div>
                <div className="text-sm text-gray-500">{analysis.wordCount} words</div>

                {analysis.issues.length > 0 && (
                  <div>
                    <h4 className="font-medium text-red-600">Issues to fix</h4>
                    <ul className="mt-1 space-y-1 text-sm">
                      {analysis.issues.map((issue: string, i: number) => (
                        <li key={i}>• {issue}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-medium text-brand-700">Suggestions</h4>
                  <ul className="mt-1 space-y-1 text-sm">
                    {analysis.suggestions.map((s: string, i: number) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {rewritten && (
              <div className="mt-6">
                <h4 className="font-medium">AI Rewritten Version</h4>
                <textarea
                  className="mt-2 h-48 w-full rounded-xl border bg-green-50 p-4 text-sm"
                  value={rewritten}
                  readOnly
                />
              </div>
            )}
          </div>

          {/* Job Organizer */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <Briefcase className="h-5 w-5 text-brand-600" />
                Job Organizer
              </h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="flex items-center gap-1 rounded-full bg-brand-100 px-3 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-200"
              >
                <Plus className="h-4 w-4" /> Add Job
              </button>
            </div>

            {showForm && (
              <div className="mt-4 space-y-3 rounded-xl border bg-gray-50 p-4">
                <input
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                  placeholder="Company"
                  value={newJob.company}
                  onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                />
                <input
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                  placeholder="Job Title"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                />
                <select
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                  value={newJob.status}
                  onChange={(e) => setNewJob({ ...newJob, status: e.target.value })}
                >
                  {STATUSES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <textarea
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                  placeholder="Notes"
                  rows={2}
                  value={newJob.notes}
                  onChange={(e) => setNewJob({ ...newJob, notes: e.target.value })}
                />
                <button
                  onClick={addJob}
                  className="w-full rounded-full bg-brand-600 py-2 text-sm font-semibold text-white"
                >
                  Save Job
                </button>
              </div>
            )}

            <div className="mt-6 space-y-3">
              {jobs.map((job) => (
                <div key={job.id} className="rounded-xl border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold">{job.title}</div>
                      <div className="text-sm text-gray-600">{job.company}</div>
                      <div className="mt-1 text-xs text-gray-500">{job.date}</div>
                    </div>
                    <button onClick={() => deleteJob(job.id)} className="text-gray-400 hover:text-red-500">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <select
                      className="rounded-lg border px-2 py-1 text-sm"
                      value={job.status}
                      onChange={(e) => updateStatus(job.id, e.target.value)}
                    >
                      {STATUSES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                    {job.status === "Offer" && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                  </div>
                  {job.notes && <p className="mt-2 text-sm text-gray-600">{job.notes}</p>}
                </div>
              ))}
              {jobs.length === 0 && (
                <p className="py-8 text-center text-gray-500">No jobs yet. Add your first application.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
