import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Final Expense Marketing',
  description: 'Privacy policy for Final Expense Marketing lead generation services.',
  alternates: { canonical: '/privacy/' },
}

export default function PrivacyPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
          <p className="mb-6">We collect information you provide directly to us, such as when you request leads, create an account, or contact us for support.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Information</h2>
          <p className="mb-6">We use the information we collect to provide, maintain, and improve our lead generation services, process transactions, and communicate with you.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Information Sharing</h2>
          <p className="mb-6">We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Data Security</h2>
          <p className="mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at privacy@finalexpensemarketing.com</p>
        </div>
      </div>
    </main>
  )
}