import { Globe2, Heart, Users } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './animations/Reveal'
import StaggerContainer from './animations/StaggerContainer'
import StaggerItem from './animations/StaggerItem'

const missions = [
  {
    title: 'Misiones urbanas',
    description:
      'Presencia evangelizadora en barrios y periferias, acompañando familias y jóvenes en situación de vulnerabilidad.',
    icon: Users,
  },
  {
    title: 'Misiones educativas',
    description:
      'Apoyo a colegios, oratorios y proyectos educativos que promueven oportunidades y valores cristianos.',
    icon: Heart,
  },
  {
    title: 'Misiones regionales',
    description:
      'Experiencias apostólicas en distintas regiones, fortaleciendo la red salesiana y el servicio al joven.',
    icon: Globe2,
  },
]

function MissionsSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="misiones"
      className="bg-[#FAF7F0] py-24 text-[#0B1F3A] dark:bg-[#061220] dark:text-[#FAF7F0] sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" variant="editorial" duration={0.95} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#C9A227]">
            Apostolado
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Nuestras misiones</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B7280] dark:text-[#EAF2F8] sm:text-lg">
            Llevamos el espíritu de Don Bosco a distintos contextos: educación,
            solidaridad y presencia fraterna donde más se necesita.
          </p>
        </Reveal>

        <StaggerContainer
          className="mt-14 grid gap-6 md:grid-cols-3"
          delayChildren={0.1}
          staggerChildren={0.12}
        >
          {missions.map((mission) => {
            const Icon = mission.icon
            return (
              <StaggerItem key={mission.title}>
                <motion.article
                  className="rounded-2xl border border-[#123C69]/10 bg-white p-7 transition-[transform,background-color,border-color,box-shadow] duration-300 hover:border-[#C9A227]/35 hover:bg-[#F5F0E6] hover:shadow-[0_8px_20px_rgba(46,46,46,0.06)] dark:border-white/15 dark:bg-white/5 dark:hover:border-white/25 dark:hover:bg-white/[0.08] dark:hover:shadow-none"
                  whileHover={reducedMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Icon size={20} className="mb-4 text-[#C9A227]" />
                  <h3 className="mb-3 text-xl font-semibold">{mission.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6B7280] dark:text-[#EAF2F8]">
                    {mission.description}
                  </p>
                </motion.article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default MissionsSection
