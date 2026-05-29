import { ArrowRight, Users } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

function Hero() {
  const reducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 600], [0, reducedMotion ? 0 : -20])
  const accentY = useTransform(scrollY, [0, 600], [0, reducedMotion ? 0 : 18])

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#FAF7F0] py-24 transition-colors duration-300 dark:bg-[#0A1628] sm:py-28 lg:py-32"
    >
      <motion.div
        style={{ y: accentY }}
        className="absolute -left-24 top-8 h-60 w-60 rounded-full bg-[#C9A227]/10 blur-3xl dark:bg-[#C9A227]/15"
      />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#C9A227]/8 blur-3xl dark:bg-[#4a8bc4]/12" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <motion.div
          className="space-y-7"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: reducedMotion ? 0 : 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex rounded-full border border-[#C9A227]/35 bg-[#C9A227]/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#123C69] dark:border-[#C9A227]/40 dark:bg-[#C9A227]/15 dark:text-[#7EB3E0]"
          >
            Al estilo de Don Bosco
          </motion.span>
          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                y: reducedMotion ? 0 : 22,
                clipPath: reducedMotion ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
              },
              show: { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' },
            }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-4xl font-semibold leading-[1.1] text-[#0B1F3A] dark:text-[#F5F7FA] sm:text-5xl lg:text-[3.6rem]"
          >
            Salesianos Cooperadores: fe, servicio y misión al estilo de Don
            Bosco
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: reducedMotion ? 0 : 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-base leading-relaxed text-[#6B7280] dark:text-[#94A3B8] sm:text-lg"
          >
            Laicos comprometidos con la evangelización, la educación de los
            jóvenes y la construcción de una sociedad más humana y cristiana.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            className="flex flex-col gap-4 pt-2 sm:flex-row"
          >
            <motion.a
              href="#quienes-somos"
              className="inline-flex items-center justify-center rounded-full bg-[#0B1F3A] px-7 py-3.5 text-sm font-medium text-[#FAF7F0] transition hover:bg-[#123C69] dark:bg-[#C9A227] dark:text-[#0A1628] dark:hover:bg-[#d4b04a]"
              variants={{
                hidden: { opacity: 0, y: reducedMotion ? 0 : 10 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={reducedMotion ? undefined : { y: -1 }}
              whileTap={reducedMotion ? undefined : { y: 0 }}
            >
              Conoce quiénes somos
            </motion.a>
            <motion.a
              href="#centros"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#123C69]/35 px-7 py-3.5 text-sm font-medium text-[#123C69] transition hover:bg-[#F5F0E6] dark:border-[#7EB3E0]/40 dark:text-[#7EB3E0] dark:hover:bg-[#1A3358]"
              variants={{
                hidden: { opacity: 0, y: reducedMotion ? 0 : 10 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={reducedMotion ? undefined : { y: -1 }}
              whileTap={reducedMotion ? undefined : { y: 0 }}
            >
              Ver nuestros centros
              <motion.span whileHover={reducedMotion ? undefined : { x: 2 }}>
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          className="rounded-[2rem] border border-[#123C69]/15 bg-white p-6 shadow-[0_10px_28px_rgba(18,60,105,0.07)] dark:border-white/10 dark:bg-[#112240] dark:shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
          initial={{ opacity: 0, x: reducedMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
            alt="Comunidad juvenil compartiendo en ambiente fraterno"
            className="h-72 w-full rounded-3xl object-cover brightness-[0.96] sm:h-80"
          />
          <div className="mt-5 flex items-center gap-3 border-t border-[#123C69]/10 pt-4 text-sm text-[#6B7280] dark:border-white/10 dark:text-[#94A3B8]">
            <Users size={18} className="text-[#C9A227]" />
            Caminamos juntos en fe, servicio y fraternidad salesiana.
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
