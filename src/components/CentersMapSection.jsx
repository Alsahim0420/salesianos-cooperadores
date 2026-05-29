import { useCallback, useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { centers, provinceInfo } from '../data/centers'
import { useTheme } from '../context/ThemeContext'
import AnimatedSectionTitle from './animations/AnimatedSectionTitle'
import Reveal from './animations/Reveal'

const TILE_LIGHT = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const TILE_DARK =
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'

function createTileLayer(isDark) {
  return L.tileLayer(isDark ? TILE_DARK : TILE_LIGHT, {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 18,
  })
}

function createMarkerIcon() {
  return L.divIcon({
    className: 'sscc-map-marker',
    html: '<span class="sscc-map-marker-dot"></span>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -12],
  })
}

function CentersMapSection() {
  const { isDark } = useTheme()
  const mapRef = useRef(null)
  const mapInstance = useRef(null)
  const tileLayerRef = useRef(null)
  const markersLayer = useRef(null)
  const markersById = useRef({})
  const skipFlyOnReady = useRef(true)
  const [selectedId, setSelectedId] = useState(centers[0]?.id ?? null)
  const [mapReady, setMapReady] = useState(false)

  const selected = centers.find((c) => c.id === selectedId) ?? centers[0]

  const initMap = useCallback(() => {
    const container = mapRef.current
    if (!container || mapInstance.current) return

    if (container._leaflet_id) {
      delete container._leaflet_id
    }

    const map = L.map(container, {
      scrollWheelZoom: true,
      zoomControl: true,
    })

    const darkMode = document.documentElement.classList.contains('dark')
    tileLayerRef.current = createTileLayer(darkMode)
    tileLayerRef.current.addTo(map)

    const icon = createMarkerIcon()
    markersLayer.current = L.layerGroup().addTo(map)
    markersById.current = {}

    centers.forEach((center) => {
      const marker = L.marker([center.lat, center.lng], { icon })
      marker.bindPopup(
        `<strong>${center.name}</strong><br/>${center.city}, ${center.department}`
      )
      marker.on('click', () => setSelectedId(center.id))
      marker.addTo(markersLayer.current)
      markersById.current[center.id] = marker
    })

    const bounds = L.latLngBounds(centers.map((c) => [c.lat, c.lng]))
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 8 })

    mapInstance.current = map
    setMapReady(true)

    requestAnimationFrame(() => {
      map.invalidateSize()
    })
    setTimeout(() => map.invalidateSize(), 250)
  }, [])

  useEffect(() => {
    const map = mapInstance.current
    if (!map || !tileLayerRef.current) return

    map.removeLayer(tileLayerRef.current)
    tileLayerRef.current = createTileLayer(isDark)
    tileLayerRef.current.addTo(map)
  }, [isDark])

  useEffect(() => {
    const container = mapRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          initMap()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(container)

    const handleResize = () => {
      mapInstance.current?.invalidateSize()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
      if (markersLayer.current) {
        markersLayer.current.clearLayers()
        markersLayer.current = null
      }
      markersById.current = {}
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
      if (container._leaflet_id) {
        delete container._leaflet_id
      }
      setMapReady(false)
    }
  }, [initMap])

  useEffect(() => {
    if (!mapReady || !selectedId || !mapInstance.current) return
    if (skipFlyOnReady.current) {
      skipFlyOnReady.current = false
      return
    }

    const center = centers.find((c) => c.id === selectedId)
    if (!center) return

    mapInstance.current.flyTo([center.lat, center.lng], 10, { duration: 0.9 })
    markersById.current[center.id]?.openPopup()
  }, [selectedId, mapReady])

  const handleSelect = (center) => {
    setSelectedId(center.id)
    if (!mapInstance.current) {
      initMap()
      return
    }
    mapInstance.current.flyTo([center.lat, center.lng], 10, { duration: 0.9 })
    markersById.current[center.id]?.openPopup()
  }

  return (
    <section id="centros" className="bg-white py-24 transition-colors duration-300 dark:bg-[#0D1F38] sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" variant="soft" duration={0.8} className="max-w-3xl">
          <AnimatedSectionTitle
            eyebrow={provinceInfo.inspectoria}
            title="Centros Cooperadores — Provincia Bogotá"
            subtitle="Siete comunidades de la Asociación de Salesianos Cooperadores en Colombia. Selecciona un punto en el mapa o en la lista para conocer cada centro."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="relative">
            <div
              ref={mapRef}
              className="sscc-map-container h-[420px] w-full overflow-hidden rounded-2xl border border-[#123C69]/10 bg-[#F5F0E6] shadow-[0_6px_18px_rgba(46,46,46,0.06)] dark:border-white/10 dark:bg-[#112240] dark:shadow-[0_6px_18px_rgba(0,0,0,0.3)] sm:h-[480px]"
              aria-label="Mapa interactivo de centros de la Provincia Bogotá"
            />
            {!mapReady && (
              <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-[#6B7280] dark:text-[#94A3B8]">
                Cargando mapa…
              </p>
            )}
          </div>

          <Reveal direction="right" variant="lateral" duration={0.9} delay={0.05}>
            <div className="flex h-full flex-col gap-4">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#123C69] dark:text-[#7EB3E0]">
                {provinceInfo.name} · {centers.length} centros
              </p>
              <ul className="max-h-[300px] space-y-2 overflow-y-auto pr-1 lg:max-h-[360px]">
                {centers.map((center) => (
                  <li key={center.id}>
                    <button
                      type="button"
                      onClick={() => handleSelect(center)}
                      className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                        selectedId === center.id
                          ? 'border-[#C9A227]/40 bg-[#F5F0E6] dark:border-[#7EB3E0]/35 dark:bg-[#1A3358]'
                          : 'border-[#123C69]/10 bg-[#FAF7F0] hover:border-[#123C69]/20 dark:border-white/10 dark:bg-[#112240] dark:hover:border-[#7EB3E0]/25'
                      }`}
                    >
                      <p className="text-sm font-semibold text-[#0B1F3A] dark:text-[#F5F7FA]">
                        {center.name}
                      </p>
                      <p className="mt-0.5 text-xs text-[#6B7280] dark:text-[#94A3B8]">
                        {center.city}, {center.department}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>

              {selected && (
                <article className="rounded-2xl border border-[#123C69]/10 bg-[#FAF7F0] p-5 dark:border-white/10 dark:bg-[#112240]">
                  <div className="mb-2 flex items-center gap-2 text-[#123C69] dark:text-[#7EB3E0]">
                    <MapPin size={16} className="text-[#C9A227]" />
                    <span className="text-xs font-medium uppercase tracking-[0.14em]">
                      {selected.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B1F3A] dark:text-[#F5F7FA]">
                    {selected.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#123C69] dark:text-[#7EB3E0]">
                    {selected.city}, {selected.department} · {selected.province}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280] dark:text-[#94A3B8]">
                    {selected.description}
                  </p>
                </article>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default CentersMapSection
