
export default function Hero({ images, scrollToSection }) {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Bringing Power to Life, <br />
              <span className="text-amber-400">One Circuit at a Time.</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              KEMS Electrical Engineering Services delivers precision high-power automation, smart retrofitting, load safety auditing, and custom automation for residential, commercial, and industrial facilities.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base px-8 py-4 rounded-xl border border-amber-400 transition-all duration-200 text-center"
              >
                Request a Service
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 text-center"
              >
                Explore Services
              </button>
            </div>

            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Code Compliance</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">24/7</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Emergency Triage</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">5.0 ★</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Google Rating</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src={images.hero}
                alt="Electrical Engineering Work"
                className="w-full h-105 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Certified Workmanship</p>
                  <p className="text-sm font-semibold text-white mt-0.5">Industrial & Smart Home Systems</p>
                </div>
                <button
                 
                  className="text-md text-black font-bold bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded-lg border border-amber-400 transition-all duration-200"
                >
                  KEMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}