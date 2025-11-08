export default function FeaturesSection() {
  const features = [
    {
      title: "Meter-Level Accuracy",
      description: "Precision to within 5 meter, even in challenging conditions",
      icon: "📍",
    },
    {
      title: "Satellite-Enhanced Positioning",
      description: "Multi-constellation technology from Galileo, Copernicus, and EGNOS",
      icon: "🛰️",
    },
    {
      title: "Offline Functionality",
      description: "Download maps and operate without cellular or internet connection",
      icon: "📱",
    },
    {
      title: "Night & Fog Optimization",
      description: "Navigate reliably through zero-visibility conditions",
      icon: "🌫️",
    },
    {
      title: "Real-Time Updates",
      description: "Live terrain data and environmental condition feeds",
      icon: "⚡",
    },
    {
      title: "Rugged Design",
      description: "Built for extreme mountain conditions and harsh environments",
      icon: "⛰️",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-orange-100 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-slate-700 mb-4">Powerful Features</h2>
          <p className="text-xl text-slate-700">Built for the most critical rescue missions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-slate-400 bg-slate-200 hover:bg-slate-400 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">{feature.title}</h3>
              <p className="text-slate-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
