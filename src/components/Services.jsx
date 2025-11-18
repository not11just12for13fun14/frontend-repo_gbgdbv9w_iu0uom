import React from 'react'
import { Wrench, Waves, Ruler, Cube, ShipWheel } from 'lucide-react'

const items = [
  {
    icon: Cube,
    title: 'Large‑format 3D Printing',
    desc: 'Plug production on Modix Big Meter for mould‑ready tooling and hull masters.'
  },
  {
    icon: Ruler,
    title: 'Marine CAD & Engineering',
    desc: 'Parametric design for hulls, consoles, benches, and ergonomic seating.'
  },
  {
    icon: ShipWheel,
    title: 'Customization & Retrofits',
    desc: 'Bespoke parts for yards and private projects with tight tolerance fitment.'
  },
  {
    icon: Waves,
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
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
