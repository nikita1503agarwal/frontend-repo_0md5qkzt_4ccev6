import { Bot, MessageSquare, CalendarClock, Star } from 'lucide-react'

const items = [
  { icon: MessageSquare, text: 'ChatBot 24/7 en WhatsApp o web' },
  { icon: Bot, text: 'Embudo de conversión automatizado' },
  { icon: Star, text: 'Gestión automática de reseñas' },
  { icon: CalendarClock, text: 'Agenda digital con reservas y recordatorios' },
]

export default function Automation() {
  return (
    <section id="automatizacion" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl sm:text-[28px] text-[#1C1C1C] text-center">La inteligencia artificial al servicio de tu empresa.</h2>
        <p className="text-center text-[#333333] mt-3 max-w-3xl mx-auto">La automatización es el siguiente paso en la evolución digital. AirFounders implementa sistemas de IA que trabajan por ti:</p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] p-6">
              <div className="flex items-center gap-3 text-[#1C1C1C]">
                <div className="w-9 h-9 rounded-md bg-white border border-[#E5E5E5] flex items-center justify-center text-[#62B6FF]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm">{text}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#1C1C1C] mt-6 italic">“Tú ganas tiempo. Tu negocio gana clientes.”</p>
        <p className="text-center text-sm text-[#333333] mt-2">Iconos con microanimación suave al hacer scroll.</p>
      </div>
    </section>
  )
}
