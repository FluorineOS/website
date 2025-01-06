'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/header'
import HomeSection from '@/components/home-section'
import FeaturesSection from '@/components/features-section'
import StatsSection from '@/components/stats-section'
import DownloadSection from '@/components/download-section'
import SupportSection from '@/components/support-section'
import FooterSection from '@/components/footer-section'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    sectionsRef.current[sectionId]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <motion.div style={{ opacity }} className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
      </motion.div>

      <section id="home" ref={(el) => (sectionsRef.current.home = el)}>
        <HomeSection />
      </section>

      <section id="features" ref={(el) => (sectionsRef.current.features = el)}>
        <FeaturesSection />
      </section>

      <section id="stats" ref={(el) => (sectionsRef.current.stats = el)}>
        <StatsSection />
      </section>

      <section id="download" ref={(el) => (sectionsRef.current.download = el)}>
        <DownloadSection />
      </section>

      <section id="support" ref={(el) => (sectionsRef.current.support = el)}>
        <SupportSection />
      </section>

      <FooterSection />
    </main>
  )
}

