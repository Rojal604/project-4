"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content:
      "The cooperative has transformed how I run my business. The support network and resources have been invaluable.",
    border: "border-blue-400",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content:
      "Being part of this cooperative opened doors I never knew existed. Highly recommended for anyone serious about growth.",
    border: "border-green-400",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Farmer",
    content: "The collective strength has helped us weather difficult seasons. Together, we are truly stronger.",
    border: "border-orange-400",
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Member{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our members about their cooperative experience
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={`border-l-4 ${testimonial.border} bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
