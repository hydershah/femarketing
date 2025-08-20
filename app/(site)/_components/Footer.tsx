import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t" role="contentinfo" aria-label="Site footer">
      <div className="mx-auto container px-4 py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="font-extrabold">FEMarketing</div>
          <p className="mt-3 text-slate-600">Final expense insurance lead provider. TCPA compliant. Real-time delivery.</p>
        </div>
        <nav aria-labelledby="footer-final-expense">
          <div id="footer-final-expense" className="font-semibold">Final Expense</div>
          <ul className="mt-3 space-y-2" role="list">
            <li><Link href="/final-expense-leads/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Final Expense Leads</Link></li>
            <li><Link href="/final-expense-live-transfers/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Live Transfers</Link></li>
          </ul>
        </nav>
        <nav aria-labelledby="footer-lead-types">
          <div id="footer-lead-types" className="font-semibold">Lead Types</div>
          <ul className="mt-3 space-y-2" role="list">
            <li><Link href="/live-transfer-leads/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Live Transfer Leads</Link></li>
            <li><Link href="/aged-final-expense-leads/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Aged Leads</Link></li>
            <li><Link href="/exclusive-final-expense-leads/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Exclusive Leads</Link></li>
            <li><Link href="/shared-final-expense-leads/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Shared Leads</Link></li>
          </ul>
        </nav>
        <nav aria-labelledby="footer-company">
          <div id="footer-company" className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2" role="list">
            <li><Link href="/about/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">About</Link></li>
            <li><Link href="/contact/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Contact</Link></li>
            <li><Link href="/privacy/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Privacy Policy</Link></li>
            <li><Link href="/terms/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Terms of Service</Link></li>
            <li><Link href="/tcpa/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">TCPA Compliance</Link></li>
            <li><Link href="/disclaimers/" className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">Disclaimers</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Final Expense Marketing. All rights reserved.
      </div>
    </footer>
  )
}


