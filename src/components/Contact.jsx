import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-3xl sm:text-[28px] text-[#1C1C1C] text-center">¿Listo para dar el salto digital?</h2>
        <p className="text-center text-[#333333] mt-3">Completa el formulario y te contactaremos en menos de 24 horas.</p>

        <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border border-[#E5E5E5] p-6 bg-[#F9F9F9]">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#333333] mb-1">Nombre completo</label>
              <input required className="w-full rounded-md border border-[#E5E5E5] bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#62B6FF]" />
            </div>
            <div>
              <label className="block text-sm text-[#333333] mb-1">Empresa / Negocio</label>
              <input className="w-full rounded-md border border-[#E5E5E5] bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#62B6FF]" />
            </div>
            <div>
              <label className="block text-sm text-[#333333] mb-1">Email</label>
              <input type="email" required className="w-full rounded-md border border-[#E5E5E5] bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#62B6FF]" />
            </div>
            <div>
              <label className="block text-sm text-[#333333] mb-1">Teléfono</label>
              <input type="tel" className="w-full rounded-md border border-[#E5E5E5] bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#62B6FF]" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-[#333333] mb-1">Mensaje</label>
            <textarea rows="4" className="w-full rounded-md border border-[#E5E5E5] bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#62B6FF]"></textarea>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className="inline-flex items-center px-5 py-3 rounded-md bg-[#62B6FF] text-white text-sm font-medium hover:brightness-95 transition">
              Enviar / Agendar reunión
            </button>
            <span className="text-sm text-[#333333]">Te contactaremos en menos de 24h. Sin compromiso.</span>
          </div>

          {sent && (
            <p className="mt-4 text-sm text-green-700">Gracias. Hemos recibido tu solicitud. Te contactaremos en menos de 24h.</p>
          )}
        </form>
      </div>
    </section>
  )
}
