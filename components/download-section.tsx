import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export default function DownloadSection() {
  return (
    <div className="container mx-auto max-w-5xl min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Download FluorineOS</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Experience the future of mobile operating systems. Download FluorineOS now and unlock the full potential of your device.
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-gray-100">
          <Download className="mr-2 h-4 w-4" />
          Download Now
        </Button>
      </motion.div>
    </div>
  )
}

