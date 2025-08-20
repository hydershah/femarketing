import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TCPA Compliance | Final Expense Marketing',
  description: 'TCPA compliance information for Final Expense Marketing lead generation services.',
  alternates: { canonical: '/tcpa/' },
}

export default function TCPAPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary">TCPA Compliance</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">We adhere to TCPA standards and best practices for all lead generation activities.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">What is TCPA?</h2>
          <p className="mb-6">The Telephone Consumer Protection Act (TCPA) is a federal law that restricts telemarketing calls, auto-dialed calls, prerecorded calls, text messages, and unsolicited faxes.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Compliance Standards</h2>
          <ul className="mb-6 space-y-2">
            <li>• All leads include proper consent documentation</li>
            <li>• Clear disclosure of lead generation purpose</li>
            <li>• Opt-in confirmation for all prospects</li>
            <li>• Immediate opt-out mechanisms available</li>
            <li>• Regular compliance audits and training</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Consent Documentation</h2>
          <p className="mb-6">Every lead includes complete consent records showing how and when the prospect agreed to be contacted by insurance agents.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Agent Responsibilities</h2>
          <p className="mb-6">Agents are responsible for maintaining TCPA compliance in their follow-up activities, including honoring do-not-call requests and maintaining proper records.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Questions?</h2>
          <p>For TCPA compliance questions, contact our compliance team at compliance@finalexpensemarketing.com</p>
        </div>
      </div>
    </main>
  )
}