import { Sparkles, Globe, Bot, BarChart3, Users } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Redes Sociales Profesionales',
    desc: 'Creación y gestión de perfiles en Instagram y TikTok. Diseño, publicaciones y estrategias de crecimiento.'
  },
  {
    icon: Globe,
    title: 'Páginas Web Modernas',
    desc: 'Sitios rápidos, visuales, responsive y conectados con redes sociales.'
  },
  {
    icon: Bot,
    title: 'Automatización Inteligente',
    desc: 'ChatBots, embudos, gestión automática de citas y reseñas.'
  },
  {
    icon: BarChart3,
    title: 'Seguimiento de KPIs',
    desc: 'Informes visuales, métricas reales y crecimiento medible.'
  },
  {
    icon: Users,
    title: 'Consultoría Personalizada',
    desc: 'Acompañamiento directo y estrategias adaptadas al negocio.'
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl sm:text-[28px] text-[#1C1C1C] text-center">Todo lo que tu empresa necesita para destacar online.</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-[#E5E5E5] bg-white p-6 hover:shadow-sm transition">
              <div className="w-10 h-10 rounded-md bg-[#62B6FF]/10 text-[#62B6FF] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg text-[#1C1C1C] font-medium">{title}</h3>
              <p className="mt-2 text-sm text-[#333333]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
