export default function FooterSection() {
  return (
    <footer className="bg-slate-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Linia oddzielająca stopkę od reszty strony */}
        <div className="border-t border-slate-700" />

        {/* Zawartość stopki */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 pt-10">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Res-Q. All rights reserved.
          </p>
          
          {/* Linki zmienione na przyciski bez przekierowania */}
          <div className="flex gap-6 text-sm text-slate-400">
            <button 
              type="button" 
              className="bg-transparent hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              type="button" 
              className="bg-transparent hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}