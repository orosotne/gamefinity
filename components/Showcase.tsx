import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
  'Branded decks and custom visuals',
  'Educational AR scenes with voice',
  'QR launch – no app install',
  'Engagement analytics and CTAs',
];

const badges = ['ČSOB Edition', 'Fortinet Edition', 'Educational Edition'];

export default function Showcase() {
  return (
    <section id="blik" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            BLIK! Showcase
          </h2>
          <p className="mt-3 text-slate-300">
            BLIK! is an AR version of Dobble made for education and corporate
            use. It helps brands like ČSOB explain complex topics with playful
            clarity. Each symbol unlocks an AR scene with 3D, voice, and
            interaction.
          </p>
          <ul className="mt-6 grid gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-sky-400" />
                <span className="text-slate-200">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-sky-500/15 to-violet-600/15 shadow-soft"
            >
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-sm text-slate-200">AR Scene {i}</span>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,.18),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,.22),transparent_40%)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



