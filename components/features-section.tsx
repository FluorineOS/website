import { motion } from 'framer-motion'

export default function FeaturesSection() {
  const features = [
    {
      title: "Privacy Focused",
      description: "Enhanced privacy controls and features to keep your data secure."
    },
    {
      title: "Performance Optimized",
      description: "Streamlined experience with improved system performance."
    },
    {
      title: "Regular Updates",
      description: "Monthly security patches and feature updates."
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-16 tracking-tight"
        >
          Why Choose FluorineOS?
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-medium tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

