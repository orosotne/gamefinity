import { MegaphoneIcon, UserGroupIcon, GiftIcon } from '@heroicons/react/24/outline';

const cases = [
  {
    title: 'Events & PR',
    desc: 'Delight audiences with interactive cards and branded AR stories.',
    Icon: MegaphoneIcon,
  },
  {
    title: 'Training & Onboarding',
    desc: 'Explain complex ideas with visual demos and voice guidance.',
    Icon: UserGroupIcon,
  },
  {
    title: 'Client Gifts',
    desc: 'Memorable, educational gifts with measurable engagement.',
    Icon: GiftIcon,
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Use Cases
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cases.map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-soft transition hover:scale-[1.01] hover:bg-white/[0.07]"
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
    </section>
  );
}



