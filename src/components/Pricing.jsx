export default function Pricing() {
  return (
    <section id="planes" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl sm:text-[28px] text-[#1C1C1C] text-center">Tres niveles, una misma misión: hacer crecer tu negocio.</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#E5E5E5] p-6 flex flex-col">
            <h3 className="text-xl text-[#1C1C1C] font-medium">Plan Starter — Presencia y Crecimiento</h3>
            <p className="mt-3 text-sm text-[#333333] flex-1">Incluye redes sociales + 8/15 publicaciones + KPIs esenciales.</p>
            <p className="mt-4 text-[#1C1C1C] font-medium">125 € configuración inicial / 50 €/mes mantenimiento</p>
            <a href="#contacto" className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-md bg-black text-white text-sm hover:opacity-90">Quiero empezar</a>
          </div>

          <div className="rounded-2xl border border-[#E5E5E5] p-6 flex flex-col bg-[#F9F9F9]">
            <h3 className="text-xl text-[#1C1C1C] font-medium">Plan Pro — Web + Redes + KPIs</h3>
            <p className="mt-3 text-sm text-[#333333] flex-1">Web profesional + gestión de redes + conexión entre canales + informe mensual + consultoría mensuales.</p>
            <p className="mt-4 text-[#1C1C1C] font-medium">220 € configuración inicial / 70 €/mes mantenimiento</p>
            <a href="#contacto" className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#62B6FF] text-white text-sm hover:brightness-95">Quiero mi web y redes</a>
          </div>

          <div className="rounded-2xl border border-[#E5E5E5] p-6 flex flex-col">
            <h3 className="text-xl text-[#1C1C1C] font-medium">Plan Elite — Ecosistema Digital + Automatización</h3>
            <p className="mt-3 text-sm text-[#333333] flex-1">Web + RRSS + KPIs + Automatización (ChatBot, embudo, reseñas, citas).</p>
            <p className="mt-4 text-[#1C1C1C] font-medium">450 € configuración inicial / 120 €/mes mantenimiento</p>
            <a href="#contacto" className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-md border border-[#E5E5E5] text-[#1C1C1C] text-sm hover:bg-[#F9F9F9]">Quiero automatizar todo</a>
          </div>
        </div>
        <p className="text-center text-sm text-[#333333] mt-6">Todos nuestros planes incluyen soporte continuo y actualizaciones mensuales.</p>
      </div>
    </section>
  )
}
