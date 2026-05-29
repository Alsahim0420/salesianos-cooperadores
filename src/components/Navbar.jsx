import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import ssccLogo from '../assets/sscc_logo.png'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Lo que hacemos', href: '#lo-que-hacemos' },
  { label: 'Misiones', href: '#misiones' },
  { label: 'Centros', href: '#centros' },
  { label: 'Contacto', href: '#contacto' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const reducedMotion = useReducedMotion()

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        hasScrolled
          ? 'border-[#123C69]/12 bg-[#FAF7F0]/92 shadow-[0_8px_28px_rgba(11,31,58,0.08)] dark:border-white/10 dark:bg-[#0A1628]/92 dark:shadow-[0_8px_28px_rgba(0,0,0,0.35)]'
          : 'border-[#123C69]/10 bg-[#FAF7F0]/95 dark:border-white/8 dark:bg-[#0A1628]/95'
      }`}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10"
        aria-label="Menú principal"
      >
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <img
            src={ssccLogo}
            alt="Logo de Salesianos Cooperadores"
            className="h-10 w-10 shrink-0 rounded-full border border-[#C9A227]/55 bg-white object-cover p-0.5 shadow-sm dark:border-[#C9A227]/40 dark:bg-[#112240] sm:h-11 sm:w-11"
          />
          <span className="truncate text-base font-semibold tracking-tight text-[#0B1F3A] dark:text-[#F5F7FA] sm:text-lg">
            Salesianos Cooperadores
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group relative text-sm font-medium tracking-[0.01em] text-[#2E2E2E] transition hover:text-[#123C69] dark:text-[#CBD5E1] dark:hover:text-[#7EB3E0]"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A227] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <motion.a
            href="#contacto"
            className="rounded-full border border-[#123C69] px-5 py-2.5 text-sm font-medium text-[#123C69] transition hover:bg-[#123C69] hover:text-[#FAF7F0] dark:border-[#7EB3E0] dark:text-[#7EB3E0] dark:hover:bg-[#7EB3E0] dark:hover:text-[#0A1628]"
            whileHover={reducedMotion ? undefined : { y: -1 }}
            whileTap={reducedMotion ? undefined : { y: 0 }}
          >
            Conocer más
          </motion.a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex rounded-lg border border-[#123C69]/20 p-2 text-[#123C69] transition hover:bg-[#F5F0E6] dark:border-white/15 dark:text-[#7EB3E0] dark:hover:bg-[#1A3358]"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="border-t border-[#123C69]/10 bg-[#FAF7F0] dark:border-white/10 dark:bg-[#0A1628] lg:hidden"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="space-y-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-[#2E2E2E] transition hover:bg-[#F5F0E6] hover:text-[#123C69] dark:text-[#CBD5E1] dark:hover:bg-[#1A3358] dark:hover:text-[#7EB3E0]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-5 sm:px-6">
              <a
                href="#contacto"
                onClick={closeMenu}
                className="inline-flex w-full justify-center rounded-full border border-[#123C69] px-4 py-2.5 text-sm font-medium text-[#123C69] transition hover:bg-[#123C69] hover:text-[#FAF7F0] dark:border-[#7EB3E0] dark:text-[#7EB3E0] dark:hover:bg-[#7EB3E0] dark:hover:text-[#0A1628]"
              >
                Conocer más
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
