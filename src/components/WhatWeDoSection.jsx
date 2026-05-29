import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSectionTitle from './animations/AnimatedSectionTitle'
import Reveal from './animations/Reveal'
import StaggerContainer from './animations/StaggerContainer'
import StaggerItem from './animations/StaggerItem'

const activities = [
  {
    title: 'Oratorios',
    description:
      'Ambientes educativos y de alegría donde acompañamos a niños y adolescentes en su crecimiento humano y espiritual.',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Servicio juvenil',
    description:
      'Acciones solidarias y pastorales que promueven liderazgo, fe y compromiso social entre los jóvenes.',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Espacios de oración',
    description:
      'Momentos de encuentro con Dios que sostienen la misión y fortalecen la vida comunitaria.',
    image:
      'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Actividades comunitarias',
    description:
      'Celebraciones y jornadas fraternas que fortalecen la unidad y el sentido de familia salesiana.',
    image:
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
  },
]

function WhatWeDoSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="lo-que-hacemos" className="bg-white py-24 transition-colors duration-300 dark:bg-[#0D1F38] sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl" direction="right" variant="lateral" duration={0.95}>
          <AnimatedSectionTitle
            eyebrow="Acción apostólica"
            title="Lo que hacemos"
            subtitle="Vivimos la misión salesiana en acciones concretas de educación, servicio y acompañamiento, poniendo siempre a los jóvenes en el centro."
          />
        </Reveal>

        <StaggerContainer
          className="mt-12 grid gap-7 md:grid-cols-2"
          delayChildren={0.04}
          staggerChildren={0.1}
        >
          {activities.map((activity) => (
            <StaggerItem key={activity.title}>
              <motion.article
                className="overflow-hidden rounded-2xl border border-[#123C69]/10 bg-[#FAF7F0] transition-[transform,background-color,border-color,box-shadow] duration-300 hover:border-[#C9A227]/35 hover:bg-[#F5F0E6] hover:shadow-[0_8px_20px_rgba(46,46,46,0.06)] dark:border-white/10 dark:bg-[#112240] dark:hover:border-white/20 dark:hover:bg-[#152a4a] dark:hover:shadow-none"
                whileHover={reducedMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#0B1F3A] dark:text-[#F5F7FA]">
                    {activity.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280] dark:text-[#94A3B8]">
                    {activity.description}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default WhatWeDoSection
