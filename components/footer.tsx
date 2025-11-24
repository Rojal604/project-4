"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: "About", links: ["Our Mission", "Our Team", "Careers", "Blog"] },
    { title: "Services", links: ["Community Building", "Business Growth", "Financial Services", "Support"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Code of Conduct"] },
    { title: "Connect", links: ["Contact Us", "Newsletter", "Events", "Social"] },
  ]

  const socialIcons = [
    { icon: Facebook, name: "Facebook" },
    { icon: Twitter, name: "Twitter" },
    { icon: Linkedin, name: "LinkedIn" },
    { icon: Instagram, name: "Instagram" },
  ]

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                CoopHub
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Building strong communities through cooperation and shared values.
              </p>
            </motion.div>

            {/* Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.05 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-blue-100 hover:text-green-400 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-blue-700 my-8" />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Copyright */}
            <p className="text-blue-100 text-sm">
              © {currentYear} CoopHub. All rights reserved. Building cooperation, one member at a time.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialIcons.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="bg-blue-800 p-3 rounded-lg hover:bg-green-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
