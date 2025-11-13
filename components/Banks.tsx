import { ShieldCheckIcon, LanguageIcon, QuestionMarkCircleIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const bullets = [
  { text: 'Custom edition for your brand and compliance', Icon: ShieldCheckIcon },
  { text: 'Local language voice-over and scripts', Icon: LanguageIcon },
  { text: 'AR quizzes to validate understanding', Icon: QuestionMarkCircleIcon },
  { text: 'Brand-safe design with governance', Icon: CheckBadgeIcon },
];

export default function Banks() {
  return (
    <section id="for-banks" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            For Banks and Financial Institutions
          </h2>
          <p className="mt-3 text-slate-300">
            BLIK! helps banks like ČSOB communicate complex financial topics
            through play. Make risk, security and products tangible with AR.
          </p>
          <ul className="mt-6 grid gap-3">
            {bullets.map(({ text, Icon }) => (
              <li key={text} className="flex items-start gap-2">
                <Icon className="mt-0.5 h-5 w-5 flex-none text-violet-300" />
                <span className="text-slate-200">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-glow">
            <video
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="aspect-video w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,.18),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,.22),transparent_40%)]" />
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">
            ČSOB Edition – placeholder video
          </p>
        </div>
      </div>
    </section>
  );
}



