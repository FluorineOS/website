import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'

export default function SupportSection() {
  return (
    <div className="container mx-auto max-w-5xl min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Our community is here to help. Join our forums, check out the documentation, or get in touch with our support team.
        </p>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
          <MessageCircle className="mr-2 h-4 w-4" />
          Get Support
        </Button>
      </motion.div>
    </div>
  )
}

