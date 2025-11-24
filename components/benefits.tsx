"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

const benefits = [
  "Higher profit margins through collective buying power",
  "Access to exclusive training and development programs",
  "Preferred interest rates on cooperative loans",
  "Voting rights in major organizational decisions",
  "Annual dividend distributions from cooperative profits",
  "Comprehensive health and wellness benefits",
  "Networking opportunities with industry leaders",
  "Priority access to new services and products",
]

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Membership{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Benefits</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Unlock a world of advantages designed to accelerate your success
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <motion.div
                className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1"
                whileHover={{ scale: 1.2 }}
              >
                <Check className="w-4 h-4 text-white" />
              </motion.div>
              <p className="text-gray-700 font-medium text-lg">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
