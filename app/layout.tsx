import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ResumeForge — Resume Checker & Job Organizer",
  description: "Score your resume, fix ATS issues, and track every job application in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
