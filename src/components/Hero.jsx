import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-24 sm:pt-28 pb-16 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[#F9F9F9]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <h1 className="font-serif text-[40px] leading-tight sm:text-[48px] text-[#1C1C1C]">
                AirFounders
              </h1>
              <p className="text-[18px] sm:text-[20px] text-[#333333] mt-2">
                Modernizamos tu negocio, digitalizamos tu futuro.
              </p>
            </div>
            <p className="text-[16px] text-[#333333] max-w-xl">
              Páginas web profesionales, redes sociales estratégicas y automatización con inteligencia artificial para pequeñas y medianas empresas.
              Tú te ocupas de tu negocio, nosotros de hacerlo crecer.
            </p>
            <p className="mt-4 italic text-[#1C1C1C]">Trust The Process.</p>

            <p className="mt-6 text-[#333333] max-w-xl">
              “Moderniza tu empresa sin complicarte. Nosotros hacemos el trabajo; tú disfrutas del crecimiento.”
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center px-5 py-3 rounded-md bg-[#62B6FF] text-white text-sm font-medium hover:brightness-95 transition">
                Agendar una reunión gratuita
              </a>
              <a href="#planes" className="inline-flex items-center px-5 py-3 rounded-md border border-[#E5E5E5] text-[#1C1C1C] text-sm font-medium hover:bg-[#F9F9F9] transition">
                Ver planes
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-[420px] sm:h-[520px]">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-[#E5E5E5] bg-white">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
