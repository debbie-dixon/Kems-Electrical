
export default function Services({ servicesList, scrollToSection }) {
  return (
    <section id="services" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-amber-400 text-xs font-black uppercase tracking-widest">Our Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Engineering Services</h2>
          <p className="text-slate-400 text-base">
            Professional electrical design, automation, and compliance audits structured for residential and industrial safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-slate-950/90 border border-slate-700 rounded-xl flex items-center justify-center text-xl">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  <ul className="pt-2 space-y-2">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-800 hover:border-amber-400 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Request This Service ➔
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}