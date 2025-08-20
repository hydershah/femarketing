export async function GET() {
  const baseUrl = 'https://finalexpensemarketing.com'
  const urls = [
    '/',
    '/final-expense-leads/',
    '/live-transfer-leads/',
    '/final-expense-live-transfers/',
    '/aged-final-expense-leads/',
    '/exclusive-final-expense-leads/',
    '/shared-final-expense-leads/',
    '/final-expense-leads-cost/',
    '/how-it-works/',
    '/about/',
    '/contact/',
    '/privacy/',
    '/terms/',
    '/tcpa/',
    '/disclaimers/'
  ]
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${baseUrl}${u}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } })
}


