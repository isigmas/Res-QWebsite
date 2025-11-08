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
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Res-Tag</h2>
          <p className="text-2xl text-red-500 font-semibold mb-6">Your Pocket-Sized Lifeline</p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            When you're off-grid and need help, Res-Tag delivers what matters most: your precise location to rescue
            services. Compact, straightforward, and essential—designed for one purpose: keeping you safe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-3xl blur-3xl" />

              {/* Obrazek urządzenia */}
              {/* Pamiętaj, aby podmienić 'Gemini_Generated_Image_hsoiqghsoiqghsoi.jpg' 
                  na właściwą ścieżkę w Twoim projekcie, np. '/images/res-tag-device.jpg' 
              */}
              <img
                src="/Gemini_Generated_Image_hsoiqghsoiqghsoi.png" // <-- ZMIEŃ TĘ ŚCIEŻKĘ
                alt="Res-Tag Emergency Locator Device"
                className="relative z-10 rounded-2xl border border-red-500/30 shadow-2xl shadow-black/30"
              />
              
            </div>
          </div>

          {/* Key Points */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Essential Safety Features</h3>

            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-red-500/50 hover:bg-slate-800/50 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
                  {point.title}
                </h4>
                <p className="text-slate-300">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Flow */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">How Res-Tag Saves Lives</h3>
          <div className="relative z-10 grid md:grid-cols-4 gap-4">
            {[
              { step: 1, title: "You're Off-Grid", description: "No cell service, no internet" },
              { step: 2, title: "Press Button", description: "Activate Res-Tag immediately" },
              { step: 3, title: "Satellite Link", description: "GPS sent via satellite network" },
              { step: 4, title: "Rescue Alerted", description: "Services pinpoint your location" },
            ].map((item, index) => (
              <div key={index} className="text-center relative px-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/20 border border-red-500/50 mb-3">
                  <span className="text-red-500 font-bold">{item.step}</span>
                </div>
                <p className="font-semibold text-white mb-1">{item.title}</p>
                <p className="text-sm text-slate-400">{item.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full -z-10">
                    <svg className="w-full h-1 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 100 1">
                      <path strokeDasharray="4 4" d="M0 0.5 L100 0.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-lg">
            Res-Tag represents precision satellite technology designed for one essential purpose:
            <span className="block text-white font-semibold mt-2">
              Accurate, reliable emergency location when every second counts.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}