import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Planes', href: '#planes' },
  { label: 'Automatización IA', href: '#automatizacion' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchor = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
    // update hash without jumping
    history.replaceState(null, '', href)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-white/80 backdrop-blur border-b border-[#E5E5E5]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" onClick={(e)=>handleAnchor(e,'#inicio')} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#62B6FF]"></div>
          <span className="font-serif text-xl tracking-tight text-[#1C1C1C]">AirFounders</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e)=>handleAnchor(e,item.href)}
              className="text-sm text-[#333333] hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e)=>handleAnchor(e,'#contacto')}
            className="inline-flex items-center px-4 py-2 rounded-md bg-[#62B6FF] text-white text-sm font-medium hover:brightness-95 transition"
          >
            Agendar reunión gratuita
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)} aria-label="Abrir menú">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-white">
          <div className="px-4 py-3 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleAnchor(e,item.href)}
                className="block text-sm text-[#333333] py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e)=>handleAnchor(e,'#contacto')}
              className="inline-flex items-center px-4 py-2 rounded-md bg-[#62B6FF] text-white text-sm font-medium"
            >
              Agendar reunión gratuita
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
