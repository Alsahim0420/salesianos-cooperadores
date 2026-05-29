import { Cross, HandHeart, Megaphone, UsersRound } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSectionTitle from './animations/AnimatedSectionTitle'
import Reveal from './animations/Reveal'
import StaggerContainer from './animations/StaggerContainer'
import StaggerItem from './animations/StaggerItem'

const missionItems = [
  {
    title: 'Evangelizar educando',
    description:
      'Anunciamos a Jesús acompañando procesos educativos integrales que dignifican la vida.',
    icon: Megaphone,
  },
  {
    title: 'Acompañar a los jóvenes',
    description:
      'Nos hacemos presentes para escuchar, orientar y caminar con ellos en sus desafíos.',
    icon: UsersRound,
  },
  {
    title: 'Servir en la comunidad',
    description:
      'Promovemos el bien común desde obras concretas de solidaridad y compromiso social.',
    icon: HandHeart,
  },
  {
    title: 'Vivir la espiritualidad salesiana',
    description:
      'Cultivamos una vida de fe alegre y sencilla, sostenida por la oración y la fraternidad.',
    icon: Cross,
  },
]

function MissionSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="mision" className="bg-[#FAF7F0] py-24 transition-colors duration-300 dark:bg-[#0A1628] sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          className="mx-auto max-w-3xl text-center"
          direction="down"
          variant="soft"
          duration={0.8}
        >
          <AnimatedSectionTitle
            align="center"
            eyebrow="Servicio apostólico"
            title="Nuestra misión"
            subtitle="Respondemos al llamado de Dios con una presencia educativa y evangelizadora al estilo de Don Bosco, especialmente entre niños, adolescentes y jóvenes."
          />
        </Reveal>

        <StaggerContainer
          className="mt-14 grid gap-6 md:grid-cols-2"
          delayChildren={0.05}
          staggerChildren={0.11}
        >
          {missionItems.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <motion.article
                  className="rounded-2xl border border-[#123C69]/10 bg-white p-7 shadow-[0_6px_18px_rgba(46,46,46,0.05)] transition-[transform,background-color,border-color,box-shadow] duration-300 hover:border-[#C9A227]/35 hover:bg-[#F5F0E6] hover:shadow-[0_8px_20px_rgba(46,46,46,0.06)] dark:border-white/10 dark:bg-[#112240] dark:shadow-[0_6px_18px_rgba(0,0,0,0.25)] dark:hover:border-white/20 dark:hover:bg-[#152a4a] dark:hover:shadow-none"
                  whileHover={reducedMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="mb-4 inline-flex rounded-xl bg-[#F5F0E6] p-2.5 text-[#123C69] dark:bg-[#1A3358] dark:text-[#7EB3E0]"
                    whileHover={reducedMotion ? undefined : { y: -1 }}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-semibold text-[#0B1F3A] dark:text-[#F5F7FA]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B7280] dark:text-[#94A3B8]">
                    {item.description}
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

export default MissionSection
