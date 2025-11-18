import React from 'react'

const projects = [
  {
    title: '6.5m Day Cruiser — Hull Plug',
    badge: 'Plug Printing',
    image: 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%23360%22><rect width=%22640%22 height=%23360%22 fill=%22%23021629%22/><path d=%22M40 300 Q320 120 600 300%22 stroke=%22%2322d3ee%22 stroke-width=%223%22 fill=%22none%22/></svg>'
  },
  {
    title: 'Console & Bench Set',
    badge: 'Custom Parts',
    image: 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%23360%22><rect width=%22640%22 height=%23360%22 fill=%22%23021629%22/><rect x=%22120%22 y=%22120%22 width=%22240%22 height=%22120%22 rx=%2216%22 stroke=%22%23f59e0b%22 stroke-width=%223%22 fill=%22none%22/></svg>'
  },
  {
    title: '7.2m RIB — Seating System',
    badge: 'Design to Mould',
    image: 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%23360%22><rect width=%22640%22 height=%23360%22 fill=%22%23021629%22/><circle cx=%22320%22 cy=%22180%22 r=%2280%22 stroke=%22%2367e8f9%22 stroke-width=%223%22 fill=%22none%22/></svg>'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#001426] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected work</h2>
            <p className="mt-2 text-cyan-100/80">A glimpse of recent tooling and marine design deliverables.</p>
          </div>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-amber-500 text-slate-900 font-medium hover:bg-amber-400">Start a project</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-white/5">
              <img src={p.image} alt="" className="w-full h-56 object-cover opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute top-3 left-3 text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">{p.badge}</div>
              <div className="p-5">
                <h3 className="text-white font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-cyan-100/80">From CAD to polished mould via large‑format printed plug.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
