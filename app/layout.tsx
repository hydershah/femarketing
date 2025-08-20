import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://finalexpensemarketing.com'),
  title: {
    default: 'Final Expense Marketing',
    template: '%s | Final Expense Marketing',
  },
  description: 'Final expense insurance lead provider: live transfers, exclusive & shared leads. TCPA compliant, real-time delivery, high close rates.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Final Expense Marketing',
    description: 'Final expense insurance lead provider',
    url: 'https://finalexpensemarketing.com',
    siteName: 'Final Expense Marketing',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Final Expense Marketing',
    description: 'Final expense insurance lead provider',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased`}>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'InsuranceAgency',
              name: 'Final Expense Marketing',
              description: 'Final expense insurance lead provider',
              url: 'https://finalexpensemarketing.com',
              telephone: '+1-XXX-XXX-XXXX',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              areaServed: 'United States',
            }),
          }}
        />
      </body>
    </html>
  )
}


