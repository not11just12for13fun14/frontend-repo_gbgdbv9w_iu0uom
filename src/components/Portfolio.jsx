import React from 'react'

const projects = [
  {
    title: '6.5m Day Cruiser — Hull Plug',
    badge: 'Plug Printing',
    image: 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%23360%22><defs><linearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22><stop offset=%220%%22 stop-color=%22#0ea5e9%22/><stop offset=%22100%%22 stop-color=%22#2563eb%22/></linearGradient></defs><rect width=%22640%22 height=%23360%22 fill=%22%23021629%22/><path d=%22M60 280 C180 220 460 200 600 240%22 stroke=%22url(%23g)%22 stroke-width=%223%22 fill=%22none%22/><path d=%22M80 300 C220 260 500 240 620 280%22 stroke=%22#22d3ee%22 stroke-width=%222%22 fill=%22none%22 opacity=%220.8%22/></svg>'
  },
  {
    title: 'Console & Bench Set',
    badge: 'Custom Parts',
    image: 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%23360%22><rect width=%22640%22 height=%23360%22 fill=%22%23021629%22/><rect x=%22100%22 y=%22110%22 width=%22260%22 height=%22140%22 rx=%2216%22 stroke=%22#f59e0b%22 stroke-width=%223%22 fill=%22none%22/><rect x=%22380%22 y=%22140%22 width=%22160%22 height=%2290%22 rx=%2212%22 stroke=%22#ef4444%22 stroke-width=%222%22 fill=%22none%22 opacity=%220.8%22/></svg>'
  },
  {
    title: '7.2m RIB — Seating System',
    badge: 'Design to Mould',
    image: 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%23360%22><defs><linearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22><stop offset=%220%%22 stop-color=%22#67e8f9%22/><stop offset=%22100%%22 stop-color=%22#22d3ee%22/></linearGradient></defs><rect width=%22640%22 height=%23360%22 fill=%22%23021629%22/><ellipse cx=%22320%22 cy=%22180%22 rx=%22180%22 ry=%2280%22 stroke=%22url(%23g)%22 stroke-width=%223%22 fill=%22none%22/><line x1=%22160%22 y1=%22180%22 x2=%22480%22 y2=%22180%22 stroke=%22#22d3ee%22 stroke-width=%221.5%22 opacity=%220.7%22/></svg>'
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
