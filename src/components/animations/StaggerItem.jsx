import { motion, useReducedMotion } from 'framer-motion'

function StaggerItem({ children, className, distance = 18 }) {
  const reducedMotion = useReducedMotion()

  const variants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: distance },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}

export default StaggerItem
