import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { LeadForm } from '../_components/LeadForm'

export const metadata: Metadata = {
  title: 'Contact | Final Expense Marketing',
  description: 'Contact Final Expense Marketing for pricing, support, or custom lead programs.',
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">Get in touch with our team for pricing, support, or custom lead programs</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-dark p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">1-855-LEADS-NOW (1-855-532-3766)</p>
                    <p className="text-sm text-gray-500">Toll-free nationwide</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-dark p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">sales@finalexpensemarketing.com</p>
                    <p className="text-sm text-gray-500">Response within 1 hour</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-dark p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">1234 Business Center Dr<br />Suite 100<br />Dallas, TX 75201</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-dark p-3 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM CST</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM CST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Sales Inquiries</h4>
                    <p className="text-sm text-gray-600">New lead programs and pricing</p>
                    <p className="text-secondary font-medium">sales@finalexpensemarketing.com</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Customer Support</h4>
                    <p className="text-sm text-gray-600">Existing client assistance</p>
                    <p className="text-secondary font-medium">support@finalexpensemarketing.com</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Technical Support</h4>
                    <p className="text-sm text-gray-600">CRM integrations & API</p>
                    <p className="text-secondary font-medium">tech@finalexpensemarketing.com</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Billing Questions</h4>
                    <p className="text-sm text-gray-600">Invoices and payments</p>
                    <p className="text-secondary font-medium">billing@finalexpensemarketing.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <LeadForm 
                title="Send Us a Message"
                subtitle="Fill out the form and we'll get back to you within 1 hour"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-bold mb-2">What types of leads do you offer?</h3>
              <p className="text-gray-600 mb-6">We offer live transfers, exclusive leads, shared leads, and aged leads for final expense insurance.</p>
              
              <h3 className="font-bold mb-2">How quickly can I start receiving leads?</h3>
              <p className="text-gray-600 mb-6">Most agents start receiving leads within 24-48 hours of setup completion.</p>
              
              <h3 className="font-bold mb-2">Do you offer volume discounts?</h3>
              <p className="text-gray-600 mb-6">Yes, we offer significant discounts for agents purchasing 100+ leads per month.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Are your leads TCPA compliant?</h3>
              <p className="text-gray-600 mb-6">Absolutely. All leads include proper consent documentation and are 100% TCPA compliant.</p>
              
              <h3 className="font-bold mb-2">What's your refund policy?</h3>
              <p className="text-gray-600 mb-6">We offer lead replacements for any leads that don't meet our quality standards within 24 hours.</p>
              
              <h3 className="font-bold mb-2">Can you integrate with my CRM?</h3>
              <p className="text-gray-600 mb-6">Yes, we integrate with most popular CRM systems including HubSpot, Salesforce, and more.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Call us now and start receiving high-quality final expense leads today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1-855-532-3766" className="bg-secondary text-dark px-8 py-4 rounded-full font-bold hover:bg-yellow-400 inline-flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now: 1-855-LEADS-NOW
            </a>
            <a href="mailto:sales@finalexpensemarketing.com" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary inline-flex items-center justify-center gap-2">
              <Mail size={20} />
              Email Sales Team
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}