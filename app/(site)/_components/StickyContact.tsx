"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function StickyContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50" role="complementary" aria-label="Contact options">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-lg shadow-2xl p-6 w-80"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
            aria-describedby="contact-form-description"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 id="contact-form-title" className="font-bold text-lg">Get Instant Quote</h3>
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="Close contact form"
                className="hover:bg-gray-100 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <p id="contact-form-description" className="text-sm text-gray-600 mb-4">
              Fill out this quick form and we'll call you within 5 minutes
            </p>
            <form className="space-y-3" aria-label="Quick contact form">
              <div>
                <label htmlFor="quick-name" className="sr-only">Name</label>
                <input 
                  id="quick-name"
                  type="text" 
                  className="w-full rounded-md border p-2 focus:ring-2 focus:ring-secondary focus:border-transparent" 
                  placeholder="Name" 
                  aria-describedby="quick-name-help"
                />
                <p id="quick-name-help" className="sr-only">Enter your full name</p>
              </div>
              <div>
                <label htmlFor="quick-phone" className="sr-only">Phone</label>
                <input 
                  id="quick-phone"
                  type="tel" 
                  className="w-full rounded-md border p-2 focus:ring-2 focus:ring-secondary focus:border-transparent" 
                  placeholder="Phone" 
                  aria-describedby="quick-phone-help"
                />
                <p id="quick-phone-help" className="sr-only">Enter your phone number</p>
              </div>
              <div>
                <label htmlFor="quick-email" className="sr-only">Email</label>
                <input 
                  id="quick-email"
                  type="email" 
                  className="w-full rounded-md border p-2 focus:ring-2 focus:ring-secondary focus:border-transparent" 
                  placeholder="Email" 
                  aria-describedby="quick-email-help"
                />
                <p id="quick-email-help" className="sr-only">Enter your email address</p>
              </div>
              <button 
                type="submit"
                className="w-full rounded-full bg-secondary py-2 font-bold text-dark hover:bg-yellow-400 transition-colors focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                aria-describedby="quick-submit-help"
              >
                Get Quote
              </button>
              <p id="quick-submit-help" className="text-xs text-gray-500 text-center">
                We'll call you within 5 minutes
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex flex-col gap-3">
        <Link 
          href="tel:+1-855-555-0123" 
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors focus:ring-2 focus:ring-green-400 focus:outline-none"
          aria-label="Call us at 1-855-555-0123"
        >
          <Phone size={24} />
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-secondary text-dark p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-colors focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          aria-label={isOpen ? "Close contact form" : "Open contact form"}
          aria-expanded={isOpen}
          aria-controls="contact-form"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  )
}
