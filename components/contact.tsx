"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { name?: string; email?: string; message?: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email"
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setErrors({})
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to our team today.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {/* Contact Info - Left Side */}
            <div className="md:col-span-2 bg-gradient-to-b from-green-50 to-blue-50 p-6 sm:p-8 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h3>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "hello@coophub.com",
                    color: "bg-blue-500",
                    href: "mailto:hello@coophub.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    color: "bg-green-500",
                    href: "tel:+15551234567",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "123 Cooperation Ave, Community City, CC 12345",
                    color: "bg-orange-500",
                    href: "#",
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      className="group flex gap-3 sm:gap-4 hover:translate-x-1 transition-transform"
                    >
                      <motion.div
                        className={`${item.color} w-9 sm:w-10 h-9 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-900 transition-colors break-words">
                          {item.content}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Form - Right Side */}
            <div className="md:col-span-3 p-6 sm:p-8">
              {isSubmitted && (
                <motion.div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-2 sm:gap-3 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-xs sm:text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: undefined })
                    }}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border transition-all text-sm ${errors.name ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                      } focus:outline-none focus:ring-2`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: undefined })
                    }}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border transition-all text-sm ${errors.email ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                      } focus:outline-none focus:ring-2`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: undefined })
                    }}
                    rows={4}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border transition-all text-sm ${errors.message ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                      } focus:outline-none focus:ring-2 resize-none`}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 sm:py-2.5 rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
