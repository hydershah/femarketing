"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { LeadForm } from '../_components/LeadForm'
import { useState } from 'react'

const pricingTiers = [
  {
    name: 'Shared Leads',
    price: '$15-25',
    closeRate: '5-10%',
    roi: '200%',
    features: [
      'Age verified 50-85',
      'Interest confirmed',
      'TCPA compliant',
      'Email & phone support',
      'CRM integration',
    ],
    popular: false
  },
  {
    name: 'Exclusive Leads',
    price: '$35-55',
    closeRate: '15-20%',
    roi: '300%',
    features: [
      'Everything in Shared',
      'Sold to you only',
      'Real-time delivery',
      'Priority support',
      'Lead replacement guarantee',
      'Custom filters',
    ],
    popular: true
  },
  {
    name: 'Live Transfers',
    price: '$55-85',
    closeRate: '25-30%',
    roi: '400%',
    features: [
      'Everything in Exclusive',
      'Warm phone transfer',
      'Pre-qualified prospects',
      'Dedicated account manager',
      'Custom scripts provided',
      'Performance analytics',
    ],
    popular: false
  },
  {
    name: 'Aged Leads',
    price: '$2-10',
    closeRate: '2-5%',
    roi: '150%',
    features: [
      'Budget-friendly option',
      'Bulk discounts available',
      'Perfect for follow-up campaigns',
      'Various age ranges',
      'Immediate delivery',
    ],
    popular: false
  }
]


export function SEOContent() {
  const [leads, setLeads] = useState(100)
  const [closeRate, setCloseRate] = useState(25)
  const [premium, setPremium] = useState(500)
  const [commission, setCommission] = useState(100)
  const [roi, setRoi] = useState<number | null>(null)
  const [revenue, setRevenue] = useState(0)
  const [investment, setInvestment] = useState(0)

  const calculateROI = () => {
    const totalRevenue = leads * (premium * (commission / 100))
    const totalInvestment = leads * premium
    setRevenue(totalRevenue)
    setInvestment(totalInvestment)
    setRoi(totalRevenue / totalInvestment * 100)
  }

  const tocLinks = [
    { href: '#overview', text: 'Pricing Overview' },
    { href: '#pricing', text: 'Pricing at a Glance' },
    { href: '#volume-discounts', text: 'Volume Discounts' },
    { href: '#roi-calculator', text: 'ROI Calculator' },
    { href: '#pricing-by-type', text: 'Pricing by Lead Type' },
    { href: '#what-influences-cost', text: 'What Influences Cost' },
    { href: '#roi-math', text: 'ROI Math & Benchmarks' },
    { href: '#budget-plans', text: 'Budget Scenarios' },
    { href: '#quality-and-compliance', text: 'Quality & Compliance' },
    { href: '#scripts-and-followup', text: 'Scripts & Follow-Up' },
    { href: '#choose-provider', text: 'Choosing a Provider' },
    { href: '#hidden-costs', text: 'Hidden Costs' },
    { href: '#case-study', text: 'Mini Case Study' },
    { href: '#geo-and-filters', text: 'Geo-Targeting & Filters' },
    { href: '#integrations', text: 'Integrations & Workflow' },
    { href: '#trial-plan', text: 'How to Test Leads' },
    { href: '#pay-per-call-vs-web', text: 'Pay-Per-Call vs. Web Leads' },
    { href: '#lifetime-value', text: 'Lifetime Value' },
    { href: '#tips-to-lower-cost', text: '10 Ways to Lower Costs' },
    { href: '#glossary', text: 'Glossary' },
    { href: '#state-notes', text: 'State Considerations' },
    { href: '#faq', text: 'Frequently Asked Questions' },
  ];

  return (
    <div className="bg-gray-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Final Expense Leads Cost: Complete 2025 Pricing Guide</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Understand exactly how much final expense leads cost—shared, exclusive, live transfers, and aged—what drives pricing, and how to maximize ROI with a proven follow-up framework.
          </p>
        </header>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 space-y-2">
              <h3 className="font-semibold text-primary mb-3">On this page</h3>
              {tocLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-600 hover:text-primary hover:font-medium transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </aside>

          <main className="lg:col-span-9">
            {/* TOC for mobile */}
            <nav aria-label="Table of contents" className="lg:hidden mb-10 p-4 border rounded-xl bg-white shadow-sm">
              <h3 className="font-semibold mb-3 text-primary">On this page</h3>
              <ul className="list-disc pl-5 space-y-1">
                {tocLinks.map((link) => (
                  <li key={link.href}>
                    <a className="text-primary hover:underline" href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm">
              <article className="prose prose-slate lg:prose-lg max-w-none prose-h3:text-primary prose-strong:text-slate-800 prose-a:text-primary">
                
                <div className="not-prose">
                  <div className="text-center mb-20 mt-12 sm:mt-16" id="pricing">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                      Final Expense Leads Pricing at a Glance
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                      Transparent pricing with guaranteed ROI. Choose the lead type that fits your budget and sales process.
                    </p>
                    <div className="flex justify-center">
                      <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-800 rounded-full text-sm font-medium">
                        <Check size={16} className="mr-2" />
                        All lead types include TCPA compliance & CRM integration
                      </div>
                    </div>
                  </div>
        
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
                    {pricingTiers.map((tier, index) => (
                      <motion.div
                        key={tier.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${tier.popular ? 'ring-2 ring-secondary border-secondary' : 'border border-gray-200'}`}
                      >
                        {tier.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="bg-secondary text-dark px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                              <Star size={14} fill="currentColor" />
                              Most Popular
                            </div>
                          </div>
                        )}
                        
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold mb-3 text-slate-800">{tier.name}</h3>
                          <div className="text-3xl font-bold text-primary mb-1">{tier.price}</div>
                          <div className="text-sm text-gray-500">per lead</div>
                        </div>
        
                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Close Rate:</span>
                              <span className="font-semibold text-primary">{tier.closeRate}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Avg ROI:</span>
                              <span className="font-semibold text-green-600">{tier.roi}</span>
                            </div>
                          </div>
                        </div>
        
                        <div className="flex-grow mb-6">
                          <h4 className="text-sm font-semibold text-slate-800 mb-4">What's Included:</h4>
                          <ul className="space-y-2">
                            {tier.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
        
                        <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                          tier.popular 
                            ? 'bg-secondary text-dark hover:bg-yellow-400' 
                            : 'bg-primary text-white hover:bg-dark'
                        }`}>
                          Get Started
                        </button>
                      </motion.div>
                    ))}
                  </div>
        
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-10 mb-20 border border-blue-100" id="volume-discounts">
                    <div className="text-center mb-10">
                      <h2 className="text-3xl xl:text-4xl font-bold mb-4 text-primary">Volume Discounts Available</h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Scale your lead generation with volume pricing. Higher commitment means better rates.
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                        <thead className="bg-primary text-white">
                          <tr>
                            <th className="px-4 py-4 text-left font-semibold">Monthly Volume</th>
                            <th className="px-4 py-4 text-left font-semibold">Shared Leads</th>
                            <th className="px-4 py-4 text-left font-semibold">Exclusive Leads</th>
                            <th className="px-4 py-4 text-left font-semibold">Live Transfers</th>
                            <th className="px-4 py-4 text-center font-semibold">Discount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 font-medium text-slate-800">1-100 leads</td>
                            <td className="px-4 py-4 font-bold text-primary">$25</td>
                            <td className="px-4 py-4 font-bold text-primary">$55</td>
                            <td className="px-4 py-4 font-bold text-primary">$85</td>
                            <td className="px-4 py-4 text-center">
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Standard</span>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 font-medium text-slate-800">101-500 leads</td>
                            <td className="px-4 py-4 font-bold text-primary">$22</td>
                            <td className="px-4 py-4 font-bold text-primary">$50</td>
                            <td className="px-4 py-4 font-bold text-primary">$80</td>
                            <td className="px-4 py-4 text-center">
                              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">10% off</span>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 font-medium text-slate-800">501-1000 leads</td>
                            <td className="px-4 py-4 font-bold text-primary">$20</td>
                            <td className="px-4 py-4 font-bold text-primary">$45</td>
                            <td className="px-4 py-4 font-bold text-primary">$75</td>
                            <td className="px-4 py-4 text-center">
                              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">15% off</span>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 font-medium text-slate-800">1000+ leads</td>
                            <td className="px-4 py-4 font-bold text-primary">$18</td>
                            <td className="px-4 py-4 font-bold text-primary">$40</td>
                            <td className="px-4 py-4 font-bold text-primary">$70</td>
                            <td className="px-4 py-4 text-center">
                              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">20% off</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Volume commitments are monthly. Contact us for custom enterprise pricing on 2000+ leads.
                      </p>
                      <button className="inline-flex items-center px-6 py-3 bg-secondary text-dark font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                        Get Volume Pricing
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
        
                  <div className="grid gap-16 lg:grid-cols-2 items-start mb-24" id="roi-calculator">
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-primary">ROI Calculator</h2>
                      <p className="text-gray-600 mb-8">
                        See how our leads can transform your business. Input your numbers to calculate potential returns.
                      </p>
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="leads" className="block font-medium mb-2">Number of Leads</label>
                            <input
                              id="leads"
                              type="number"
                              className="w-full rounded-md border p-3"
                              value={leads}
                              onChange={(e) => setLeads(Math.max(0, parseInt(e.target.value) || 0))}
                              aria-describedby="leads-desc"
                            />
                          </div>
                          <div>
                            <label htmlFor="closeRate" className="block font-medium mb-2">Close Rate (%)</label>
                            <input
                              id="closeRate"
                              type="number"
                              className="w-full rounded-md border p-3"
                              value={closeRate}
                              onChange={(e) => setCloseRate(Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))}
                              aria-describedby="closeRate-desc"
                            />
                          </div>
                          <div>
                            <label htmlFor="premium" className="block font-medium mb-2">Average Premium ($)</label>
                            <input
                              id="premium"
                              type="number"
                              className="w-full rounded-md border p-3"
                              value={premium}
                              onChange={(e) => setPremium(Math.max(0, parseInt(e.target.value) || 0))}
                              aria-describedby="premium-desc"
                            />
                          </div>
                          <div>
                            <label htmlFor="commission" className="block font-medium mb-2">Commission Rate (%)</label>
                            <input
                              id="commission"
                              type="number"
                              className="w-full rounded-md border p-3"
                              value={commission}
                              onChange={(e) => setCommission(Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))}
                              aria-describedby="commission-desc"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={calculateROI}
                            className="w-full rounded-full bg-secondary py-3 font-bold text-dark hover:bg-yellow-400"
                          >
                            Calculate ROI
                          </button>
                          {roi && (
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                              <div className="text-2xl font-bold text-green-800">Estimated ROI: {roi}%</div>
                              <div className="text-sm text-green-600">Revenue: ${revenue.toLocaleString()} | Investment: ${investment.toLocaleString()}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <LeadForm 
                        title="Get Custom Pricing"
                        subtitle="Tell us about your needs and we'll create a custom package"
                      />
                    </div>
                  </div>
                </div>

                <section id="overview">
                  <h3>Final expense lead pricing overview</h3>
                  <p>
                    Final expense leads cost varies primarily by exclusivity, intent, contact method, and speed of delivery. At a high level, agents typically pay between $2 and $85 per lead depending on whether the lead is aged, shared, exclusive, or a live transfer conversation. While the sticker price matters, the most important metric is cost per acquisition and ultimate return on investment. A $65 live transfer that closes 25% of the time can produce a lower cost per sale than a $20 shared lead that closes 6% of the time. The right mix depends on your close rate, script discipline, sales capacity, and cash-flow preferences.
                  </p>
                  <p>
                    On this page, you can review current final expense leads pricing, compare options side-by-side, and use the ROI calculator to forecast revenue. For quick access: see <a href="#pricing" className="text-primary underline">pricing cards</a>, get <a href="#volume-discounts" className="text-primary underline">volume discounts</a>, or try the <a href="#roi-calculator" className="text-primary underline">ROI calculator</a>.
                  </p>
                </section>
      
                <section id="pricing-by-type">
                  <h3>Final expense leads pricing by type</h3>
                  <h4>Shared final expense leads cost</h4>
                  <p>
                    Shared final expense leads typically cost <strong>$15–$25</strong> per lead. These are delivered to multiple agents and require faster speed-to-lead and tighter scripting. Because they are lower-cost, they are ideal for high-activity call blocks, outbound dialers, and agents comfortable with persistent follow-up. Expect close rates in the <strong>5–10%</strong> range with a consistent multi-touch cadence.
                  </p>
                  <p>
                    Learn more about our offer: <a href="/shared-final-expense-leads/" className="text-primary underline">shared final expense leads</a>.
                  </p>
        
                  <h4>Exclusive final expense leads pricing</h4>
                  <p>
                    Exclusive final expense leads generally run <strong>$35–$55</strong> per lead and are sold to you only. They deliver higher intent and better contactability, especially when paired with real-time delivery and SMS alerts. Close rates commonly fall in the <strong>15–20%</strong> range when paired with a same-day appointment mindset and a solid rebuttal script. Exclusives are a great fit when you value control over volume.
                  </p>
                  <p>
                    Explore the benefits: <a href="/exclusive-final-expense-leads/" className="text-primary underline">exclusive final expense leads</a>.
                  </p>
        
                  <h4>Final expense live transfer cost</h4>
                  <p>
                    Live transfer final expense leads cost between <strong>$55–$85</strong> per connected call. With transfers, a trained qualifier warms up the prospect, verifies interest, and confirms basic eligibility before introducing the agent live. Although the price per lead is higher, the conversation quality and appointment rate drive superior conversion. Many teams see <strong>25–30%</strong> close rates when they control underwriting options and present a simple, guaranteed issue path.
                  </p>
                  <p>
                    See how they work: <a href="/final-expense-live-transfers/" className="text-primary underline">final expense live transfers</a>.
                  </p>
        
                  <h4>Aged final expense leads pricing</h4>
                  <p>
                    Aged final expense leads cost <strong>$2–$10</strong> depending on age and filters. While aged leads are the most budget-friendly choice, the contact rate is lower, so success comes from volume, organized follow-up, and layered channels—calling, voicemail drops, SMS and direct mail. Many agencies use aged leads to train new agents or keep dialers humming between real-time drops.
                  </p>
                  <p>
                    Get budget options: <a href="/aged-final-expense-leads/" className="text-primary underline">aged final expense leads</a>.
                  </p>
                </section>
      
                <section id="what-influences-cost">
                  <h3>What influences final expense lead cost?</h3>
                  <ul>
                    <li><strong>Exclusivity</strong>: Exclusive and live transfer leads command higher prices because of higher intent and better time-to-first-contact.</li>
                    <li><strong>Source and intent</strong>: Inbound web forms, click-to-call ads, and search traffic usually cost more than broad social targeting due to demonstrated intent.</li>
                    <li><strong>Delivery speed</strong>: Real-time delivery increases conversion; aged databases decrease cost but require more touches.</li>
                    <li><strong>Filters</strong>: Geographic targeting, age bands (50–85), income, and health qualifiers add cost but improve fit.</li>
                    <li><strong>Compliance</strong>: Verifiable TCPA consent and call recordings add operational costs but are critical to protect your license.</li>
                    <li><strong>Volume</strong>: Bulk commitments reduce per-lead cost. See our <a href="#volume-discounts" className="text-primary underline">volume discounts</a>.</li>
                    <li><strong>Seasonality</strong>: Q1–Q2 often sees lower CPLs on social; Q4 ad competition can push costs up.</li>
                  </ul>
                  <p>
                    In addition, the competitive dynamics of your target counties, the density of licensed agents, and carrier underwriting appetites can subtly shift your effective cost per sale. For example, areas with older populations and stable household incomes can yield higher connection rates and faster underwriting, reducing cycle time and cancellations.
                  </p>
                </section>
      
                <section id="roi-math">
                  <h3>Final expense ROI math and industry benchmarks</h3>
                  <p>
                    The fastest way to compare options is to translate lead price into cost per acquisition. A simple formula is: cost per sale equals lead price divided by close rate. If a shared lead is $22 and your close rate is 8%, your expected cost per sale is about $275. If a live transfer is $75 and you close 28%, your expected cost per sale is roughly $268. The lowest cost per sale wins—provided you can handle the call flow and keep your no-show rate down.
                  </p>
                  <p>
                    Benchmark ranges many teams report:
                  </p>
                  <ul>
                    <li><strong>Shared leads</strong>: 5–10% close rate with a disciplined 8–12 touch cadence.</li>
                    <li><strong>Exclusive leads</strong>: 15–20% close rate with same-day contact and appointment setting.</li>
                    <li><strong>Live transfers</strong>: 25–30% close rate when underwriting options are flexible.</li>
                    <li><strong>Aged leads</strong>: 2–5% close rate at scale with multi-channel follow-up.</li>
                  </ul>
                  <p>
                    Use our <a href="#roi-calculator" className="text-primary underline">ROI calculator</a> to plug in your premium, commission rate, and monthly volume to forecast revenue and ROI.
                  </p>
                  <h4>Worked example</h4>
                  <p>
                    Assume a monthly budget of $3,000, an average first-year premium of $600, and a 90% commission. If you buy 120 shared leads at $25, close 9%, and issue 11 policies, gross commission is $5,940 for an 98% ROI. If you instead buy 48 live transfers at $62.50, close 27%, and issue 13 policies, gross commission is $7,020 for a 134% ROI. Even though the per-lead price is higher, the total profit is larger because the close rate is materially better.
                  </p>
                </section>
      
                <section id="budget-plans">
                  <h3>Budget scenarios and recommended plans</h3>
                  <h4>Starter: $500–$1,500 per month</h4>
                  <p>
                    Focus on activity and script reps. Allocate 60% to shared leads for volume, 30% to aged for padding dial time, and 10% to testing low-volume exclusives. Book same-day appointments and track every touch.
                  </p>
                  <h4>Scaling: $2,000–$5,000 per month</h4>
                  <p>
                    Shift toward exclusives for control and predictable pipeline. Layer in a small portion of live transfers during peak hours for appointment density. Use a CRM to automate reminders and SMS touchpoints.
                  </p>
                  <h4>High-velocity: $8,000+ per month</h4>
                  <p>
                    Combine steady exclusive flow with scheduled live transfer blocks for closers. Maintain aged/shared campaigns for trainees. Negotiate <a href="#volume-discounts" className="text-primary underline">volume discounts</a> and add custom filters to match licensure and carriers.
                  </p>
                  <p>
                    Pro tip: Block time by lead type. Work shared and aged leads in 60–90 minute power-dial sessions, then reserve uninterrupted windows for transfers and exclusive appointments. This prevents context switching and helps keep your response time—and therefore contact rates—high.
                  </p>
                </section>
      
                <section id="quality-and-compliance">
                  <h3>Lead quality, TCPA consent, and compliance</h3>
                  <p>
                    Always verify that final expense lead providers capture explicit TCPA consent with time stamps, IP, and form language tied to the specific offer. Recordings for live transfers should include the disclosure and permission to connect the call. This documentation reduces risk and improves contact rates because prospects recognize the context for your outreach.
                  </p>
                  <p>
                    Our leads are <strong>TCPA compliant</strong>, age-verified 50–85 where applicable, and delivered in real-time with optional CRM integrations. See our <a href="/tcpa/" className="text-primary underline">TCPA policy</a> and <a href="/privacy/" className="text-primary underline">privacy commitments</a>.
                  </p>
                  <p>
                    Compliance also includes honoring do-not-call lists, maintaining clean opt-out mechanisms for SMS and email, and ensuring your scripts accurately describe plan types and underwriting limits. These best practices protect your license and increase trust—which, in turn, boosts your referral rate and reduces chargebacks.
                  </p>
                </section>
      
                <section id="scripts-and-followup">
                  <h3>Scripts and follow-up framework that lower cost per sale</h3>
                  <p>
                    Your script and follow-up cadence determine whether a $20 shared lead or a $70 transfer wins on cost per sale. Use a simple opener, a benefit bridge, and a binary question to confirm intent. When setting appointments, aim for the same day. If you must schedule later, send a confirmation SMS and a same-day reminder.
                  </p>
                  <h4>Sample opener</h4>
                  <p>
                    “Hi [Name], this is [Agent] about your request for final expense information regarding burial coverage. I’ll be brief—my role is to verify your details and show you the lowest option you qualify for. It takes about five minutes. Are you at a good spot to go over this now?”
                  </p>
                  <h4>Follow-up cadence (first 7 days)</h4>
                  <ul>
                    <li><strong>Day 0</strong>: 3x call attempts spaced 2–3 hours apart + SMS after attempt two.</li>
                    <li><strong>Day 1–2</strong>: 2x calls + voicemail drop + SMS.</li>
                    <li><strong>Day 3–7</strong>: 1–2 calls daily + alternating SMS. Add a short value touch: “We work with [Carriers] and can lock rates.”</li>
                  </ul>
                  <p>
                    Keep notes on objections and use a rebuttal tree: price, timing, coverage confusion, or trust. Address with empathy and a single next step—confirming DOB and beneficiary before quoting keeps momentum.
                  </p>
                  <h4>Objection handling examples</h4>
                  <p><strong>“I’m busy.”</strong> “Totally understand. It only takes a couple minutes to verify your eligibility. I can get you the lowest option and you can decide if it makes sense—does now or later this afternoon work better?”</p>
                  <p><strong>“I already have coverage.”</strong> “Great—you’re ahead of most people. Many clients add a small policy to cover inflation or specific expenses like a headstone. If I can beat your rate without a medical exam, would you want to see that?”</p>
                  <p><strong>“I need to think about it.”</strong> “Absolutely—my job is to give you clear numbers. Let’s do a quick eligibility check so you know the exact rate you’d be locking in. If it’s not a fit, no problem.”</p>
                </section>
      
                <section id="choose-provider">
                  <h3>How to choose a final expense lead provider</h3>
                  <p>
                    Compare providers on more than price. Ask about their traffic sources, landing page frameworks, consent capture, replacement policy, quality controls, and whether they can support your CRM. Consistency often matters more than occasional spikes in volume; a steady daily flow keeps your calendar full and your skills sharp.
                  </p>
                  <ul>
                    <li><strong>Transparency</strong>: Sample scripts, form language, and example creatives upon request.</li>
                    <li><strong>Delivery</strong>: Real-time delivery via webhook, email, or CRM integration with field mapping.</li>
                    <li><strong>Replacements</strong>: Clear windows and definitions for invalid numbers and out-of-geo leads.</li>
                    <li><strong>Support</strong>: Live account manager and proactive optimization tips.</li>
                    <li><strong>Scale</strong>: Ability to ramp volume predictably without sacrificing quality.</li>
                  </ul>
                </section>
      
                <section id="hidden-costs">
                  <h3>Hidden costs that affect your true cost per sale</h3>
                  <p>
                    Beyond the lead price, factor in dialer subscriptions, SMS fees, CRM licenses, chargeback risk, and the opportunity cost of missed calls. A low per-lead price can become expensive if you lack the infrastructure to respond in seconds, not hours. Conversely, a higher-priced transfer can be a bargain if it saves six unproductive dials per contact.
                  </p>
                  <p>
                    Track <strong>speed-to-lead</strong> (seconds), <strong>contact rate</strong>, <strong>appointment set rate</strong>, <strong>show rate</strong>, <strong>close rate</strong>, <strong>placement rate</strong>, and <strong>persistency</strong>. These KPIs reveal weak links and guide where to invest next—script refinements, calendar automation, or staffing.
                  </p>
                </section>
      
                <section id="case-study">
                  <h3>Mini case study: optimizing the mix lowered cost per sale 21%</h3>
                  <p>
                    A two-agent team started with a shared-only budget of $2,200 per month at an 8% close rate. After implementing a same-day appointment script and adding a two-hour daily block of live transfers, their close rate rose to 12% on shared and 26% on transfers. Their blended cost per sale fell from $289 to $228 while monthly issued policies increased from 9 to 13. The key changes were faster response times, scripted appointment setting, and using transfers to anchor the day with high-intent conversations.
                  </p>
                </section>
      
                <section id="geo-and-filters">
                  <h3>Geo-targeting, licensing, and filters</h3>
                  <p>
                    Choose counties where you hold non-resident licenses and where appointment logistics make sense. Rural areas often feature lower ad competition and longer talk times; urban cores may deliver higher volume but require tighter scheduling to reduce no-shows. Filters like age bands (55–80), homeownership, and beneficiary presence can improve fit but increase cost—test incrementally to find the ROI sweet spot.
                  </p>
                </section>
      
                <section id="integrations">
                  <h3>Integrations and workflow</h3>
                  <p>
                    Connect leads to your CRM or dialer to trigger instant notifications, task creation, and SMS templates. Popular setups include webhook delivery into CRMs like GoHighLevel, HubSpot, or Zoho, with round-robin assignments for teams. Calendar links in your SMS reminders reduce no-shows, and disposition codes in your CRM help you audit set, show, and close rates by lead source.
                  </p>
                </section>
      
                <section id="trial-plan">
                  <h3>Smart way to test final expense lead pricing</h3>
                  <p>
                    Run a structured two-week trial: define volume, script, schedule, and follow-up cadence ahead of time. Document KPIs daily and hold a brief end-of-day retro to capture objections and wins. Scale only after you can reproduce results for five consecutive days. This approach protects your budget and builds confidence in your numbers.
                  </p>
                </section>
      
                <section id="pay-per-call-vs-web">
                  <h3>Pay-per-call vs web leads for final expense</h3>
                  <p>
                    Pay-per-call leads (live transfers) deliver conversations now, at a higher price per lead but a lower time cost. Web leads (shared or exclusive) are priced lower, but you invest activity to turn them into conversations. If your calendar has open blocks and your close rate is strong, <strong>pay-per-call final expense leads</strong> can yield the best cost per sale. If you are building pipeline and sharpening scripts, web leads offer more at-bats per dollar.
                  </p>
                  <p>
                    Many top producers blend both: transfers to anchor the day and exclusives/shared to maintain a steady flow of appointments, callbacks, and follow-ups.
                  </p>
                </section>
      
                <section id="lifetime-value">
                  <h3>Lifetime value and persistency: the multiplier behind your pricing</h3>
                  <p>
                    When evaluating the cost of final expense leads, include lifetime value. Cross-sell opportunities (accidental death, small term riders), referrals from satisfied families, and persistency all increase revenue beyond first-year commission. Improving your 13-month persistency by even a few points meaningfully raises lifetime value, which lets you confidently invest in higher-intent lead types without increasing risk.
                  </p>
                </section>
      
                <section id="tips-to-lower-cost">
                  <h3>10 ways to lower your final expense cost per sale</h3>
                  <ul>
                    <li><strong>Respond in under 60 seconds</strong> for new web leads—every minute lowers contact probability.</li>
                    <li><strong>Use local caller ID</strong> and branded voicemail drops to increase pick-up and callbacks.</li>
                    <li><strong>Send SMS confirmations</strong> with your name, company, and appointment time to reduce no-shows.</li>
                    <li><strong>Record and review calls</strong> weekly to tighten your opener and transitions.</li>
                    <li><strong>Standardize rebuttals</strong> for price, timing, and trust objections—keep it to one next step.</li>
                    <li><strong>Batch dialing</strong> during contact-rate peaks (late morning and early evening) to improve efficiency.</li>
                    <li><strong>Clean your data</strong> by confirming addresses and beneficiaries early to avoid late-stage fall-off.</li>
                    <li><strong>Negotiate volume tiers</strong> once you have stable KPIs; commit only to what you can work daily.</li>
                    <li><strong>Match carriers to health</strong> quickly so you do not waste time on policies that will not issue.</li>
                    <li><strong>Protect persistency</strong> with welcome calls and simple policy summaries for the family.</li>
                  </ul>
                </section>
      
                <section id="glossary">
                  <h3>Glossary of final expense lead terms</h3>
                  <ul>
                    <li><strong>Exclusive lead</strong>: Delivered to a single agent, typically real-time, higher intent.</li>
                    <li><strong>Shared lead</strong>: Sold to multiple agents, lower price, requires faster response and follow-up.</li>
                    <li><strong>Live transfer</strong>: A warm phone handoff from a qualifier to the agent.</li>
                    <li><strong>Aged lead</strong>: Older records or prior inquiries offered at a discounted price.</li>
                    <li><strong>TCPA consent</strong>: Permission to contact a consumer by phone/SMS; must be recorded and provable.</li>
                    <li><strong>Speed-to-lead</strong>: Time between lead creation and first contact attempt; critical KPI.</li>
                    <li><strong>Cost per acquisition</strong>: Effective cost per issued policy; key metric for budgeting.</li>
                    <li><strong>Persistency</strong>: Percentage of policies still in force at a given time mark, e.g., 13 months.</li>
                  </ul>
                </section>
      
                <section id="state-notes">
                  <h3>State and compliance considerations</h3>
                  <p>
                    Always follow your state’s regulations regarding telemarketing, disclosures, and replacements. Some states require additional form language, special disclosures, or restrictions on texting. Keep a compliance checklist in your CRM and update it as carrier and state rules evolve.
                  </p>
                </section>
      
                <section id="faq">
                  <h3>Frequently Asked Questions</h3>
                  <h4>How much do final expense leads cost?</h4>
                  <p>
                    Depending on type, expect shared leads at $15–$25, exclusive leads at $35–$55, live transfers at $55–$85 per call, and aged leads at $2–$10. Volume and filters can move these ranges.
                  </p>
                  <h4>Are live transfers worth the higher price?</h4>
                  <p>
                    Yes—if you can answer consistently and handle the flow. The higher close rate often yields a lower cost per sale than cheaper options.
                  </p>
                  <h4>What is a good budget to start with?</h4>
                  <p>
                    Many solo agents start between $1,000 and $2,000 per month, then scale to $3,000–$5,000 as they track their close rates and refine scripts.
                  </p>
                  <h4>Do you replace bad leads?</h4>
                  <p>
                    We offer replacements on clear disconnects, wrong numbers, and out-of-geo leads when reported promptly—details provided during onboarding.
                  </p>
                  <h4>Can I choose specific zips or counties?</h4>
                  <p>
                    Yes—geo-targeting is available. Hyper-specific filters can raise cost and reduce volume, so we recommend starting with counties and tightening after baseline results.
                  </p>
                  <h4>How fast are leads delivered?</h4>
                  <p>
                    Real-time leads are delivered instantly via email, webhook, or CRM integration. Aged datasets are delivered immediately after payment with documentation.
                  </p>
                  <h4>What’s included with setup?</h4>
                  <p>
                    We configure delivery, provide call scripts, objection handling trees, and a checklist for speed-to-lead. For transfers, we share sample recordings and disclosure language.
                  </p>
                </section>
              </article>

              <div className="not-prose mt-12 p-6 bg-primary text-white rounded-2xl text-center">
                <p className="text-xl font-semibold mb-4">Ready to reduce your cost per sale?</p>
                <p className="opacity-90 mb-6">Request custom pricing or schedule a quick demo. We’ll tailor shared, exclusive, live transfer, and aged lead flows to your goals.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact/" className="bg-secondary text-dark px-8 py-4 rounded-full font-bold hover:bg-yellow-400">Get Custom Pricing</a>
                  <a href="/how-it-works/" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary">See How It Works</a>
                </div>
              </div>
      
              <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: [
                      {
                        '@type': 'Question',
                        name: 'How much do final expense leads cost?',
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text:
                            'Shared final expense leads typically cost $15–$25, exclusive leads $35–$55, live transfers $55–$85 per connected call, and aged leads $2–$10 depending on filters and age.',
                        },
                      },
                      {
                        '@type': 'Question',
                        name: 'Are live transfers worth the higher price?',
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text:
                            'For many teams, yes. Higher conversation intent and appointment rates often deliver a lower cost per sale compared to cheaper lead types, provided you can answer consistently.',
                        },
                      },
                      {
                        '@type': 'Question',
                        name: 'What is a good starting budget for final expense leads?',
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text:
                            'Solo agents often begin with $1,000–$2,000 per month, then scale to $3,000–$5,000+ as close rates and scheduling capacity improve.',
                        },
                      },
                      {
                        '@type': 'Question',
                        name: 'Do you replace bad leads?',
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text:
                            'We replace clear disconnects, wrong numbers, and out-of-geo leads when reported within the replacement window. Policy details are provided during onboarding.',
                        },
                      },
                      {
                        '@type': 'Question',
                        name: 'Can I choose specific zips or counties?',
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text:
                            'Yes. You can target counties or zips where you are licensed. Narrow filters may increase cost and reduce volume, so start with counties and adjust after baseline data.',
                        },
                      },
                      {
                        '@type': 'Question',
                        name: 'How fast are leads delivered?',
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text:
                            'Real-time leads are delivered instantly via email, webhook, or CRM integration. Aged datasets are delivered immediately after purchase.',
                        },
                      },
                      {
                        '@type': 'Question',
                        name: 'What’s included with setup?',
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text:
                            'We set up delivery, share scripts and rebuttals, and provide speed-to-lead checklists. For transfers, we include sample recordings and disclosure language.',
                        },
                      },
                    ],
                  }),
                }}
              />
              <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://finalexpensemarketing.com/' },
                      { '@type': 'ListItem', position: 2, name: 'Final Expense Leads Cost', item: 'https://finalexpensemarketing.com/final-expense-leads-cost/' },
                    ],
                  }),
                }}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}


