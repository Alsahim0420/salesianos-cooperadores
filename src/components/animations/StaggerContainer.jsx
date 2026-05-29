import { motion, useReducedMotion } from 'framer-motion'

function StaggerContainer({
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.1,
  once = true,
  amount = 0.2,
}) {
  const reducedMotion = useReducedMotion()

  const variants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  )
}

export default StaggerContainer
