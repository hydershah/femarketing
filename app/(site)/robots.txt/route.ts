export function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://finalexpensemarketing.com/sitemap.xml`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } })
}


