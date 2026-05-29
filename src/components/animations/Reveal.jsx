import { motion, useReducedMotion } from 'framer-motion'

const offsetByDirection = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
}

function Reveal({
  children,
  direction = 'up',
  variant = 'rise',
  delay = 0,
  duration = 0.85,
  once = true,
  amount = 0.25,
  className,
}) {
  const reducedMotion = useReducedMotion()
  const offset = offsetByDirection[direction] ?? offsetByDirection.up

  const buildHidden = () => {
    if (variant === 'soft') return { opacity: 0, x: offset.x * 0.45, y: offset.y * 0.45 }
    if (variant === 'lateral') return { opacity: 0, x: offset.x * 1.2, y: offset.y * 0.2 }
    if (variant === 'editorial') {
      return {
        opacity: 0,
        x: offset.x * 0.35,
        y: offset.y * 0.75,
        clipPath: 'inset(0 0 100% 0)',
      }
    }
    return { opacity: 0, x: offset.x, y: offset.y }
  }

  const buildShow = () => {
    if (variant === 'editorial') return { opacity: 1, x: 0, y: 0, clipPath: 'inset(0 0 0% 0)' }
    return { opacity: 1, x: 0, y: 0 }
  }

  const variants = reducedMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : { hidden: buildHidden(), show: buildShow() }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
