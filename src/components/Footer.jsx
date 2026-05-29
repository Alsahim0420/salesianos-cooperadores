import { Globe, MessageCircle, Radio } from 'lucide-react'
import ssccLogo from '../assets/sscc_logo.png'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Lo que hacemos', href: '#lo-que-hacemos' },
  { label: 'Misiones', href: '#misiones' },
  { label: 'Centros', href: '#centros' },
  { label: 'Contacto', href: '#contacto' },
]

const socialLinks = [
  { label: 'Facebook', icon: MessageCircle, href: '#' },
  { label: 'Instagram', icon: Globe, href: '#' },
  { label: 'YouTube', icon: Radio, href: '#' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2E2E2E] py-12 text-[#FAF7F0] dark:border-t dark:border-white/5 dark:bg-[#040d18]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={ssccLogo}
              alt="Logo de Salesianos Cooperadores"
              className="h-12 w-12 rounded-full border border-[#C9A227]/60 bg-white/90 object-cover p-0.5"
            />
            <h3 className="text-xl font-bold">Salesianos Cooperadores</h3>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#EAF2F8]">
            Asociación laical de la Familia Salesiana al servicio de la
            evangelización, la educación y el acompañamiento de los jóvenes.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#C9A227]">
            Enlaces rápidos
          </h4>
          <ul className="mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-[#EAF2F8] transition hover:text-[#C9A227]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#C9A227]">
            Síguenos
          </h4>
          <div className="mt-3 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-full border border-white/20 p-2 text-[#EAF2F8] transition hover:border-[#C9A227] hover:text-[#C9A227]"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-[#EAF2F8]/80">
        © {currentYear} Salesianos Cooperadores. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
