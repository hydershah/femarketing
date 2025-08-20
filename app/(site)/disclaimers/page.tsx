import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimers | Final Expense Marketing',
  description: 'Important disclaimers for Final Expense Marketing lead generation services.',
  alternates: { canonical: '/disclaimers/' },
}

export default function DisclaimersPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary">Disclaimers</h1>
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Lead Quality Disclaimer</h2>
          <p className="mb-6">While we maintain strict quality standards for all leads, we cannot guarantee specific outcomes or close rates. Results may vary based on agent experience, follow-up practices, and market conditions.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Performance Results</h2>
          <p className="mb-6">Close rates, ROI figures, and other performance metrics mentioned are based on aggregate client data and individual results may vary. Past performance does not guarantee future results.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Lead Availability</h2>
          <p className="mb-6">Lead availability is subject to market conditions and demand. We cannot guarantee specific volumes or delivery schedules, though we make every effort to meet client expectations.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Compliance Responsibility</h2>
          <p className="mb-6">While we provide TCPA-compliant leads, agents are responsible for maintaining compliance in their sales activities and following all applicable federal and state regulations.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">No Guarantee of Sales</h2>
          <p className="mb-6">We provide qualified leads but do not guarantee sales outcomes. Success depends on many factors including agent skill, product offerings, pricing, and market conditions.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
          <p>Questions about these disclaimers? Contact us at legal@finalexpensemarketing.com</p>
        </div>
      </div>
    </main>
  )
}