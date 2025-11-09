export default function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-100 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mb-4">The Challenge</h2>
          <p className="text-lg sm:text-xl text-slate-500">Standard GPS isn't precise enough when lives depend on it</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Standard GPS */}
          <div className="relative overflow-hidden rounded-xl bg-slate-200 border border-slate-400 p-6 sm:p-8 hover:bg-slate-300 hover:shadow-md hover:shadow-red-500/50 duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-700 mb-2">Standard GPS</h3>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500 mb-3 sm:mb-4">±20m</p>
              <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4">Off by 20+ meters in fog or night conditions</p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span> Fog blocks signals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span> Night visibility poor
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span> Terrain interference
                </li>
              </ul>
            </div>
          </div>

          {/* Res-Q */}
          <div className="relative overflow-hidden rounded-xl bg-slate-200 border border-slate-400 p-6 sm:p-8 hover:bg-slate-300 hover:shadow-md hover:shadow-blue-500/50 duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-700 mb-2">Res-Q</h3>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500 mb-3 sm:mb-4">±5m</p>
              <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4">Meter-level precision in all conditions</p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Works in fog & night
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Terrain optimized
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Offline capable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
