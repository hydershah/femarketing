import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '../_components/LeadForm'

export const metadata: Metadata = {
  title: 'Exclusive Final Expense Leads | Higher Close Rates',
  description: 'Exclusive final expense leads delivered in real time. No resells, higher close rates, better ROI.',
  alternates: { canonical: '/exclusive-final-expense-leads/' },
}

export default function ExclusiveFELeadsPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Exclusive Final Expense Leads</h1>
          <p className="text-xl max-w-3xl">Real-time exclusive leads for agents who value quality and control. No competition, higher close rates.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">What Makes Our Leads Exclusive?</h2>
              <p className="text-gray-600 mb-6">
                Exclusive leads are sold to only ONE agent - you. When you purchase an exclusive lead, 
                you're the only agent who will ever receive that prospect's information. This means no 
                competition, no rushed sales calls, and the ability to build genuine relationships with 
                your prospects.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-800 mb-4">Exclusive Lead Advantages:</h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>15-20% average close rate</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>No competition from other agents</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Time to build rapport and trust</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Real-time delivery within 5 minutes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Lead replacement guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600" 
                alt="Agent with exclusive lead success" 
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
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Exclusive vs Shared Leads Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">Shared Leads</th>
                  <th className="px-6 py-4 text-center">Exclusive Leads</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium">Number of Agents</td>
                  <td className="px-6 py-4 text-center text-red-600">2-4 agents</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">Only YOU</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-6 py-4 font-medium">Close Rate</td>
                  <td className="px-6 py-4 text-center">5-10%</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">15-20%</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium">Price Range</td>
                  <td className="px-6 py-4 text-center">$15-25</td>
                  <td className="px-6 py-4 text-center">$35-55</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-6 py-4 font-medium">Competition</td>
                  <td className="px-6 py-4 text-center text-red-600">High</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">None</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium">Follow-up Time</td>
                  <td className="px-6 py-4 text-center text-red-600">Must call immediately</td>
                  <td className="px-6 py-4 text-center text-green-600">Flexible timing</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-6 py-4 font-medium">ROI</td>
                  <td className="px-6 py-4 text-center">200%</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">300%+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Exclusive Lead Pricing Tiers</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Starter Package</h3>
              <div className="text-3xl font-bold text-primary mb-2">$55</div>
              <div className="text-sm text-gray-500 mb-6">per lead</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">1-25 leads/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Real-time delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Email support</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Basic filtering</span>
                </li>
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-dark">Get Started</button>
            </div>
            <div className="bg-secondary text-dark rounded-xl p-8 shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <h3 className="text-xl font-bold mb-4">Professional Package</h3>
              <div className="text-3xl font-bold mb-2">$45</div>
              <div className="text-sm text-gray-600 mb-6">per lead</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">26-100 leads/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Priority delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Phone & email support</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Advanced filtering</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">CRM integration</span>
                </li>
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-dark">Get Started</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Enterprise Package</h3>
              <div className="text-3xl font-bold text-primary mb-2">$35</div>
              <div className="text-sm text-gray-500 mb-6">per lead</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">100+ leads/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Instant delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Custom filtering</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-sm">API access</span>
                </li>
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-dark">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Success Stories</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" 
                  alt="Agent testimonial" 
                  width={60} 
                  height={60} 
                  className="rounded-full"
                />
                <div>
                  <div className="font-bold">James R.</div>
                  <div className="text-gray-600 text-sm">Senior Agent, Texas</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Switched to exclusive leads 6 months ago and my close rate jumped from 8% to 18%. 
                The extra cost is worth it when you don't have to compete with 3 other agents for 
                every prospect."
              </p>
              <div className="text-green-600 font-bold">Monthly Revenue: +$12,000</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b1c5?q=80&w=100" 
                  alt="Agent testimonial" 
                  width={60} 
                  height={60} 
                  className="rounded-full"
                />
                <div>
                  <div className="font-bold">Lisa M.</div>
                  <div className="text-gray-600 text-sm">Top Producer, Florida</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Exclusive leads give me the time to properly educate prospects about their options. 
                I can follow up multiple times without worrying about another agent swooping in. 
                My average policy size has increased 40%."
              </p>
              <div className="text-green-600 font-bold">Close Rate: 22%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Exclusive Lead Guarantee</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-2">100% Exclusive</h3>
                  <p className="opacity-90">Your lead will never be sold to another agent. Ever.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-2">5-Minute Delivery</h3>
                  <p className="opacity-90">Leads delivered to you within 5 minutes of generation.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                  <p className="opacity-90">Lead doesn't meet standards? We'll replace it free.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Ready for Exclusive Leads?</h2>
            <p className="text-xl text-gray-600">Experience the difference of having no competition</p>
          </div>
          <LeadForm 
            title="Get Your Exclusive Leads Quote"
            subtitle="Tell us your monthly volume and we'll create a custom exclusive lead package"
          />
        </div>
      </section>
    </main>
  )
}