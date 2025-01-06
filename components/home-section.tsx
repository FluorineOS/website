import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export default function HomeSection() {
  return (
    <div className="container mx-auto max-w-5xl">
      <div className="min-h-screen flex flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-xl"
        >
          <h1 className="text-4xl font-bold tracking-tight">
            FluorineOS
          </h1>
          <p className="text-base text-gray-400 leading-relaxed">
            A free and open-source operating system for various devices, built on the Android platform with privacy and performance at its core.
          </p>
          <div className="pt-2">
            <Link href="/wiki">
              <Button size="default" className="bg-white text-black hover:bg-gray-100">
                <Download className="mr-2 h-4 w-4" />
                Download Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

