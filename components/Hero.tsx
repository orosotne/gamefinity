import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:pt-24"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Augmented Reality for Tabletop Games –{' '}
            <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              BLIK! by Gamefinity
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We create AR experiences that bring cards to life. Fast, visual and
            educational.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#blik"
              className="rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              Watch 1-min Demo
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              How It Works
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-sky-500/20 to-violet-600/20 blur-2xl" />
          <div className="mx-auto w-[85%] max-w-sm rounded-[2rem] border border-white/10 bg-black/60 p-4 shadow-glow">
            {/* phone bezel */}
            <div className="rounded-[1.6rem] border border-white/10 bg-black p-2">
              <div className="mx-auto mb-2 h-1.5 w-24 rounded-full bg-white/10" />
              <div className="overflow-hidden rounded-[1.2rem] ring-1 ring-white/10">
                <video
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[9/19.5] w-full object-cover"
                />
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">
            Demo placeholder – replace with BLIK! AR capture
          </p>
        </div>
      </div>

    </section>
  );
}



