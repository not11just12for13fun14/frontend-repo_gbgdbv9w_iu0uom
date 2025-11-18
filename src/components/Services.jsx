import React from 'react'
import { Wrench, Layers, Ruler, Package, Ship } from 'lucide-react'

const items = [
  {
    icon: Package,
    title: 'Large‑format 3D Printing',
    desc: 'Plug production on Modix Big Meter for mould‑ready tooling and hull masters.'
  },
  {
    icon: Ruler,
    title: 'Marine CAD & Engineering',
    desc: 'Parametric design for hulls, consoles, benches, and ergonomic seating.'
  },
  {
    icon: Ship,
    title: 'Customization & Retrofits',
    desc: 'Bespoke parts for yards and private projects with tight tolerance fitment.'
  },
  {
    icon: Layers,
    title: 'Surface Finishing Workflow',
    desc: 'From printed plug to polished mould: sealing, surfacing, and prep.'
  },
  {
    icon: Wrench,
    title: 'Yard Collaboration',
    desc: 'We integrate into your production to accelerate prototyping and tooling.'
  }
]

const Services = () => {
  return (
    <section id="services" className="bg-[#021629] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-3 text-cyan-100/80">End‑to‑end design and fabrication anchored in Minoan roots.</p>
        </div>

        {/* section illustration: toolpath + wave */}
        <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-white/5 p-4">
          <svg viewBox="0 0 960 160" className="w-full h-auto" aria-hidden>
            <defs>
              <linearGradient id="aegean" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="60%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#0b3b7a" />
              </linearGradient>
            </defs>
            <rect x="8" y="8" width="944" height="144" rx="16" fill="#06182a" />
            {/* toolpath curves */}
            <g fill="none" stroke="url(#aegean)" strokeWidth="1.6" opacity="0.85">
              {Array.from({ length: 8 }).map((_, i) => (
                <path key={i} d={`M ${40 + i*10} 120 C ${260 + i*6} ${50 + i*3}, ${560 + i*6} ${60 + i*3}, ${900 - i*10} ${110 - i*2}`} />
              ))}
            </g>
            {/* wave footer */}
            <path d="M0,140 C120,120 240,160 360,150 C480,140 600,120 720,140 C840,160 920,150 960,140" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.6" />
          </svg>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-cyan-400/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <Icon className="w-6 h-6 text-cyan-300" />
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
