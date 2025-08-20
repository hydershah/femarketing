import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '../_components/LeadForm'

export const metadata: Metadata = {
  title: 'Live Transfer Insurance Leads | Real-Time Warm Transfers | 25-30% Close Rate',
  description: 'Buy live transfer insurance leads with 25-30% close rates. Real-time warm transfers for final expense, life insurance & Medicare. TCPA compliant, income verified prospects.',
  keywords: [
    'live transfer leads',
    'live transfer insurance leads',
    'warm transfer leads',
    'real-time insurance leads',
    'final expense live transfers',
    'life insurance live transfers',
    'Medicare live transfers',
    'insurance lead generation',
    'TCPA compliant leads',
    'high converting leads'
  ],
  alternates: { canonical: '/live-transfer-leads/' },
  openGraph: {
    title: 'Live Transfer Insurance Leads | Real-Time Warm Transfers',
    description: 'Get warm phone transfers from pre-qualified prospects with 25-30% close rates. No cold calling required.',
    url: '/live-transfer-leads/',
    siteName: 'Final Expense Marketing',
    images: [
      {
        url: '/og-live-transfers.jpg',
        width: 1200,
        height: 630,
        alt: 'Live Transfer Insurance Leads - Real-Time Warm Transfers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Transfer Insurance Leads | Real-Time Warm Transfers',
    description: 'Get warm phone transfers from pre-qualified prospects with 25-30% close rates.',
    images: ['/og-live-transfers.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function LiveTransferLeadsPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Live Transfer Insurance Leads",
            "description": "Real-time warm transfers of pre-qualified insurance prospects with 25-30% close rates",
            "provider": {
              "@type": "Organization",
              "name": "Final Expense Marketing",
              "url": "https://femarketing.com"
            },
            "serviceType": "Insurance Lead Generation",
            "areaServed": "United States",
            "offers": [
              {
                "@type": "Offer",
                "name": "Final Expense Live Transfers",
                "price": "55-85",
                "priceCurrency": "USD",
                "description": "Warm transfers for burial and final expense insurance prospects"
              },
              {
                "@type": "Offer",
                "name": "Life Insurance Live Transfers",
                "price": "65-95",
                "priceCurrency": "USD",
                "description": "Term and whole life insurance prospects ready to buy"
              },
              {
                "@type": "Offer",
                "name": "Medicare Live Transfers",
                "price": "45-75",
                "priceCurrency": "USD",
                "description": "Medicare supplement and advantage plan prospects"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })
        }}
      />
      
      <main>
        <section className="bg-primary text-white py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Live Transfer Insurance Leads - Connect with Buyers Now</h1>
            <p className="text-xl max-w-3xl">Get warm phone transfers from pre-qualified prospects who are ready to buy. No cold calling required.</p>
            <div className="flex flex-wrap gap-3 mt-6 text-sm">
              <span className="bg-white/10 rounded-full px-3 py-1">25-30% Close Rate</span>
              <span className="bg-white/10 rounded-full px-3 py-1">TCPA Compliant</span>
              <span className="bg-white/10 rounded-full px-3 py-1">Income Verified</span>
              <span className="bg-white/10 rounded-full px-3 py-1">Real-Time Transfers</span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">What Are Live Transfer Leads?</h2>
                <p className="text-gray-600 mb-6">
                  Live transfer leads are pre-qualified prospects who are transferred directly to your phone in real-time. 
                  Our call center agents screen prospects, confirm their interest, and immediately connect them to you while 
                  they're hot and ready to buy.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-4">Benefits of Live Transfers:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>25-30% average close rate</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>No cold calling required</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Prospects are warmed up and ready</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Real-time connection</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1600" 
                  alt="Call center agent handling live transfers for insurance leads" 
                  width={600} 
                  height={400} 
                  className="rounded-xl shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">How Live Transfers Work</h2>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="bg-secondary text-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-bold mb-2">Prospect Requests Quote</h3>
                <p className="text-gray-600 text-sm">Customer fills out form or calls our number requesting insurance information.</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-bold mb-2">Qualification & Verification</h3>
                <p className="text-gray-600 text-sm">Our agents verify information, confirm interest, and ensure TCPA compliance.</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-bold mb-2">Warm Introduction</h3>
                <p className="text-gray-600 text-sm">Agent introduces you to the prospect and explains you'll help with their needs.</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-bold mb-2">Live Transfer</h3>
                <p className="text-gray-600 text-sm">Prospect is transferred directly to your phone while interest is hot.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Types of Live Transfer Leads Available</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Final Expense Live Transfers</h3>
                <p className="text-gray-600 mb-4">Warm transfers for burial and final expense insurance prospects.</p>
                <div className="text-2xl font-bold text-primary mb-2">$55-85</div>
                <div className="text-sm text-gray-500 mb-4">per transfer</div>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Ages 50-85</li>
                  <li>• Confirmed interest</li>
                  <li>• Income verified</li>
                  <li>• TCPA compliant</li>
                </ul>
                <Link href="/final-expense-live-transfers/" className="text-secondary font-medium hover:underline">Learn more →</Link>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Life Insurance Transfers</h3>
                <p className="text-gray-600 mb-4">Term and whole life insurance prospects ready to buy.</p>
                <div className="text-2xl font-bold text-primary mb-2">$65-95</div>
                <div className="text-sm text-gray-500 mb-4">per transfer</div>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Ages 25-65</li>
                  <li>• Coverage amount confirmed</li>
                  <li>• Health pre-qualified</li>
                  <li>• Immediate need</li>
                </ul>
                <Link href="/live-transfer-leads/" className="text-secondary font-medium hover:underline">Learn more →</Link>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Medicare Transfers</h3>
                <p className="text-gray-600 mb-4">Medicare supplement and advantage plan prospects.</p>
                <div className="text-2xl font-bold text-primary mb-2">$45-75</div>
                <div className="text-sm text-gray-500 mb-4">per transfer</div>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Ages 65+</li>
                  <li>• Medicare eligible</li>
                  <li>• Plan comparison ready</li>
                  <li>• Enrollment period</li>
                </ul>
                <Link href="/live-transfer-leads/" className="text-secondary font-medium hover:underline">Learn more →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Live Transfers Outperform Traditional Leads</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-secondary text-dark w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">30%</div>
                    <div>
                      <h3 className="font-bold mb-1">Higher Close Rate</h3>
                      <p className="text-white/80">Live transfers close at 25-30% vs 5-10% for traditional leads</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-secondary text-dark w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">0</div>
                    <div>
                      <h3 className="font-bold mb-1">No Cold Calling</h3>
                      <p className="text-white/80">Prospects are warmed up and expecting your call</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-secondary text-dark w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-bold mb-1">Instant Connection</h3>
                      <p className="text-white/80">Connect within 5 seconds while interest is hot</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Performance Comparison</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Live Transfers</span>
                        <span>30%</span>
                      </div>
                      <div className="bg-white/20 rounded-full h-2">
                        <div className="bg-secondary rounded-full h-2 w-3/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Exclusive Leads</span>
                        <span>15%</span>
                      </div>
                      <div className="bg-white/20 rounded-full h-2">
                        <div className="bg-secondary rounded-full h-2 w-1/2"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Shared Leads</span>
                        <span>8%</span>
                      </div>
                      <div className="bg-white/20 rounded-full h-2">
                        <div className="bg-secondary rounded-full h-2 w-1/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Ready for Live Transfers?</h2>
              <p className="text-xl text-gray-600">Start receiving warm phone transfers and close more deals today.</p>
            </div>
            <LeadForm 
              title="Get Live Transfer Leads"
              subtitle="Tell us about your needs and we'll start sending you warm transfers"
            />
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">How quickly do I receive live transfers?</h3>
                <p className="text-gray-600">Live transfers are delivered in real-time, typically within 5 seconds of qualification. Our agents immediately connect qualified prospects to your phone.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">What makes live transfers more effective than regular leads?</h3>
                <p className="text-gray-600">Live transfers have a 25-30% close rate compared to 5-10% for traditional leads because prospects are pre-qualified, warmed up, and transferred while their interest is highest.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Are the leads TCPA compliant?</h3>
                <p className="text-gray-600">Yes, all our live transfer leads are TCPA compliant. We obtain proper consent and maintain detailed records for compliance purposes.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">What happens if a transfer fails?</h3>
                <p className="text-gray-600">If a transfer fails for any reason, we provide a replacement lead at no additional cost. We guarantee the quality and delivery of every transfer.</p>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Can I specify my target market?</h3>
                <p className="text-gray-600">Absolutely! We can customize live transfers based on your specific requirements including age ranges, geographic areas, coverage amounts, and more.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}