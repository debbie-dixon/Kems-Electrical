import  { useState } from 'react';

export default function Navbar({ activeSection, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-12 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-black text-slate-950 text-md tracking-tighter">
              KEMS
            </div>
            <div>
              <span className="font-extrabold text-lg text-white tracking-wide block leading-none">
                KEMS ELECTRICAL
              </span>
              <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-widest block mt-1">
                Engineering Services
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['home', 'services', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-semibold transition-colors duration-200 ${
                  activeSection === item ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
             <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-lg border border-amber-400 transition-all duration-200"
            >
              Request a Service
            </button>
          </nav>

         
           
           
          

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          {['home', 'services', 'testimonials', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left capitalize px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              {item}
            </button>
          ))}
          
          <button
            onClick={() => {
              scrollToSection('contact');
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 bg-amber-500 text-slate-950 font-bold py-3 rounded-lg text-center border border-amber-400 block"
          >
            Request a Service
          </button>
        </div>
      )}
    </header>
  );
}