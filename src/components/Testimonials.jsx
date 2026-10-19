
export default function Testimonials({ reviewsList }) {
  return (
    <section id="testimonials" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-amber-400 text-xs font-black uppercase tracking-widest mb-2">Verified Feedback</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Client Reviews</h2>
            <p className="text-slate-400 text-sm mt-1">Drawn from Google Reviews for KEMs Electrical Engineering Services</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-amber-400 text-xl font-bold">
              <span>5.0</span>
              <div className="flex text-amber-400 text-sm">★★★★★</div>
            </div>
            <div className="border-l border-slate-800 pl-4">
              <p className="text-xs font-bold text-white">Google Business Verified</p>
              <a
                href="https://www.google.com/search?q=KEMs+Electrical+Engineering+Services"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-amber-400 hover:underline block"
              >
                View on Google Maps ↗
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div key={rev.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: rev.stars }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {rev.date}
                  </span>
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">{rev.author}</p>
                  <p className="text-xs text-slate-500">{rev.role}</p>
                </div>
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}