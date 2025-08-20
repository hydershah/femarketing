import type { Metadata } from 'next'
import Image from 'next/image'
import { LeadForm } from '../_components/LeadForm'

export const metadata: Metadata = {
  title: 'About Us | Final Expense Marketing',
  description: 'Learn about Final Expense Marketing: our mission, team, and why agents trust us for final expense leads.',
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Final Expense Marketing</h1>
          <p className="text-xl max-w-3xl">We serve agents nationwide with compliant, high-converting final expense leads that drive real results.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2013, Final Expense Marketing has been dedicated to helping insurance agents 
                succeed by providing the highest quality final expense leads in the industry. We understand 
                that your success depends on connecting with qualified prospects who are genuinely interested 
                in final expense coverage.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of lead generation experts, compliance specialists, and customer support professionals 
                work around the clock to ensure you receive leads that convert into sales. We're not just a 
                lead provider – we're your partner in building a successful final expense insurance business.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2,847</div>
                  <div className="text-gray-600">Agents Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">126K+</div>
                  <div className="text-gray-600">Leads Delivered</div>
                </div>
              </div>
            </div>
            <div>
              <Image 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600" 
                alt="Professional team meeting" 
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
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Why Agents Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-600">Every lead is verified for age, income, and genuine interest before delivery. No time wasters.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Real-Time Delivery</h3>
              <p className="text-gray-600">Leads delivered instantly while prospects are hot and ready to buy. No delays, no excuses.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">TCPA Compliant</h3>
              <p className="text-gray-600">100% compliant with all federal regulations. Complete documentation and consent records.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
              <p className="text-gray-600">Personal account managers and 24/7 support to help you maximize your ROI.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4">Proven ROI</h3>
              <p className="text-gray-600">Average 300-400% return on investment with our exclusive and live transfer leads.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4">No Contracts</h3>
              <p className="text-gray-600">Start and stop anytime. We earn your business through results, not contracts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Leadership Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300" 
                alt="CEO John Smith" 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">John Smith</h3>
              <p className="text-secondary font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">15+ years in insurance lead generation. Former top-producing final expense agent.</p>
            </div>
            <div className="text-center">
              <Image 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b1c5?q=80&w=300" 
                alt="CTO Sarah Johnson" 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-secondary font-medium mb-2">CTO</p>
              <p className="text-gray-600 text-sm">Technology expert specializing in lead generation systems and CRM integrations.</p>
            </div>
            <div className="text-center">
              <Image 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300" 
                alt="VP Sales Mike Wilson" 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mike Wilson</h3>
              <p className="text-secondary font-medium mb-2">VP of Sales</p>
              <p className="text-gray-600 text-sm">20+ years helping agents build successful final expense practices nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-8 opacity-90">
              We're committed to your success. Every lead we deliver is backed by our quality guarantee 
              and supported by our experienced team. When you succeed, we succeed.
            </p>
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">Quality Guarantee</div>
                <p className="opacity-80">Lead replacements within 24 hours</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">24/7 Support</div>
                <p className="opacity-80">Always here when you need us</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Results Focused</div>
                <p className="opacity-80">Your success is our priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Partner with Us?</h2>
            <p className="text-xl text-gray-600">Join thousands of successful agents nationwide</p>
          </div>
          <LeadForm 
            title="Start Your Partnership Today"
            subtitle="Let's discuss how we can help grow your final expense business"
          />
        </div>
      </section>
    </main>
  )
}