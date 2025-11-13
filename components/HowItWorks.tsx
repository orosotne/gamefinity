import {
  CursorArrowRaysIcon,
  LightBulbIcon,
  QrCodeIcon,
} from '@heroicons/react/24/outline';
import TryItNowCard from './TryItNowCard';

const steps = [
  {
    title: 'Scan the card',
    desc: 'Launch via QR in your browser. No app needed – pure WebAR.',
    Icon: QrCodeIcon,
  },
  {
    title: 'Discover meaning',
    desc: '3D animations with voice explanation create instant understanding.',
    Icon: LightBulbIcon,
  },
  {
    title: 'Interact',
    desc: 'Buttons, quizzes and links guide users to the next step.',
    Icon: CursorArrowRaysIcon,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          How it works – try it yourself
        </h2>
        <p className="mt-3 text-slate-300">
          BLIK! kombinuje QR spustenie, WebAR scénu a interaktívne UI. Pozri sa na
          kroky a potom si to vyskúšaj na reálnej karte.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-soft transition hover:bg-white/[0.07]"
          >
            <div
              className="absolute -inset-px -z-10 rounded-xl opacity-0 blur-xl transition group-hover:opacity-100"
              style={{
                background:
                  'linear-gradient(135deg, rgba(56,189,248,.25), rgba(139,92,246,.25))',
              }}
            />
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-sky-600/20 to-violet-600/20 ring-1 ring-white/10">
              <Icon className="h-6 w-6 text-sky-300" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <TryItNowCard />
      </div>
    </section>
  );
}



