import { TrendingUp, Users, MousePointerClick, BarChart3 } from 'lucide-react'

const kpis = [
  { icon: TrendingUp, label: 'Crecimiento de seguidores' },
  { icon: Users, label: 'Interacción y comunidad' },
  { icon: MousePointerClick, label: 'Tráfico web y conversiones' },
  { icon: BarChart3, label: 'Reservas y satisfacción' },
]

export default function KPIs() {
  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl sm:text-[28px] text-[#1C1C1C] text-center">Resultados que se pueden medir.</h2>
        <p className="text-center text-[#333333] mt-3 max-w-3xl mx-auto">En AirFounders no creemos en el marketing vacío. Cada acción se traduce en datos reales: crecimiento de seguidores, interacción, tráfico web, reservas y satisfacción del cliente. Los informes se presentan de forma clara y visual para mostrar el progreso real.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-2xl border border-[#E5E5E5] bg-white p-6">
              <div className="w-10 h-10 rounded-md bg-[#62B6FF]/10 text-[#62B6FF] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm text-[#1C1C1C]">{label}</p>
              <div className="mt-3 h-2 w-full bg-[#F9F9F9] rounded-full overflow-hidden">
                <div className="h-full bg-[#62B6FF] rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#333333] mt-6">Barras sencillas, iconos, nada de datos falsos.</p>
      </div>
    </section>
  )
}
