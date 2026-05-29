import { motion, useReducedMotion } from 'framer-motion'

function AnimatedSectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const reducedMotion = useReducedMotion()
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'text-center' : ''}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-medium uppercase tracking-[0.16em] text-[#123C69] dark:text-[#7EB3E0]"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-2 text-3xl font-semibold text-[#0B1F3A] dark:text-[#F5F7FA] sm:text-4xl ${isCentered ? 'mx-auto' : ''}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 text-base leading-relaxed text-[#6B7280] dark:text-[#94A3B8] sm:text-lg ${isCentered ? 'mx-auto max-w-3xl' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default AnimatedSectionTitle
