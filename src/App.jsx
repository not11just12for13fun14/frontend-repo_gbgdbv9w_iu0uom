import React from 'react'
import { Menu } from 'lucide-react'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#001226] text-white">
      {/* top nav */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#000a16]/60 border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="text-white font-semibold tracking-tight">Mitos 3D & Design</a>
          <nav className="hidden md:flex items-center gap-8 text-cyan-100/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg border border-cyan-400/20 text-cyan-200"><Menu className="w-5 h-5" /></button>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <footer className="bg-[#000a16] border-t border-cyan-400/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-cyan-100/70">
          <div>© {new Date().getFullYear()} Mitos 3D & Design — Heraklion, Crete</div>
          <div className="text-xs">Aegean cyan · Minoan terracotta · Midnight slate</div>
        </div>
      </footer>
    </div>
  )
}

export default App
