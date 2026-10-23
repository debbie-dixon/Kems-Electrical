
export default function Contact({ formData, setFormData, handleSubmitWhatsApp, servicesList }) {
  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-amber-400 text-xs font-black uppercase tracking-widest mb-2">Get In Touch</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Direct Service Dispatch</h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Fill out the service request details. Submitting this form will format your project requirements into an instant WhatsApp message to our engineering team.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center font-bold text-lg">
                  💬
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Phone Number</p>
                  <p className="text-sm font-bold text-white">07056783414</p>
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg flex items-center justify-center font-bold text-lg">
                  📍
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Google Business Listing</p>
                  <p className="text-sm font-bold text-white">KEMs Electrical Engineering Services</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Request Service via WhatsApp</h3>

            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Okon"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +234 801 234 5678"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Service Required *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  {servicesList.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Electrical Inquiry">General Electrical Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Property Type</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Residential Home / Apartment">Residential Home / Apartment</option>
                  <option value="Commercial Office / Store">Commercial Office / Store</option>
                  <option value="Industrial Facility">Industrial Facility</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details / Message</label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe your electrical project or emergency situation..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-4 rounded-xl border border-emerald-400 transition-all duration-200 flex items-center justify-center gap-2 text-base"
              >
                <span>Send via WhatsApp</span> 💬
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}