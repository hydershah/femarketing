"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How much do final expense leads cost?",
    answer: "Our leads range from $2-10 for aged leads to $55-85 for live transfers. Pricing depends on lead type, exclusivity, and volume. Contact us for custom pricing."
  },
  {
    question: "What's your average close rate?",
    answer: "Our clients see 25%+ close rates on live transfers and 15-20% on exclusive leads. Results vary by agent experience and follow-up process."
  },
  {
    question: "Are your leads TCPA compliant?",
    answer: "Yes, all our leads are 100% TCPA compliant with proper consent and documentation. We provide compliance certificates with each lead."
  },
  {
    question: "What's the minimum order?",
    answer: "No minimum order required. You can start with as few as 10 leads to test our quality and scale up based on performance."
  },
  {
    question: "How quickly do I receive leads?",
    answer: "Live transfers are delivered in real-time. Exclusive leads within 5 minutes. Shared leads within 1 hour. Aged leads immediately upon purchase."
  },
  {
    question: "Do you offer refunds or replacements?",
    answer: "Yes, we offer replacements for leads that don't meet our quality standards within 24 hours. Contact support for our guarantee details."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-4">
        <h2 id="faq-heading" className="text-4xl font-bold text-center mb-12 text-primary">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" role="region" aria-label="FAQ Section">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-inset"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                aria-describedby={`faq-question-${index}`}
              >
                <span id={`faq-question-${index}`} className="font-medium text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
