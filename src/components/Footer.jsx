export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-white text-sm">KEMs Electrical Engineering Services</p>
          <p className="mt-1 text-slate-500">Bringing Power to Life, One Circuit at a Time.</p>
        </div>

        <div className="flex gap-6">
          {['home', 'services', 'testimonials', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
         
        </div>

        <p className="text-slate-500">
          © {new Date().getFullYear()} KEMS Electrical Engineering. All rights reserved.
        </p>
      </div>
    </footer>
  );
}