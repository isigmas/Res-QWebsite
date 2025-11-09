export default function VideoSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            See Res-Q in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch how our advanced rescue technology guides mountain rescue teams with precision and reliability
          </p>
        </div>

        <div className="relative aspect-video max-w-4xl mx-auto flex items-center justify-center">
          <img
            className="h-full object-cover"
            src="/screens.png"
            alt="Res-Q Mountain Rescue Technology Demo"
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-600">
            Learn more about our rescue technology and how it's saving lives in challenging mountain conditions
          </p>
        </div>
      </div>
    </section>
  )
}