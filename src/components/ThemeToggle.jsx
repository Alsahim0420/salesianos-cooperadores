import { Moon, Sun } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()
  const reducedMotion = useReducedMotion()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      aria-pressed={isDark}
      className={`group relative h-11 w-[4.75rem] shrink-0 rounded-full p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227] ${className}`}
    >
      <span
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C9A227]/50 via-[#123C69]/20 to-[#C9A227]/30 opacity-80 blur-[2px] transition-opacity group-hover:opacity-100 dark:from-[#C9A227]/40 dark:via-[#4a8bc4]/20 dark:to-[#C9A227]/25"
        aria-hidden
      />
      <span className="relative flex h-full w-full items-center rounded-full border border-[#123C69]/15 bg-gradient-to-b from-[#FAF7F0] to-[#F5F0E6] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)] dark:border-white/10 dark:from-[#1a3358] dark:to-[#0d1f38] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.06)]">
        <Sun
          size={14}
          className={`absolute left-2.5 z-10 transition-colors duration-300 ${
            isDark ? 'text-[#6B7280]/50' : 'text-[#C9A227]'
          }`}
          strokeWidth={2.25}
        />
        <Moon
          size={14}
          className={`absolute right-2.5 z-10 transition-colors duration-300 ${
            isDark ? 'text-[#EAF2F8]' : 'text-[#123C69]/35'
          }`}
          strokeWidth={2.25}
        />
        <motion.span
          className="relative z-20 h-9 w-9 rounded-full bg-gradient-to-br from-[#123C69] to-[#0B1F3A] shadow-[0_4px_14px_rgba(11,31,58,0.35)] ring-1 ring-white/20 dark:from-[#C9A227] dark:to-[#9a7b1a] dark:shadow-[0_4px_16px_rgba(201,162,39,0.35)] dark:ring-[#C9A227]/30"
          animate={{ x: isDark ? 30 : 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 520, damping: 32 }
          }
        />
      </span>
    </button>
  )
}

export default ThemeToggle
