import { Footer } from './_components/Footer'
import { Nav } from './_components/Nav'
import { StickyContact } from './_components/StickyContact'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="flex-1">{children}</div>
      <Footer />
      <StickyContact />
    </div>
  )
}


