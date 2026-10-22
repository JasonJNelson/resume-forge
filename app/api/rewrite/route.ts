import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Optional: only runs if OPENAI_API_KEY is set
const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export async function POST(req: NextRequest) {
  try {
    const { text, jobDescription } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No resume text provided" }, { status: 400 });
    }

    // Fallback mock if no OpenAI key
    if (!openai) {
      return NextResponse.json({
        rewritten: text + "\n\n[AI rewrite available once OPENAI_API_KEY is set]",
        suggestions: ["Add quantifiable metrics", "Use stronger action verbs"],
        mock: true,
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an expert resume writer. Rewrite the resume to be more impactful, ATS-friendly, and results-oriented. Keep the same facts. Return only the improved resume text.",
        },
        {
          role: "user",
          content: jobDescription
            ? `Job description:\n${jobDescription}\n\nResume:\n${text}`
            : `Resume:\n${text}`,
        },
      ],
      temperature: 0.7,
    });

    const rewritten = completion.choices[0]?.message?.content || text;

    return NextResponse.json({ rewritten, mock: false });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Rewrite failed" }, { status: 500 });
  }
}
