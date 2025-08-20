"use client"
import { useState } from 'react'

export function ROICalculator() {
  const [leads, setLeads] = useState(100)
  const [closeRate, setCloseRate] = useState(25)
  const [premium, setPremium] = useState(500)
  const [costPerLead, setCostPerLead] = useState(50)
  const [roi, setRoi] = useState<number | null>(null)

  const calculateROI = () => {
    const dealsClosed = (leads * closeRate) / 100
    const totalRevenue = dealsClosed * premium
    const totalCost = leads * costPerLead
    const profit = totalRevenue - totalCost
    const calculatedRoi = totalCost > 0 ? (profit / totalCost) * 100 : 0
    setRoi(Math.round(calculatedRoi))
  }

  return (
    <div className="max-w-md mx-auto bg-white text-dark p-8 rounded-xl shadow-2xl">
      <div className="space-y-6">
        <div>
          <label htmlFor="leads" className="block text-left font-medium mb-2">
            Number of Leads
          </label>
          <input
            id="leads"
            type="number"
            className="w-full rounded-md border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent"
            value={leads}
            onChange={(e) => setLeads(Math.max(0, parseInt(e.target.value) || 0))}
            aria-describedby="leads-description"
            min="0"
          />
          <p id="leads-description" className="text-sm text-gray-500 mt-1">
            Enter the number of leads you want to purchase
          </p>
        </div>
        
        <div>
          <label htmlFor="closeRate" className="block text-left font-medium mb-2">
            Close Rate (%)
          </label>
          <input
            id="closeRate"
            type="number"
            className="w-full rounded-md border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent"
            value={closeRate}
            onChange={(e) => setCloseRate(Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))}
            aria-describedby="closeRate-description"
            min="0"
            max="100"
          />
          <p id="closeRate-description" className="text-sm text-gray-500 mt-1">
            Your expected close rate percentage
          </p>
        </div>
        
        <div>
          <label htmlFor="premium" className="block text-left font-medium mb-2">
            Average Premium ($)
          </label>
          <input
            id="premium"
            type="number"
            className="w-full rounded-md border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent"
            value={premium}
            onChange={(e) => setPremium(Math.max(0, parseInt(e.target.value) || 0))}
            aria-describedby="premium-description"
            min="0"
          />
          <p id="premium-description" className="text-sm text-gray-500 mt-1">
            Average premium amount per policy
          </p>
        </div>

        <div>
          <label htmlFor="cpl" className="block text-left font-medium mb-2">
            Cost Per Lead ($)
          </label>
          <input
            id="cpl"
            type="number"
            className="w-full rounded-md border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent"
            value={costPerLead}
            onChange={(e) => setCostPerLead(Math.max(0, parseInt(e.target.value) || 0))}
            aria-describedby="cpl-description"
            min="0"
          />
          <p id="cpl-description" className="text-sm text-gray-500 mt-1">
            Your expected cost per lead (adjust per lead type)
          </p>
        </div>
        
        <button
          type="button"
          onClick={calculateROI}
          className="w-full rounded-full bg-secondary py-3 font-bold text-dark hover:bg-yellow-400 transition-colors focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          aria-describedby="calculate-description"
        >
          Calculate ROI
        </button>
        <p id="calculate-description" className="text-sm text-gray-500 text-center">
          Click to see your potential return on investment
        </p>
        
        {roi !== null && (
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-800 mb-2">
              Estimated ROI: {roi}%
            </div>
            <div className="text-sm text-green-700 space-y-1">
              <div>
                Closed Policies: {Math.round((leads * closeRate) / 100).toLocaleString()}
              </div>
              <div>
                Revenue: ${(((leads * closeRate) / 100) * premium).toLocaleString()}
              </div>
              <div>
                Lead Cost: ${(leads * costPerLead).toLocaleString()}
              </div>
              <div className="font-medium text-green-800">
                Profit: ${((((leads * closeRate) / 100) * premium) - (leads * costPerLead)).toLocaleString()}
              </div>
              <div className="text-green-600">
                Based on {leads.toLocaleString()} leads at ${costPerLead.toLocaleString()} CPL and {closeRate}% close rate
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
