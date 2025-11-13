import {
  CpuChipIcon,
  SpeakerWaveIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const highlights = [
  {
    title: 'WebAR without install',
    desc: '8th Wall integration runs in the browser. Scan a QR and start.',
    Icon: CpuChipIcon,
  },
  {
    title: '3D Animations & Voice',
    desc: 'GLB/GLTF models, spatial audio, and voice-over guides.',
    Icon: SpeakerWaveIcon,
  },
  {
    title: 'Analytics & CTA',
    desc: 'Measure engagement and drive action with buttons and links.',
    Icon: ChartBarIcon,
  },
];

export default function Technology() {
  return (
    <section id="technology" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Technology
        </h2>
        <p className="mt-3 text-slate-300">
          We build on 8th Wall WebAR for fast, reliable experiences across
          devices. No app install, just scan a QR. Support for GLB/GLTF,
          client-side CMS, and secure brand assets.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-soft"
          >
            <div
              className="absolute -inset-px -z-10 rounded-xl opacity-0 blur-xl transition hover:opacity-100"
              style={{
                background:
                  'linear-gradient(135deg, rgba(56,189,248,.25), rgba(139,92,246,.25))',
              }}
            />
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-sky-600/20 to-violet-600/20 ring-1 ring-white/10">
              <Icon className="h-6 w-6 text-violet-300" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
        <p>
          Integrations: GLB/GLTF 3D formats, client brand icon sets, and
          headless CMS for content updates. Works across iOS/Android with
          secure hosting.
        </p>
      </div>
    </section>
  );
}



