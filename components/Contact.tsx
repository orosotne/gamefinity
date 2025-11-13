"use client";

import { useState } from 'react';

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", company: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">Contact</h2>
        <div className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-300 space-y-1">
          <p>
            Email:{' '}
            <a className="underline decoration-sky-500/60 underline-offset-4 hover:text-white break-all" href="mailto:martin.miskeje@gamefinity.sk">
              martin.miskeje@gamefinity.sk
            </a>
          </p>
          <p>Phone: +421 917 588 738</p>
        </div>
      </div>
      <div className="mx-auto mt-6 sm:mt-8 max-w-3xl rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 shadow-soft">
        <form onSubmit={onSubmit} className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-xs sm:text-sm text-slate-300">Name</label>
            <input
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm sm:text-base text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-500/40"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-xs sm:text-sm text-slate-300">Company</label>
            <input
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm sm:text-base text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-500/40"
              type="text"
              placeholder="Company name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs sm:text-sm text-slate-300">Email</label>
            <input
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm sm:text-base text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-500/40"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs sm:text-sm text-slate-300">Message</label>
            <textarea
              className="min-h-[100px] sm:min-h-[120px] w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm sm:text-base text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-500/40"
              placeholder="Tell us about your project or request a demo…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
            {status === "success" && (
              <span className="text-xs sm:text-sm text-emerald-400 text-center">Thanks! We'll get back to you shortly.</span>
            )}
            {status === "error" && (
              <span className="text-xs sm:text-sm text-rose-400 text-center">{error}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}


