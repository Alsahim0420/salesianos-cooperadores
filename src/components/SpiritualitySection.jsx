import { Heart, HandHelping, Laugh, Users, BookHeart, ShieldCheck } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './animations/Reveal'
import StaggerContainer from './animations/StaggerContainer'
import StaggerItem from './animations/StaggerItem'

const values = [
  { label: 'Alegría', icon: Laugh },
  { label: 'Cercanía', icon: HandHelping },
  { label: 'Oración', icon: BookHeart },
  { label: 'Servicio', icon: ShieldCheck },
  { label: 'Comunidad', icon: Users },
  { label: 'Amor a María Auxiliadora', icon: Heart },
]

function SpiritualitySection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-white py-24 text-[#0B1F3A] dark:bg-[#0B1F3A] dark:text-[#FAF7F0] sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left" variant="lateral" duration={0.95}>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Espiritualidad Salesiana
            </h2>
            <motion.p
              className="mt-5 inline-block pb-2 text-xl font-semibold italic text-[#C9A227]"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              “Da mihi animas, cetera tolle”
            </motion.p>
            <motion.div
              className="mt-1 h-px w-56 origin-left bg-[#C9A227]/70"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: reducedMotion ? 0 : 0.95, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#6B7280] dark:text-[#EAF2F8]">
              Vivimos una espiritualidad encarnada en lo cotidiano: alegre,
              cercana y apostólica. Buscamos a Dios en la misión, en los
              jóvenes, en la comunidad y en la confianza filial a María
              Auxiliadora.
            </p>
          </Reveal>

          <StaggerContainer
            className="grid gap-4 sm:grid-cols-2"
            delayChildren={0.12}
            staggerChildren={0.08}
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <StaggerItem key={value.label}>
                  <motion.div
                    className="rounded-xl border border-[#123C69]/10 bg-[#FAF7F0] p-4 transition-[transform,background-color,border-color] duration-300 hover:border-[#C9A227]/35 hover:bg-[#F5F0E6] dark:border-white/15 dark:bg-white/5 dark:hover:border-white/25 dark:hover:bg-white/[0.08]"
                    whileHover={reducedMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Icon size={16} className="mb-2 text-[#C9A227]" />
                    <p className="text-sm font-medium">{value.label}</p>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

export default SpiritualitySection
