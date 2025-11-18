import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partner from './components/Partner'
import Services from './components/Services'
import Pricing from './components/Pricing'
import KPIs from './components/KPIs'
import Automation from './components/Automation'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1C1C1C]">
      <Navbar />

      <main>
        <Hero />
        <Partner />
        <Services />
        <Pricing />
        <KPIs />
        <Automation />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <a href="#contacto" className="inline-flex items-center px-4 py-2 rounded-full bg-[#62B6FF] text-white text-sm shadow-lg hover:brightness-95">Agendar reunión gratuita</a>
        <a href="#planes" className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm shadow-lg hover:opacity-90">Ver planes</a>
      </div>
    </div>
  )
}

export default App