import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '../_components/LeadForm'

export const metadata: Metadata = {
  title: 'Final Expense Leads | From $10 | Exclusive & Shared Options',
  description: 'Final Expense Leads for insurance agents. Live transfers, exclusive & shared options. TCPA compliant. Pricing from $10.',
  alternates: { canonical: '/final-expense-leads/' },
}

export default function FinalExpenseLeadsPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Final Expense Leads for Insurance Agents</h1>
          <p className="text-xl max-w-3xl">High-intent final expense leads with strict quality standards: age 50-85, interest confirmed, contact validated.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">What Are Final Expense Leads?</h2>
              <p className="text-gray-600 mb-6">
                Final expense leads are potential customers who have expressed interest in purchasing burial or final expense insurance. 
                These leads are typically adults aged 50-85 who are concerned about covering their end-of-life expenses and leaving 
                their families with financial burdens.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Pre-qualified prospects aged 50-85</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Confirmed interest in final expense coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>TCPA compliant with proper consent</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Contact information verified</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1507537362848-8c3d2a239d92?q=80&w=1600" 
                alt="Senior couple planning final expenses" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Types of Final Expense Leads</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Live Transfers</h3>
              <p className="text-gray-600 mb-4">Warm phone transfers with pre-qualified prospects ready to buy.</p>
              <div className="text-2xl font-bold text-primary mb-2">$55-85</div>
              <div className="text-sm text-gray-500 mb-4">per lead</div>
              <Link href="/live-transfer-leads/" className="text-secondary font-medium">Learn more →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Exclusive Leads</h3>
              <p className="text-gray-600 mb-4">Fresh leads sold only to you with no competition.</p>
              <div className="text-2xl font-bold text-primary mb-2">$35-55</div>
              <div className="text-sm text-gray-500 mb-4">per lead</div>
              <Link href="/exclusive-final-expense-leads/" className="text-secondary font-medium">Learn more →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Shared Leads</h3>
              <p className="text-gray-600 mb-4">Cost-effective leads shared with 2-3 other agents.</p>
              <div className="text-2xl font-bold text-primary mb-2">$15-25</div>
              <div className="text-sm text-gray-500 mb-4">per lead</div>
              <Link href="/shared-final-expense-leads/" className="text-secondary font-medium">Learn more →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Aged Leads</h3>
              <p className="text-gray-600 mb-4">Budget-friendly older leads perfect for follow-up campaigns.</p>
              <div className="text-2xl font-bold text-primary mb-2">$2-10</div>
              <div className="text-sm text-gray-500 mb-4">per lead</div>
              <Link href="/aged-final-expense-leads/" className="text-secondary font-medium">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Lead Quality Standards</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Age Verification', desc: 'All leads are verified to be between 50-85 years old' },
              { title: 'Income Qualification', desc: 'Prospects meet minimum income requirements for coverage' },
              { title: 'Interest Confirmation', desc: 'Double-confirmed interest in final expense insurance' },
              { title: 'Contact Validation', desc: 'Phone numbers and addresses verified for accuracy' },
            ].map((standard, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-secondary text-3xl mb-4">✓</div>
                <h3 className="font-bold mb-2">{standard.title}</h3>
                <p className="text-gray-600 text-sm">{standard.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Start Getting Leads?</h2>
            <p className="text-xl text-gray-600">Get your custom quote and start receiving high-converting final expense leads today.</p>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  )
}