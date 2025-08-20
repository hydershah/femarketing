import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Final Expense Leads Cost | Pricing Calculator | Get Quote',
  description: 'View final expense leads pricing and calculate ROI. Get an instant quote for shared, exclusive, and live transfer leads.',
  alternates: { canonical: '/final-expense-leads-cost/' },
  keywords: [
    'final expense leads cost',
    'final expense lead pricing',
    'exclusive final expense leads price',
    'shared final expense leads price',
    'final expense live transfer cost',
    'aged final expense leads pricing',
    'final expense pay per call',
    'burial insurance leads cost',
    'funeral insurance leads pricing',
    'final expense leads ROI calculator',
  ],
  openGraph: {
    title: 'Final Expense Leads Cost | Pricing Calculator | Get Quote',
    description: 'Transparent final expense lead pricing for shared, exclusive, live transfers, and aged leads. Estimate ROI and request custom pricing.',
    url: 'https://finalexpensemarketing.com/final-expense-leads-cost/',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 1067,
        alt: 'Final expense leads pricing overview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Final Expense Leads Cost | Pricing Calculator | Get Quote',
    description: 'See pricing for shared, exclusive, aged, and live transfer leads and estimate ROI.',
    images: ['https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1600&auto=format&fit=crop']
  }
}

export default function PricingPage() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <SEOContent />
    </>
  )
}

function SEOContent() {
  // Imported inline to keep route self-contained and server-rendered
  const { SEOContent: Inner } = require('./SEOContent') as { SEOContent: () => JSX.Element }
  return <Inner />
}