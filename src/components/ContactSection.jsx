import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import AnimatedSectionTitle from './animations/AnimatedSectionTitle'
import Reveal from './animations/Reveal'

const initialForm = {
  nombre: '',
  correo: '',
  ciudad: '',
  mensaje: '',
}

function ContactSection() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const reducedMotion = useReducedMotion()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!formData.nombre.trim()) nextErrors.nombre = 'Ingresa tu nombre.'
    if (!formData.correo.trim()) {
      nextErrors.correo = 'Ingresa tu correo.'
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      nextErrors.correo = 'Ingresa un correo válido.'
    }
    if (!formData.ciudad.trim()) nextErrors.ciudad = 'Ingresa tu ciudad.'
    if (!formData.mensaje.trim()) nextErrors.mensaje = 'Escribe tu mensaje.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setFormData(initialForm)
    setSuccessMessage(
      'Gracias por escribirnos. Pronto nos pondremos en contacto contigo.'
    )
  }

  return (
    <section id="contacto" className="bg-[#FAF7F0] py-24 transition-colors duration-300 dark:bg-[#0A1628] sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="left" variant="soft" duration={0.78} className="space-y-4">
          <AnimatedSectionTitle
            eyebrow="Acompañamiento"
            title="Contacto"
            subtitle="Si deseas conocer más sobre los Salesianos Cooperadores, escríbenos. Queremos escucharte y acompañarte."
          />
        </Reveal>

        <Reveal direction="right" variant="lateral" duration={0.92} delay={0.04}>
          <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-[#123C69]/10 bg-white p-7 shadow-[0_6px_18px_rgba(46,46,46,0.05)] dark:border-white/10 dark:bg-[#112240] dark:shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
          noValidate
        >
          <div>
            <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-[#2E2E2E] dark:text-[#CBD5E1]">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#123C69]/20 bg-white px-4 py-2.5 text-sm text-[#2E2E2E] outline-none transition duration-300 ease-out focus:border-[#123C69] focus:ring-2 focus:ring-[#123C69]/10 dark:border-white/15 dark:bg-[#0A1628] dark:text-[#E2E8F0] dark:focus:border-[#7EB3E0] dark:focus:ring-[#7EB3E0]/20"
            />
            {errors.nombre && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.nombre}</p>}
          </div>

          <div>
            <label htmlFor="correo" className="mb-1 block text-sm font-medium text-[#2E2E2E] dark:text-[#CBD5E1]">
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              value={formData.correo}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#123C69]/20 bg-white px-4 py-2.5 text-sm text-[#2E2E2E] outline-none transition duration-300 ease-out focus:border-[#123C69] focus:ring-2 focus:ring-[#123C69]/10 dark:border-white/15 dark:bg-[#0A1628] dark:text-[#E2E8F0] dark:focus:border-[#7EB3E0] dark:focus:ring-[#7EB3E0]/20"
            />
            {errors.correo && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.correo}</p>}
          </div>

          <div>
            <label htmlFor="ciudad" className="mb-1 block text-sm font-medium text-[#2E2E2E] dark:text-[#CBD5E1]">
              Ciudad
            </label>
            <input
              id="ciudad"
              name="ciudad"
              type="text"
              value={formData.ciudad}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#123C69]/20 bg-white px-4 py-2.5 text-sm text-[#2E2E2E] outline-none transition duration-300 ease-out focus:border-[#123C69] focus:ring-2 focus:ring-[#123C69]/10 dark:border-white/15 dark:bg-[#0A1628] dark:text-[#E2E8F0] dark:focus:border-[#7EB3E0] dark:focus:ring-[#7EB3E0]/20"
            />
            {errors.ciudad && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.ciudad}</p>}
          </div>

          <div>
            <label htmlFor="mensaje" className="mb-1 block text-sm font-medium text-[#2E2E2E] dark:text-[#CBD5E1]">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#123C69]/20 bg-white px-4 py-2.5 text-sm text-[#2E2E2E] outline-none transition duration-300 ease-out focus:border-[#123C69] focus:ring-2 focus:ring-[#123C69]/10 dark:border-white/15 dark:bg-[#0A1628] dark:text-[#E2E8F0] dark:focus:border-[#7EB3E0] dark:focus:ring-[#7EB3E0]/20"
            />
            {errors.mensaje && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.mensaje}</p>}
          </div>

          <motion.button
            type="submit"
            className="inline-flex rounded-full bg-[#0B1F3A] px-7 py-3 text-sm font-medium text-[#FAF7F0] transition hover:bg-[#123C69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C69] dark:bg-[#C9A227] dark:text-[#0A1628] dark:hover:bg-[#d4b04a] dark:focus-visible:outline-[#C9A227]"
            whileHover={reducedMotion ? undefined : { y: -1 }}
            whileTap={reducedMotion ? undefined : { y: 0 }}
          >
            Enviar mensaje
          </motion.button>

          <AnimatePresence>
            {successMessage && (
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
              >
                {successMessage}
              </motion.p>
            )}
          </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactSection
