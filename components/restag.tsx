export default function ResTagSection() {
  const keyPoints = [
    {
      title: "Pocket-Sized",
      description: "Compact design fits easily in any backpack or emergency kit",
    },
    {
      title: "One-Button Operation",
      description: "Simple activation—no complex menus or steep learning curve",
    },
    {
      title: "Satellite-Powered",
      description: "Transmits GPS location via satellite when off-grid",
    },
    {
      title: "Instant Connection",
      description: "Establishes direct link to rescue services in seconds",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-100 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mb-4">Res-Tag</h2>
          <p className="text-xl sm:text-2xl text-blue-500 font-semibold mb-4 sm:mb-6">Your Pocket-Sized Lifeline</p>
          <p className="text-lg sm:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed px-2">
            When you're off-grid and need help, Res-Tag delivers what matters most: your precise location to rescue
            services. Compact, straightforward, and essential—designed for one purpose: keeping you safe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Product Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-3xl blur-3xl" />

              <img
                src="/Gemini_Generated_Image_hsoiqghsoiqghsoi.png" 
                alt="Res-Tag Emergency Locator Device"
                className="relative z-10 rounded-2xl border border-blue-500/30 shadow-3xl shadow-black/30"
              />
              
            </div>
          </div>

          {/* Key Points */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-6 sm:mb-8">Essential Safety Features</h3>

            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="group p-4 sm:p-6 rounded-lg border border-slate-400 bg-slate-200 hover:border-blue-500/50 hover:bg-slate-300 hover:shadow-lg transition-all hover:shadow-blue-500/50 duration-300"
              >
                <h4 className="text-base sm:text-lg font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
                  {point.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-700">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Flow */}
        <div className="bg-slate-200/50 border border-slate-400 rounded-xl p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-700 mb-6 sm:mb-8 text-center">How Res-Tag Saves Lives</h3>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: 1, title: "You're Off-Grid", description: "No cell service, no internet" },
              { step: 2, title: "Press Button", description: "Activate Res-Tag immediately" },
              { step: 3, title: "Satellite Link", description: "GPS sent via satellite network" },
              { step: 4, title: "Rescue Alerted", description: "Services pinpoint your location" },
            ].map((item, index) => (
              <div key={index} className="text-center relative px-2">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 border border-blue-500/50 mb-2 sm:mb-3">
                  <span className="text-blue-500 font-bold text-sm sm:text-base">{item.step}</span>
                </div>
                <p className="font-semibold text-slate-700 mb-1 text-sm sm:text-base">{item.title}</p>
                <p className="text-xs sm:text-sm text-slate-500">{item.description}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-5 sm:top-6 left-1/2 w-full -z-10">
                    <svg className="w-full h-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 100 1">
                      <path strokeDasharray="4 4" d="M0 0.5 L100 0.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-slate-700 text-base sm:text-lg px-2">
            Res-Tag represents precision satellite technology designed for one essential purpose:
            <span className="block text-slate-700 font-semibold mt-2">
              Accurate, reliable emergency location when every second counts.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}