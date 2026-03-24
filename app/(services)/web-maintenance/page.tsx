import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Maintenance Midrand | Website Support',
  description: 'Web maintenance in Midrand. Updates, security, performance optimization. Keep your South African website secure and fast.',
}

export default function WebMaintenancePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Web Maintenance",
        "description": "Professional web maintenance services in Midrand, South Africa, focused on security and performance.",
        "provider": { "@id": "https://www.mpho-moipolai.co.za/#person" },
        "areaServed": [
          { "@type": "State", "name": "Gauteng" },
          { "@type": "City", "name": "Midrand" },
          { "@type": "Country", "name": "South Africa" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How often do you perform website maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We perform monthly maintenance including CMS updates, security scans, performance checks, and backups. Critical security patches are applied immediately when released."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer emergency support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide 24/7 emergency support for critical issues. Response time is within 2 hours for urgent matters affecting your website availability."
            }
          },
          {
            "@type": "Question",
            "name": "How much does web maintenance cost in South Africa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web maintenance in South Africa ranges from R500-R2,500/month depending on website complexity, number of pages, and required updates. One-time fixes start at R500."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in web maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Maintenance includes CMS core and plugin updates, security monitoring, performance optimization, daily backups, uptime monitoring, and monthly reporting."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="maintenance-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <nav className="mb-8">
          <Link href="/" className="text-violet-500 hover:text-violet-400 transition-colors">
            ← Back to Home
          </Link>
        </nav>
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Web Maintenance in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            Expert web maintenance in Midrand, Gauteng. We keep your South African website updated, secure, and performing at optimal speed.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">What is Web Maintenance?</h2>
          <p className="text-lg leading-relaxed">
            Web maintenance is the ongoing process of keeping your website secure, updated, and performing optimally. This includes CMS (WordPress, etc.) core and plugin updates, security monitoring and vulnerability patches, performance optimization, regular backups, uptime monitoring, and content updates. In South Africa, where cyber threats are increasing, regular maintenance prevents hacking attempts that affect 30,000+ websites daily. Neglected websites become slow, insecure, and may eventually stop working entirely.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Web Maintenance Matters in Midrand</h2>
          <p className="text-lg leading-relaxed mb-6">
            Websites are not set-and-forget—they require ongoing care to remain secure and functional. Outdated plugins and CMS versions are the leading cause of website hacks. In Gauteng&apos;s competitive market, a slow or broken website damages your reputation and costs you customers. Regular maintenance ensures your website loads fast, ranks well on Google, and provides a secure experience for your visitors. Prevention is far cheaper than fixing a hacked site.
          </p>
          <p>
            Need website maintenance? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a maintenance plan.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
          <p className="text-lg leading-relaxed mb-4">
            We provide web maintenance for businesses throughout Gauteng including Midrand, Johannesburg, Pretoria, Sandton, and surrounding areas.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <li className="bg-muted/30 rounded-lg p-3 text-center">Midrand</li>
            <li className="bg-muted/30 rounded-lg p-3 text-center">Johannesburg</li>
            <li className="bg-muted/30 rounded-lg p-3 text-center">Pretoria</li>
            <li className="bg-muted/30 rounded-lg p-3 text-center">Sandton</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Web maintenance in South Africa costs R500-R2,500/month depending on website complexity.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Outdated websites are hacked within 24 hours of vulnerabilities being discovered.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Monthly maintenance includes updates, security scans, backups, and performance optimization.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>24/7 emergency support available with 2-hour response for critical issues.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Prevention is cheaper than recovery—hacked site cleanup costs R5,000-R20,000+.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How often do you perform website maintenance?</h3>
                <p>We perform monthly maintenance including CMS updates, security scans, performance checks, and backups. Critical security patches are applied immediately when released, typically within 24-48 hours. We also provide on-demand content updates as needed.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer emergency support?</h3>
                <p>Yes, we provide 24/7 emergency support for critical issues affecting your website availability. Response time is within 2 hours for urgent matters. Emergency rates apply outside business hours.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does web maintenance cost in South Africa?</h3>
                <p>Web maintenance in South Africa ranges from R500-R2,500/month depending on website complexity, number of pages, and required updates. Basic maintenance for small sites starts at R500/month. One-time fixes and emergency work start at R500.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What is included in web maintenance?</h3>
                <p>Maintenance includes CMS core and plugin/theme updates, security monitoring and vulnerability scanning, performance optimization and speed tuning, daily automated backups, uptime monitoring with alerts, and monthly performance reports.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
