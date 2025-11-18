import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks — your message has been noted. We will get back shortly.')
  }

  return (
    <section id="contact" className="bg-[#00101d] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Get in touch</h2>
          <p className="mt-2 text-cyan-100/80">Tell us about your boat or part you want to build.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-6 bg-white/5 border border-cyan-400/10 rounded-2xl p-6">
          <input className="px-4 py-3 rounded-lg bg-[#06182a] text-white placeholder:text-cyan-100/50 border border-cyan-400/10" placeholder="Name" required />
          <input className="px-4 py-3 rounded-lg bg-[#06182a] text-white placeholder:text-cyan-100/50 border border-cyan-400/10" placeholder="Email" type="email" required />
          <input className="px-4 py-3 rounded-lg bg-[#06182a] text-white placeholder:text-cyan-100/50 border border-cyan-400/10 md:col-span-2" placeholder="Project title" />
          <textarea rows="5" className="px-4 py-3 rounded-lg bg-[#06182a] text-white placeholder:text-cyan-100/50 border border-cyan-400/10 md:col-span-2" placeholder="Tell us about the vessel, size, parts and timeline"></textarea>
          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <div className="text-sm text-cyan-100/70">Based in Heraklion • Serving Greece and EU</div>
            <button className="px-5 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400">Send inquiry</button>
          </div>
          {status && <div className="md:col-span-2 text-emerald-400 text-sm">{status}</div>}
        </form>
      </div>
    </section>
  )
}

export default Contact
