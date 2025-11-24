"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { getAssetPath } from "@/lib/utils"


export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-1">
              <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                <img
                  src={getAssetPath("/cooperative-team-together.jpg")}
                  alt="Cooperative team working together"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <motion.div
              className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-green-500 text-white p-6 rounded-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <p className="font-bold text-2xl">500+</p>
              <p className="text-sm">Active Members</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                About Our Cooperative
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              We are a member-owned organization dedicated to fostering collaboration, equality, and mutual benefit. Our
              mission is to empower communities through cooperative principles and sustainable practices.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With over two decades of experience, we've helped thousands of members achieve their goals while
              maintaining the core values of cooperation, transparency, and social responsibility.
            </p>
            <ul className="space-y-3">
              {["Member-Driven Decisions", "Transparent Operations", "Sustainable Growth"].map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <span className="w-2 h-2 bg-green-600 rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
