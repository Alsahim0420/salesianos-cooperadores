import { HeartHandshake, Users, HandHeart } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './animations/Reveal'
import StaggerContainer from './animations/StaggerContainer'
import StaggerItem from './animations/StaggerItem'
import AnimatedSectionTitle from './animations/AnimatedSectionTitle'

const pillars = [
  {
    title: 'Vocación',
    description:
      'Vivimos la fe en lo cotidiano: familia, trabajo y misión, como llamado concreto de santidad laical.',
    icon: HeartHandshake,
  },
  {
    title: 'Comunidad',
    description:
      'Caminamos juntos con espíritu de familia, cercanía y corresponsabilidad apostólica.',
    icon: Users,
  },
  {
    title: 'Servicio',
    description:
      'Acompañamos a los jóvenes, especialmente a los más necesitados, con presencia educativa y esperanza cristiana.',
    icon: HandHeart,
  },
]

function AboutSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="quienes-somos"
      className="bg-[#FFFFFF] py-24 transition-colors duration-300 dark:bg-[#0D1F38] sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal direction="up" variant="editorial" duration={1.05} className="space-y-5">
          <AnimatedSectionTitle eyebrow="Identidad" title="Quiénes somos" />
          <p className="max-w-xl text-base leading-relaxed text-[#2E2E2E] dark:text-[#CBD5E1] sm:text-lg">
            Somos laicos de la Familia Salesiana que, inspirados por San Juan
            Bosco, vivimos el Evangelio en la vida diaria y nos comprometemos
            con la educación, la evangelización y la transformación de la
            sociedad desde el amor cristiano.
          </p>
          <p className="max-w-lg border-l-2 border-[#C9A227] pl-4 text-sm leading-relaxed text-[#6B7280] dark:text-[#94A3B8] sm:text-base">
            Nuestra identidad nace de una espiritualidad encarnada, alegre y
            profundamente humana, al servicio de la Iglesia y de los jóvenes.
          </p>
        </Reveal>

        <StaggerContainer
          className="grid gap-4 self-start"
          delayChildren={0.15}
          staggerChildren={0.14}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <StaggerItem key={pillar.title}>
                <motion.article
                  className="rounded-2xl border border-[#123C69]/10 bg-[#FAF7F0] p-6 transition-[transform,background-color,border-color,box-shadow] duration-300 hover:border-[#C9A227]/35 hover:bg-[#F5F0E6] hover:shadow-[0_8px_20px_rgba(46,46,46,0.06)] dark:border-white/10 dark:bg-[#112240] dark:hover:border-white/20 dark:hover:bg-[#152a4a] dark:hover:shadow-none"
                  whileHover={reducedMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div whileHover={reducedMotion ? undefined : { y: -1 }}>
                    <Icon className="mb-4 text-[#123C69] dark:text-[#7EB3E0]" size={20} />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-semibold text-[#0B1F3A] dark:text-[#F5F7FA]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B7280] dark:text-[#94A3B8]">
                    {pillar.description}
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

export default AboutSection
