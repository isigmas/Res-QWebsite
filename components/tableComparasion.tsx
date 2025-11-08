export default function GalileoVsGpsSection() {
  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Tytuł sekcji, pasujący do stylu */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">GPS vs. Galileo</h2>
          <p className="text-xl text-slate-300">A side-by-side look at the two leading global navigation systems.</p>
        </div>

        {/* Pojemnik na tabelę, pasujący stylem do kart */}
        <div className="relative overflow-hidden rounded-xl bg-slate-800 border border-slate-700 p-8">
          
          {/* Opcjonalne tło "blur", aby pasowało do stylu */}
          <div className="absolute top-0 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-0" />

          {/* Wrapper tabeli dla responsywności (pozwala na przewijanie na małych ekranach) */}
          <div className="relative z-10 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              {/* Nagłówek tabeli w stylu dark mode */}
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="p-4 text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Feature / Capability
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-300 uppercase tracking-wider text-center">
                    GPS
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-300 uppercase tracking-wider text-center">
                    Galileo
                  </th>
                </tr>
              </thead>
              
              {/* Ciało tabeli z danymi, w stylu dark mode */}
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="p-4 text-slate-200">System accuracy (standalone)</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200">Civilian (non-military) control</td>
                  <td className="p-4 text-center text-red-500">✕</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200">Global coverage</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                {/*<tr>
                  <td className="p-4 text-slate-200">Independence from military oversight</td>
                  <td className="p-4 text-center text-red-500">✕</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>*/}
                <tr>
                  <td className="p-4 text-slate-200">Encrypted signal for government/emergency (PRS)</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200">Multi-frequency support (L1/L5 vs E1/E5)</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                {/*<tr>
                  <td className="p-4 text-slate-200">Next-generation atomic clock precision</td>
                  <td className="p-4 text-center text-red-500">✕</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>*/}
                <tr>
                  <td className="p-4 text-slate-200">Better urban / indoor performance</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200">Commercial High Accuracy Service (HAS)</td>
                  <td className="p-4 text-center text-red-500">✕</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200">Integrated Search and Rescue (SAR)</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200">Compatibility with other GNSS systems</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200">Civilian Signal Authentication</td>
                  <td className="p-4 text-center text-red-500">✕</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200">Free civilian signal (Open Service)</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

