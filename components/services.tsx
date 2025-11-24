"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, TrendingUp, CreditCard, Shield, BarChart3, Zap } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Community Building",
    description: "Connect with like-minded individuals and build lasting relationships within our cooperative network.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Access resources and expertise to scale your business with collective support and shared knowledge.",
    color: "green",
  },
  {
    icon: CreditCard,
    title: "Financial Services",
    description: "Benefit from competitive financing options and favorable terms exclusive to our members.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Member Protection",
    description: "Comprehensive safeguards and insurance options designed to protect your investments and interests.",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Stay informed with real-time insights, data analytics, and industry trend reports.",
    color: "green",
  },
  {
    icon: Zap,
    title: "Quick Support",
    description: "Access dedicated support teams ready to assist with any challenges or opportunities.",
    color: "orange",
  },
]

const colorClasses = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
}

const colorHover = {
  blue: "hover:shadow-blue-200",
  green: "hover:shadow-green-200",
  orange: "hover:shadow-orange-200",
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
            Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to support every aspect of your cooperative journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className={`bg-white p-8 rounded-2xl shadow-md transition-all duration-300 ${colorHover[service.color as keyof typeof colorHover]} hover:shadow-xl cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className={`${colorClasses[service.color as keyof typeof colorClasses]} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
