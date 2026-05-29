import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import MissionSection from './components/MissionSection'
import WhatWeDoSection from './components/WhatWeDoSection'
import MissionsSection from './components/MissionsSection'
import SpiritualitySection from './components/SpiritualitySection'
import CentersMapSection from './components/CentersMapSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#2E2E2E] transition-colors duration-300 dark:bg-[#0A1628] dark:text-[#E2E8F0]">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MissionSection />
        <WhatWeDoSection />
        <MissionsSection />
        <SpiritualitySection />
        <CentersMapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
