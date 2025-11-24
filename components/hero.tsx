"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const handleGetStarted = () => {
    const contactElement = document.querySelector("#contact")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLearnMore = () => {
    const aboutElement = document.querySelector("#about")
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building Strong Communities Through{" "}
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">
                Cooperation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our cooperative movement and unlock the power of collective growth. Together, we achieve more, create
              stronger bonds, and build sustainable futures for our communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleGetStarted}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleLearnMore}
                className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            className="relative h-96 md:h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl opacity-10" />
            <motion.div
              className="absolute top-10 left-10 w-24 h-24 bg-green-400 rounded-lg"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-20 h-20 bg-orange-400 rounded-lg"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
