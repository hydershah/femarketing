import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Final Expense Marketing',
  description: 'Terms of service for Final Expense Marketing lead generation services.',
  alternates: { canonical: '/terms/' },
}

export default function TermsPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Agreement to Terms</h2>
          <p className="mb-6">By accessing and using Final Expense Marketing services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Lead Quality Standards</h2>
          <p className="mb-6">We provide high-quality final expense leads that meet our strict qualification criteria. All leads are TCPA compliant with proper consent documentation.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Payment Terms</h2>
          <p className="mb-6">Payment is due upon delivery of leads. We accept major credit cards and ACH transfers. Volume discounts apply to qualifying accounts.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Lead Replacement Policy</h2>
          <p className="mb-6">We offer lead replacements for leads that do not meet our quality standards when reported within 24 hours of delivery.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Limitation of Liability</h2>
          <p className="mb-6">Our liability is limited to the cost of the leads provided. We make no guarantees regarding close rates or sales outcomes.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
          <p>For questions about these Terms, contact us at legal@finalexpensemarketing.com</p>
        </div>
      </div>
    </main>
  )
}