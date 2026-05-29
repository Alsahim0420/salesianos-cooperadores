import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('sscc-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('sscc-theme', theme)
    root.style.colorScheme = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  const value = {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    setTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components -- hook compartido con el provider
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider')
  }
  return context
}
