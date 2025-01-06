import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function StatsSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          style={{ scale, opacity }}
          className="max-w-2xl"
        >
          {/* Content removed as requested */}
        </motion.div>
      </div>
    </section>
  )
}

