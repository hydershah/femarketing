import type { Metadata } from 'next'
import Image from 'next/image'
import { LeadForm } from '../_components/LeadForm'

export const metadata: Metadata = {
  title: 'How It Works | Final Expense Leads Process',
  description: 'Understand our final expense lead generation process, quality checks, and integration options.',
  alternates: { canonical: '/how-it-works/' },
}

export default function HowItWorksPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl max-w-3xl mx-auto">Our simple 3-step process gets you high-quality final expense leads fast</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-secondary text-dark w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">1</div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Choose Your Lead Type</h2>
              <Image 
                src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=600" 
                alt="Choosing lead type" 
                width={400} 
                height={250} 
                className="rounded-lg mb-4 mx-auto"
              />
              <p className="text-gray-600">Select from live transfers, exclusive, shared, or aged leads based on your budget and sales process.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-dark w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">2</div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Set Your Criteria</h2>
              <Image 
                src="https://images.unsplash.com/photo-1460925898917-ee67d6458d39?q=80&w=600" 
                alt="Setting criteria" 
                width={400} 
                height={250} 
                className="rounded-lg mb-4 mx-auto"
              />
              <p className="text-gray-600">Customize age range, location, budget, schedule, and integration preferences to match your needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-dark w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">3</div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Start Receiving Leads</h2>
              <Image 
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=600" 
                alt="Receiving leads" 
                width={400} 
                height={250} 
                className="rounded-lg mb-4 mx-auto"
              />
              <p className="text-gray-600">Get real-time delivery to your phone or CRM with quality controls and dedicated support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Quality Process</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold mb-2">Lead Generation</h3>
              <p className="text-gray-600 text-sm">We generate leads through multiple channels including online forms, telemarketing, and direct mail.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold mb-2">Qualification</h3>
              <p className="text-gray-600 text-sm">Every lead is verified for age, income, interest level, and contact information accuracy.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Real-Time Delivery</h3>
              <p className="text-gray-600 text-sm">Leads are delivered instantly to your phone, email, or integrated directly into your CRM system.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold mb-2">Support</h3>
              <p className="text-gray-600 text-sm">Our dedicated support team helps you optimize your campaigns and maximize your ROI.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Integration Options</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">📧</div>
                  <div>
                    <h3 className="font-bold">Email Delivery</h3>
                    <p className="text-gray-600 text-sm">Leads sent instantly to your email with all prospect details</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">📱</div>
                  <div>
                    <h3 className="font-bold">SMS Notifications</h3>
                    <p className="text-gray-600 text-sm">Get text alerts when new leads are available</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">🔗</div>
                  <div>
                    <h3 className="font-bold">CRM Integration</h3>
                    <p className="text-gray-600 text-sm">Direct integration with popular CRM systems</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">📞</div>
                  <div>
                    <h3 className="font-bold">Phone Transfers</h3>
                    <p className="text-gray-600 text-sm">Live warm transfers directly to your phone line</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600" 
                alt="CRM integration dashboard" 
                width={500} 
                height={400} 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Let's set up your lead campaign today</p>
          </div>
          <LeadForm 
            title="Start Your Lead Campaign"
            subtitle="Tell us your requirements and we'll get you started immediately"
          />
        </div>
      </section>
    </main>
  )
}