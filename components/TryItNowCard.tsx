export default function TryItNowCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/[0.02] p-4 sm:p-6 lg:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm">
      {/* Decorative hover gradient overlay */}
      <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-sky-500/20 via-violet-500/20 to-sky-500/20 opacity-0 blur-xl transition-opacity duration-500 hover:opacity-100" />

      {/* Section heading */}
      <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold text-white">Try it now</h3>

      <div className="relative flex flex-col items-stretch gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-start">
        {/* QR Code Section */}
        <div className="flex w-full flex-shrink-0 flex-col items-center lg:w-auto lg:items-start">
          <div className="relative w-full max-w-[280px] rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 p-5 sm:p-6 shadow-[0_10px_30px_rgba(56,189,248,0.3)] transition-transform duration-300 hover:scale-[1.02]">
            {/* QR Code in white container */}
            <div className="mx-auto flex items-center justify-center rounded-xl bg-white p-2 shadow-lg w-fit">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fblik.gamefinity.sk%2Fdemo"
                alt="Scan the QR code to open the demo"
                className="block h-28 w-28 sm:h-32 sm:w-32 rounded-lg"
              />
            </div>

            {/* Instructions text */}
            <div className="mt-3 sm:mt-4 text-center lg:text-left">
              <p className="text-base sm:text-lg font-bold text-white">Scan to view the artwork</p>
              <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-white/90 leading-relaxed">
                Scan the QR Code, then point your device at the image to see it in AR.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow connector */}
        <svg
          className="pointer-events-none hidden flex-shrink-0 lg:block"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 20 L30 20 M22 12 L30 20 L22 28"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* BLIK Card Image */}
        <div className="relative w-full max-w-[280px] mx-auto lg:mx-0 lg:max-w-md flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
          <div className="aspect-square w-full overflow-hidden">
            <img
              src="/blik-card.png"
              alt="Point your phone at the BLIK! card to see AR"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}


