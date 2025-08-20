import type { Metadata } from 'next'
import { LeadForm } from '../_components/LeadForm'

export const metadata: Metadata = {
  title: 'Shared Final Expense Leads | Budget-Friendly Volume',
  description: 'Shared final expense leads for agents who want scale at lower cost. Transparent pricing and filters.',
  alternates: { canonical: '/shared-final-expense-leads/' },
}

export default function SharedFELeadsPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Shared Final Expense Leads</h1>
          <p className="text-xl max-w-3xl">Affordable way to keep your pipeline full with targeted filters. Perfect for high-volume agents.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">What Are Shared Leads?</h2>
          <p className="text-center text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Shared leads are high-quality final expense prospects sold to 2-3 agents simultaneously. 
            While you'll have some competition, the significantly lower cost allows you to purchase 
            higher volumes and maintain a steady flow of prospects.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Basic Package</h3>
              <div className="text-3xl font-bold text-primary mb-2">$25</div>
              <div className="text-sm text-gray-500 mb-6">per lead</div>
              <div className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full mb-6">Shared with 2 agents</div>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-dark">Get Started</button>
            </div>
            <div className="bg-secondary text-dark rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Volume Package</h3>
              <div className="text-3xl font-bold mb-2">$20</div>
              <div className="text-sm text-gray-600 mb-6">per lead</div>
              <div className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full mb-6">Shared with 2-3 agents</div>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-dark">Get Started</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Enterprise Package</h3>
              <div className="text-3xl font-bold text-primary mb-2">$15</div>
              <div className="text-sm text-gray-500 mb-6">per lead</div>
              <div className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full mb-6">Shared with 3 agents</div>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-dark">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Scale with Shared Leads?</h2>
            <p className="text-xl text-gray-600">Start small and scale up as you optimize your process</p>
          </div>
          <LeadForm 
            title="Get Your Shared Leads Quote"
            subtitle="Tell us your monthly volume target and we'll create the perfect package"
          />
        </div>
      </section>
    </main>
  )
}