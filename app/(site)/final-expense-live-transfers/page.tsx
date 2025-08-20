import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '../_components/LeadForm'

export const metadata: Metadata = {
  title: 'Final Expense Live Transfer Leads | Real-Time Warm Transfers',
  description: 'Buy final expense live transfer leads and speak with ready-to-buy prospects in real time. High intent, TCPA compliant, income verified.',
  keywords: [
    'final expense live transfer leads',
    'final expense live transfers',
    'burial insurance live transfer leads',
    'buy live transfer leads final expense',
    'final expense leads',
    'insurance live transfer leads'
  ],
  alternates: { canonical: '/final-expense-live-transfers/' },
}

export default function FELiveTransfersPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Final Expense Live Transfer Leads</h1>
          <p className="text-xl max-w-3xl mb-4">Connect with final expense and burial insurance buyers in real time. Our agents pre-qualify and warm-transfer prospects to your phone while interest is highest.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-white/10 rounded-full px-3 py-1">TCPA Compliant</span>
            <span className="bg-white/10 rounded-full px-3 py-1">Income Verified</span>
            <span className="bg-white/10 rounded-full px-3 py-1">Warm Introduction</span>
            <span className="bg-white/10 rounded-full px-3 py-1">Call Recording</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">What You Get In Every Transfer</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Buyer Profile</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Name and best callback number</li>
                <li>• Age range (50-85) and state</li>
                <li>• Beneficiary and reason for coverage</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Intent & Qualification</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Confirmed interest in final expense</li>
                <li>• Basic health and budget check</li>
                <li>• Warm intro by our agent</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Compliance & Delivery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• TCPA consent and call recording</li>
                <li>• Real-time transfer to your phone</li>
                <li>• Replacement for invalid transfers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Premium Final Expense Transfers</h2>
              <p className="text-gray-600 mb-6">
                Our final expense live transfers are the highest converting leads in the industry. 
                Each prospect is pre-qualified, warmed up, and transferred to you while they're 
                actively interested in purchasing final expense coverage.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-800 mb-4">What Makes Them Special:</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>25-30% close rate average</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Ages 50-85, income verified</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Warm introduction by our agent</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Immediate connection while hot</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 mt-6">
                Looking for other options? Explore our{' '}
                <Link href="/exclusive-final-expense-leads/" className="text-primary underline underline-offset-4">exclusive final expense leads</Link>{' '}
                or compare pricing on our{' '}
                <Link href="/final-expense-leads-cost/" className="text-primary underline underline-offset-4">final expense leads cost</Link>{' '}page.
              </p>
            </div>
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=600" 
                alt="Live transfer call center" 
                width={500} 
                height={400} 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Live Transfer Process</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="bg-secondary text-dark w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-4">Prospect Responds</h3>
              <p className="text-gray-600">Customer responds to our final expense marketing and requests information.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-dark w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-4">Pre-Qualification</h3>
              <p className="text-gray-600">Our agents verify age, income, health status, and confirm genuine interest.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-dark w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-4">Warm Introduction</h3>
              <p className="text-gray-600">Agent introduces you as their final expense specialist and builds rapport.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-dark w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">4</div>
              <h3 className="text-xl font-bold mb-4">Live Transfer</h3>
              <p className="text-gray-600">Prospect is transferred to your phone with full context and warm introduction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Pricing & Packages</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Starter</h3>
              <div className="text-3xl font-bold text-primary mb-2">$85</div>
              <div className="text-sm text-gray-500 mb-6">per transfer</div>
              <ul className="space-y-3 mb-8 text-left">
                <li>• 1-10 transfers/month</li>
                <li>• Business hours only</li>
                <li>• Basic qualification</li>
                <li>• Email support</li>
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-secondary text-dark rounded-xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <h3 className="text-xl font-bold mb-4">Professional</h3>
              <div className="text-3xl font-bold mb-2">$70</div>
              <div className="text-sm text-gray-600 mb-6">per transfer</div>
              <ul className="space-y-3 mb-8 text-left">
                <li>• 11-50 transfers/month</li>
                <li>• Extended hours available</li>
                <li>• Advanced qualification</li>
                <li>• Priority phone support</li>
                <li>• Custom scripts</li>
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-primary mb-2">$55</div>
              <div className="text-sm text-gray-500 mb-6">per transfer</div>
              <ul className="space-y-3 mb-8 text-left">
                <li>• 50+ transfers/month</li>
                <li>• 24/7 availability</li>
                <li>• Premium qualification</li>
                <li>• Dedicated account manager</li>
                <li>• Performance analytics</li>
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">
            Volume discounts available. See detailed pricing on our{' '}
            <Link href="/final-expense-leads-cost/" className="text-primary underline underline-offset-4">Final Expense Leads Cost</Link>{' '}page.
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Final Expense Live Transfers Work</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Highly Targeted</h3>
              <p className="opacity-90">Only prospects aged 50-85 who specifically requested final expense information</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4">Income Verified</h3>
              <p className="opacity-90">All prospects meet minimum income requirements to afford coverage</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Immediate Interest</h3>
              <p className="opacity-90">Transferred while actively shopping for final expense coverage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Ready for Live Transfers?</h2>
            <p className="text-xl text-gray-600">Start receiving warm transfers and close more deals today</p>
          </div>
          <LeadForm 
            title="Get Final Expense Live Transfers"
            subtitle="Tell us your availability and we'll start sending warm transfers"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-primary">Final Expense Live Transfer FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">What are final expense live transfer leads?</h3>
              <p className="text-gray-600">Pre-qualified prospects are warm-introduced and connected to your phone in real time, so you can close while intent is highest.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How do you qualify buyers before transfer?</h3>
              <p className="text-gray-600">We confirm age (typically 50-85), interest in burial/final expense coverage, basic health and budget fit, and TCPA consent.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What if a transfer is invalid?</h3>
              <p className="text-gray-600">We offer replacements for transfers that fail our quality standards when reported within 24 hours.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I choose when I receive calls?</h3>
              <p className="text-gray-600">Yes. Set business hours and dayparting so transfers arrive when you are ready to sell.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Do you support multiple states?</h3>
              <p className="text-gray-600">Yes. We can target by state or ZIP to match where you are licensed.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}