export default function FooterSection() {
  return (
    <footer className="bg-orange-50 px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Linia oddzielająca stopkę od reszty strony */}
        <div className="border-t border-slate-400" />

        {/* Zawartość stopki */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 sm:gap-6 pt-6 sm:pt-8 lg:pt-10">
          <p className="text-xs sm:text-sm text-slate-700">
            © {new Date().getFullYear()} Res-Q. All rights reserved.
          </p>
          
          {/* Linki zmienione na przyciski bez przekierowania */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-slate-700">
            <button 
              type="button" 
              className="bg-transparent hover:text-slate-900 transition-colors py-1 px-2 -mx-2 rounded"
            >
              Privacy Policy
            </button>
            <button 
              type="button" 
              className="bg-transparent hover:text-slate-900 transition-colors py-1 px-2 -mx-2 rounded"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}