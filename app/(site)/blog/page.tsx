import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Final Expense Lead Generation Blog | Expert Insights & Strategies',
  description: 'Expert insights on final expense lead generation, sales strategies, compliance best practices, and industry trends. Stay ahead in the final expense insurance market.',
  alternates: { canonical: '/blog/' },
}

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Final Expense Lead Generation Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert insights on final expense lead generation, sales strategies, compliance best practices, and industry trends to help you succeed in the final expense insurance market.
        </p>
      </div>

      {/* Featured Articles */}
      <div className="grid gap-8 md:grid-cols-2 mb-16">
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Lead Generation</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              The Complete Guide to Final Expense Lead Generation in 2024
            </h2>
            <p className="text-gray-600 mb-6">
              Learn the latest strategies and best practices for generating high-quality final expense leads. From digital marketing to referral programs, discover what works in today's market.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Published on January 15, 2024</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
            <Link 
              href="/final-expense-leads/" 
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
            >
              Learn More About Our Leads
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>

        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Compliance</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              TCPA Compliance for Final Expense Leads: What You Need to Know
            </h2>
            <p className="text-gray-600 mb-6">
              Stay compliant with TCPA regulations when working with final expense leads. Understand the requirements, best practices, and how to protect your business from violations.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Published on January 10, 2024</span>
              <span className="mx-2">•</span>
              <span>6 min read</span>
            </div>
            <Link 
              href="/tcpa/" 
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
            >
              Read Our TCPA Policy
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </div>

      {/* Coming Soon Section */}
      <section className="bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          More Articles Coming Soon
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We're working on bringing you more valuable content about final expense lead generation, sales strategies, and industry insights. Check back soon for new articles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email to get notified"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Notify Me
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white rounded-2xl p-8 text-center mt-16">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Get Started with Quality Leads?
        </h3>
        <p className="text-xl mb-6 opacity-90">
          Stop waiting for leads and start closing more sales with our high-converting final expense leads.
        </p>
        <Link 
          href="/final-expense-leads-cost/" 
          className="inline-flex items-center rounded-full bg-secondary px-8 py-3 font-medium text-dark hover:bg-yellow-400 transition-colors"
        >
          Get Your Quote Today
        </Link>
      </section>
    </main>
  )
}


