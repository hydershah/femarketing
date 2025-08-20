import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '../_components/LeadForm'

export const metadata: Metadata = {
  title: 'Aged Final Expense Leads | 70% Off | Bulk Discounts',
  description: 'Aged final expense leads with bulk discounts. Stretch your budget while maintaining ROI.',
  alternates: { canonical: '/aged-final-expense-leads/' },
}

export default function AgedFELeadsPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Aged Final Expense Leads - Maximum ROI for Your Budget</h1>
          <p className="text-xl max-w-3xl">Leverage discounted aged leads for efficient campaigns. Ideal for experienced agents with strong follow-up systems.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">What Are Aged Final Expense Leads?</h2>
              <p className="text-gray-600 mb-6">
                Aged leads are prospects who expressed interest in final expense insurance 30-180 days ago. 
                While they may not convert as quickly as fresh leads, they offer exceptional value for agents 
                with persistent follow-up systems and can deliver impressive ROI at a fraction of the cost.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-green-800 mb-3">Why Aged Leads Work:</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Original interest is still valid</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Less competition from other agents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Circumstances may have changed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Perfect for nurture campaigns</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600" 
                alt="Agent reviewing aged leads" 
                width={500} 
                height={400} 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Aged Lead Pricing Tiers</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <h3 className="text-lg font-bold mb-2">30-60 Days Old</h3>
              <div className="text-3xl font-bold text-primary mb-2">$8-10</div>
              <div className="text-sm text-gray-500 mb-4">per lead</div>
              <div className="text-sm text-gray-600 mb-4">Still relatively fresh, higher conversion potential</div>
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">2-4% Close Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <h3 className="text-lg font-bold mb-2">60-90 Days Old</h3>
              <div className="text-3xl font-bold text-primary mb-2">$5-7</div>
              <div className="text-sm text-gray-500 mb-4">per lead</div>
              <div className="text-sm text-gray-600 mb-4">Good balance of price and quality</div>
              <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">2-3% Close Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <h3 className="text-lg font-bold mb-2">90-120 Days Old</h3>
              <div className="text-3xl font-bold text-primary mb-2">$3-5</div>
              <div className="text-sm text-gray-500 mb-4">per lead</div>
              <div className="text-sm text-gray-600 mb-4">Budget-friendly option for volume campaigns</div>
              <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">1-2% Close Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <h3 className="text-lg font-bold mb-2">120+ Days Old</h3>
              <div className="text-3xl font-bold text-primary mb-2">$2-3</div>
              <div className="text-sm text-gray-500 mb-4">per lead</div>
              <div className="text-sm text-gray-600 mb-4">Maximum volume at minimum cost</div>
              <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">1% Close Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Bulk Discount Pricing</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Quantity</th>
                  <th className="px-6 py-4 text-left font-bold">30-60 Days</th>
                  <th className="px-6 py-4 text-left font-bold">60-90 Days</th>
                  <th className="px-6 py-4 text-left font-bold">90-120 Days</th>
                  <th className="px-6 py-4 text-left font-bold">120+ Days</th>
                  <th className="px-6 py-4 text-left font-bold">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4">1-100 leads</td>
                  <td className="px-6 py-4">$10</td>
                  <td className="px-6 py-4">$7</td>
                  <td className="px-6 py-4">$5</td>
                  <td className="px-6 py-4">$3</td>
                  <td className="px-6 py-4 text-gray-500">Standard</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-6 py-4">101-500 leads</td>
                  <td className="px-6 py-4">$9</td>
                  <td className="px-6 py-4">$6</td>
                  <td className="px-6 py-4">$4</td>
                  <td className="px-6 py-4">$2.50</td>
                  <td className="px-6 py-4 text-green-600 font-medium">10% off</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">501-1000 leads</td>
                  <td className="px-6 py-4">$8</td>
                  <td className="px-6 py-4">$5.50</td>
                  <td className="px-6 py-4">$3.50</td>
                  <td className="px-6 py-4">$2.25</td>
                  <td className="px-6 py-4 text-green-600 font-medium">20% off</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-6 py-4">1000+ leads</td>
                  <td className="px-6 py-4">$7</td>
                  <td className="px-6 py-4">$5</td>
                  <td className="px-6 py-4">$3</td>
                  <td className="px-6 py-4">$2</td>
                  <td className="px-6 py-4 text-green-600 font-medium">30% off</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Best Practices for Aged Leads</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3">Multiple Touch Points</h3>
              <p className="text-gray-600">Use phone, email, and direct mail to reach prospects through different channels.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">Timing Matters</h3>
              <p className="text-gray-600">Call at different times of day and days of the week to maximize contact rates.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3">Updated Scripts</h3>
              <p className="text-gray-600">Reference their original inquiry and ask about current insurance needs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Value Proposition</h3>
              <p className="text-gray-600">Focus on how circumstances may have changed and new product options.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Track Results</h3>
              <p className="text-gray-600">Monitor which age ranges and follow-up sequences work best for you.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">Persistence Pays</h3>
              <p className="text-gray-600">Plan 7-10 touch points over 30-60 days for maximum conversion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">ROI Calculator for Aged Leads</h2>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>1000 aged leads at $3 each:</span>
                    <span className="font-bold">$3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2% close rate (20 sales):</span>
                    <span className="font-bold">20 policies</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average commission $500:</span>
                    <span className="font-bold">$10,000</span>
                  </div>
                  <div className="border-t border-white/20 pt-4 flex justify-between text-xl">
                    <span>Net Profit:</span>
                    <span className="font-bold text-secondary">$7,000</span>
                  </div>
                  <div className="text-center text-secondary font-bold text-lg">233% ROI</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Success Story</h3>
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-lg mb-4">
                  "I buy 500 aged leads monthly at $4 each. With consistent follow-up, I close 2-3% and generate 
                  $8,000+ in monthly commissions. The key is having a systematic approach and not giving up after 
                  the first call."
                </p>
                <div className="font-bold">- Maria S., Top Producer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Try Aged Leads?</h2>
            <p className="text-xl text-gray-600">Start with a small test batch and scale up based on your results</p>
          </div>
          <LeadForm 
            title="Get Your Aged Leads Quote"
            subtitle="Tell us your budget and we'll recommend the best aged lead package"
          />
        </div>
      </section>
    </main>
  )
}