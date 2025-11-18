import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Gracias a esta empresa no tengo que mirar y agendar citas todo el día, ahora  solo me dedico a hacer mi trabajo.',
    author: 'Brillox Car Detail, Ajalvir'
  },
  {
    quote: 'AirFounders cambió completamente la presencia online de nuestro salón. Ahora las clientas llegan solas.',
    author: 'Salón Ana & Co, Fuenlabrada'
  },
  {
    quote: 'Automatizamos nuestra agenda y hemos duplicado las citas semanales. Son profesionales y cercanos.',
    author: 'Peluquería Óscar Blanco, Móstoles'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl sm:text-[28px] text-[#1C1C1C] text-center">Confianza que se construye con resultados.</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-[#E5E5E5] bg-white p-6 flex flex-col">
              <div className="flex items-center gap-1 text-[#62B6FF]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-[#1C1C1C] flex-1">“{t.quote}”</p>
              <p className="mt-3 text-xs text-[#333333]">— {t.author}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#333333] mt-6">Modelo de estrellas 1–5 y espacio listo para reseñas futuras.</p>
      </div>
    </section>
  )
}
