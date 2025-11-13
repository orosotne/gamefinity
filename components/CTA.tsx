import Link from 'next/link';

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-sky-900/30 via-black/40 to-violet-900/30 p-8 shadow-glow sm:p-12">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Want to see it in action?
            </h3>
            <p className="mt-3 text-slate-300">
              Send us your logo and 3–5 key concepts. We’ll deliver a demo in 7 days.
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-3 md:justify-end">
            <Link
              href="#contact"
              className="rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              Request Consultation
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Get Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



