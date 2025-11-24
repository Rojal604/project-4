"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleJoinClick = () => {
    const contactElement = document.querySelector("#contact")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                CoopHub
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            onClick={handleJoinClick}
            className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            className="md:hidden pb-4 space-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-gray-700 hover:text-green-600 px-4 py-2 rounded-lg cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleJoinClick}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium"
            >
              Join Us
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
