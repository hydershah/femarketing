import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from './_components/LeadForm'
import { FAQ } from './_components/FAQ'
import { ROICalculator } from './_components/ROICalculator'

export const metadata = {
  title: 'Final Expense Leads | High-Converting Insurance Leads Provider',
  description: 'Get exclusive final expense leads, live transfers, aged leads, and more. TCPA compliant with average 25% close rates. Start generating high-quality leads today.',
  keywords: 'final expense leads, insurance leads, live transfer leads, exclusive leads, aged leads',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <main>
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-dark opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Get Final Expense Leads That Actually Close
            </h1>
            <p className="mt-6 text-xl md:text-2xl">
              Live Transfers, Exclusive Leads, 25% Close Rates
            </p>
            <Link href="/final-expense-leads-cost/" className="mt-8 inline-flex items-center rounded-full bg-secondary px-8 py-4 font-bold text-dark hover:bg-yellow-400 transition-colors text-lg">
              Get Instant Quote
            </Link>
          </div>
          <div className="relative flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-secondary shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1507537362848-8c3d2a239d92?q=80&w=1600&auto=format&fit=crop" 
                alt="Family protected by final expense insurance" 
                width={320} 
                height={320} 
                className="object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-6 right-4 bg-white text-primary px-6 py-3 rounded-full shadow-lg font-medium">
              TCPA Compliant Leads
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Why Choose Final Expense Marketing?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-blue-600 text-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl font-bold mb-2">&gt;126K</div>
              <div className="text-lg">Leads Generated</div>
            </div>
            <div className="bg-blue-600 text-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl font-bold mb-2">&lt;52%</div>
              <div className="text-lg">Cost Per Acquisition</div>
            </div>
            <div className="bg-blue-600 text-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl font-bold mb-2">1</div>
              <div className="text-lg">Minute Setup</div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/sample-lead" className="inline-flex items-center rounded-full bg-primary px-8 py-4 font-bold text-white hover:bg-dark transition-colors text-lg">
              View Sample Lead
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Our 3-Step Process</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-2xl font-bold text-secondary mb-4">1. Choose Lead Type</div>
              <p className="text-gray-600 mb-6">Select from live transfers, exclusive, shared, or aged leads tailored to your needs.</p>
              <Image src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1600" alt="Choosing lead type" width={400} height={300} className="rounded-lg" />
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-2xl font-bold text-secondary mb-4">2. Set Criteria</div>
              <p className="text-gray-600 mb-6">Customize age, location, budget, and more for targeted leads.</p>
              <Image src="https://images.unsplash.com/photo-1460925898917-ee67d6458d39?q=80&w=1600" alt="Setting criteria" width={400} height={300} className="rounded-lg" />
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-2xl font-bold text-secondary mb-4">3. Receive Leads</div>
              <p className="text-gray-600 mb-6">Get real-time delivery with high close rates and dedicated support.</p>
              <Image src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1600" alt="Receiving leads" width={400} height={300} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Services Overview</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { title: 'Final Expense Leads', desc: 'High-intent leads for burial insurance', img: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1600', href: '/final-expense-leads/' },
              { title: 'Live Transfers', desc: 'Real-time warm transfers', img: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1600', href: '/live-transfer-leads/' },
              { title: 'Aged Leads', desc: 'Budget-friendly options', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600', href: '/aged-final-expense-leads/' },
              { title: 'Exclusive Leads', desc: 'No competition, higher closes', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600', href: '/exclusive-final-expense-leads/' },
            ].map((service) => (
              <div 
                key={service.title}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
              >
                <Image src={service.img} alt={service.title} width={400} height={250} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                  <Link href={service.href} className="mt-4 inline-block text-secondary font-medium">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Why Agents Choose Us</h2>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              '25% Average Close Rate',
              'TCPA Compliant',
              'No Contracts',
              'Real-Time Delivery',
              'Dedicated Support',
              '10+ Years Experience',
            ].map((benefit, i) => (
              <div 
                key={benefit}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <div className="text-secondary text-3xl mb-2">✓</div>
                <div className="font-medium">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">What Our Agents Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: 'John D.', role: 'Insurance Agent', quote: 'We consistently close at 25%+ with their live transfers. Best leads in the industry!' },
              { name: 'Sarah M.', role: 'Senior Agent', quote: 'TCPA compliance and real-time delivery make all the difference. Highly recommend!' },
              { name: 'Mike R.', role: 'Agency Owner', quote: 'Their exclusive leads have transformed our business. ROI is incredible!' },
            ].map((testimonial, i) => (
              <div 
                key={i}
                className="bg-gray-50 rounded-xl p-8 shadow-md"
              >
                <div className="text-yellow-500 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="font-medium">{testimonial.name}, {testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Calculate Your ROI</h2>
          <ROICalculator />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Join thousands of agents closing more deals with our premium leads.</p>
          </div>
          <LeadForm 
            title="Get Your Free Quote Now"
            subtitle="Start receiving high-converting final expense leads today"
          />
        </div>
      </section>

      <FAQ />
    </main>
  )
}