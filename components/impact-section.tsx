export default function ImpactSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">Lives Depend on Precision</h2>
          <p className="text-2xl text-red-500 font-semibold mb-4">
            "Every meter counts in rescue operations. Res-Q delivers the precision that saves lives."
          </p>
          <p className="text-slate-400">— Mountain Rescue Coordinator, European Alps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { stat: "20m", label: "Standard GPS margin of error" },
            { stat: "5m", label: "Res-Q precision" },
            { stat: "75%", label: "Improvement in target finding" },
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-lg bg-slate-800 border border-slate-700">
              <div className="text-4xl font-bold text-red-500 mb-2">{item.stat}</div>
              <p className="text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
