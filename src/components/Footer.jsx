import { Instagram, Video } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#62B6FF]"></div>
              <span className="font-serif text-xl">AirFounders</span>
            </div>
            <p className="mt-3 text-sm text-white/80">AirFounders © 2026</p>
            <p className="text-sm text-white/80">Innovación, confianza y resultados.</p>
            <p className="mt-3 text-sm text-white/80">Email: contacto@airfounders.com</p>
            <p className="text-sm text-white/80">Airfounders2025@gmail.com</p>
            <p className="mt-3 text-sm text-white/80">Instagram: @airfounders</p>
            <p className="text-sm text-white/80">TikTok: @airfounders</p>
            <p className="mt-3 text-sm text-white/80">Madrid Sur – Fuenlabrada | Móstoles | Alcorcón</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition" aria-label="TikTok">
              <Video className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="text-center mt-10 text-xl font-serif">Trust The Process.</p>
      </div>
    </footer>
  )
}
