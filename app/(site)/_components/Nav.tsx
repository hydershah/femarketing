"use client"
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, ChevronDown, X } from 'lucide-react'

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
    console.log('Nav component mounted')
  }, [])

  const handleMouseEnter = (dropdown: string) => {
    console.log('Mouse enter:', dropdown)
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setDropdownOpen(dropdown)
  }

  const handleMouseLeave = (dropdown: string) => {
    console.log('Mouse leave:', dropdown)
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(null)
    }, 150) // Small delay to prevent immediate closing
  }

  const handleDropdownMouseEnter = (dropdown: string) => {
    console.log('Dropdown mouse enter:', dropdown)
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setDropdownOpen(dropdown)
  }

  const handleDropdownMouseLeave = () => {
    console.log('Dropdown mouse leave')
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(null)
    }, 150)
  }

  const closeMobileMenu = () => {
    setMobileOpen(false)
  }

  // Debug logging
  useEffect(() => {
    console.log('Dropdown state changed:', dropdownOpen)
  }, [dropdownOpen])

  return (
    <header className="sticky top-0 z-50 bg-dark text-white shadow-lg overflow-visible">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between relative">
        <Link href="/" className="font-bold text-xl hover:text-secondary transition-colors">
          Final Expense Marketing
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 overflow-visible">
          <div 
            className="relative group nav-dropdown-container"
            onMouseEnter={() => handleMouseEnter('final-expense')}
            onMouseLeave={() => handleMouseLeave('final-expense')}
          >
            <Link href="/final-expense-leads/" className="font-medium hover:text-secondary py-4 px-2 flex items-center gap-1 transition-colors">
              Final Expense
              <ChevronDown size={16} className={`transition-transform duration-200 ${mounted && dropdownOpen === 'final-expense' ? 'rotate-180' : ''}`} />
            </Link>
            {mounted && dropdownOpen === 'final-expense' && (
              <div 
                className="nav-dropdown absolute left-0 top-full mt-1 rounded-lg bg-white text-dark shadow-xl min-w-[240px] py-3 border border-gray-200"
                onMouseEnter={() => handleDropdownMouseEnter('final-expense')}
                onMouseLeave={handleDropdownMouseLeave}
                style={{
                  position: 'fixed',
                  zIndex: 9999,
                  pointerEvents: 'auto'
                }}
              >
                <Link className="block px-4 py-3 hover:bg-gray-100 transition-colors rounded-md mx-2" href="/final-expense-leads/" onClick={closeMobileMenu}>Final Expense Leads</Link>
                <Link className="block px-4 py-3 hover:bg-gray-100 transition-colors rounded-md mx-2" href="/final-expense-live-transfers/" onClick={closeMobileMenu}>Final Expense Live Transfers</Link>
              </div>
            )}
          </div>
          
          <div 
            className="relative group nav-dropdown-container"
            onMouseEnter={() => handleMouseEnter('lead-types')}
            onMouseLeave={() => handleMouseLeave('lead-types')}
          >
            <Link href="/live-transfer-leads/" className="font-medium hover:text-secondary py-4 px-2 flex items-center gap-1 transition-colors">
              Lead Types
              <ChevronDown size={16} className={`transition-transform duration-200 ${mounted && dropdownOpen === 'lead-types' ? 'rotate-180' : ''}`} />
            </Link>
            {mounted && dropdownOpen === 'lead-types' && (
              <div 
                className="nav-dropdown absolute left-0 top-full mt-1 rounded-lg bg-white text-dark shadow-xl min-w-[240px] py-3 border border-gray-200"
                onMouseEnter={() => handleDropdownMouseEnter('lead-types')}
                onMouseLeave={handleDropdownMouseLeave}
                style={{
                  position: 'fixed',
                  zIndex: 9999,
                  pointerEvents: 'auto'
                }}
              >
                <Link className="block px-4 py-3 hover:bg-gray-100 transition-colors rounded-md mx-2" href="/live-transfer-leads/" onClick={closeMobileMenu}>Live Transfer Leads</Link>
                <Link className="block px-4 py-3 hover:bg-gray-100 transition-colors rounded-md mx-2" href="/aged-final-expense-leads/" onClick={closeMobileMenu}>Aged Final Expense Leads</Link>
                <Link className="block px-4 py-3 hover:bg-gray-100 transition-colors rounded-md mx-2" href="/exclusive-final-expense-leads/" onClick={closeMobileMenu}>Exclusive Leads</Link>
                <Link className="block px-4 py-3 hover:bg-gray-100 transition-colors rounded-md mx-2" href="/shared-final-expense-leads/" onClick={closeMobileMenu}>Shared Leads</Link>
              </div>
            )}
          </div>
          
          <Link href="/final-expense-leads-cost/" className="font-medium hover:text-secondary py-4 px-2 transition-colors">Pricing</Link>
          <Link href="/how-it-works/" className="font-medium hover:text-secondary py-4 px-2 transition-colors">How It Works</Link>
          <Link href="/blog/" className="font-medium hover:text-secondary py-4 px-2 transition-colors">Blog</Link>
          
          <div 
            className="relative group nav-dropdown-container"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={() => handleMouseLeave('about')}
          >
            <Link href="/about/" className="font-medium hover:text-secondary py-4 px-2 flex items-center gap-1 transition-colors">
              About
              <ChevronDown size={16} className={`transition-transform duration-200 ${mounted && dropdownOpen === 'about' ? 'rotate-180' : ''}`} />
            </Link>
            {mounted && dropdownOpen === 'about' && (
              <div 
                className="nav-dropdown absolute left-0 top-full mt-1 rounded-lg bg-white text-dark shadow-xl min-w-[240px] py-3 border border-gray-200"
                onMouseEnter={() => handleDropdownMouseEnter('about')}
                onMouseLeave={handleDropdownMouseLeave}
                style={{
                  position: 'fixed',
                  zIndex: 9999,
                  pointerEvents: 'auto'
                }}
              >
                <Link className="block px-4 py-3 hover:bg-gray-100 transition-colors rounded-md mx-2" href="/about/" onClick={closeMobileMenu}>About Us</Link>
                <Link className="block px-4 py-3 hover:bg-gray-100 transition-colors rounded-md mx-2" href="/contact/" onClick={closeMobileMenu}>Contact</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTA Button */}
        <Link href="/final-expense-leads-cost/" className="hidden lg:inline-flex items-center rounded-full bg-secondary px-6 py-2 font-medium text-dark hover:bg-yellow-400 transition-colors">
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white hover:text-secondary transition-colors"
          aria-label="Toggle menu" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-dark text-white px-4 py-6 space-y-4 border-t border-gray-700">
          <div className="space-y-2">
            <div className="font-semibold text-secondary mb-2">Final Expense</div>
            <Link href="/final-expense-leads/" className="block py-2 pl-4 hover:text-secondary transition-colors" onClick={closeMobileMenu}>Final Expense Leads</Link>
            <Link href="/final-expense-live-transfers/" className="block py-2 pl-4 hover:text-secondary transition-colors" onClick={closeMobileMenu}>Final Expense Live Transfers</Link>
          </div>
          
          <div className="space-y-2">
            <div className="font-semibold text-secondary mb-2">Lead Types</div>
            <Link href="/live-transfer-leads/" className="block py-2 pl-4 hover:text-secondary transition-colors" onClick={closeMobileMenu}>Live Transfer Leads</Link>
            <Link href="/aged-final-expense-leads/" className="block py-2 pl-4 hover:text-secondary transition-colors" onClick={closeMobileMenu}>Aged Final Expense Leads</Link>
            <Link href="/exclusive-final-expense-leads/" className="block py-2 pl-4 hover:text-secondary transition-colors" onClick={closeMobileMenu}>Exclusive Leads</Link>
            <Link href="/shared-final-expense-leads/" className="block py-2 pl-4 hover:text-secondary transition-colors" onClick={closeMobileMenu}>Shared Leads</Link>
          </div>
          
          <Link href="/final-expense-leads-cost/" className="block py-2 hover:text-secondary transition-colors" onClick={closeMobileMenu}>Pricing</Link>
          <Link href="/how-it-works/" className="block py-2 hover:text-secondary transition-colors" onClick={closeMobileMenu}>How It Works</Link>
          <Link href="/blog/" className="block py-2 hover:text-secondary transition-colors" onClick={closeMobileMenu}>Blog</Link>
          <Link href="/about/" className="block py-2 hover:text-secondary transition-colors" onClick={closeMobileMenu}>About</Link>
          <Link href="/contact/" className="block py-2 hover:text-secondary transition-colors" onClick={closeMobileMenu}>Contact</Link>
          
          <Link href="/final-expense-leads-cost/" className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 font-medium text-dark hover:bg-yellow-400 transition-colors mt-4" onClick={closeMobileMenu}>
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  )
}