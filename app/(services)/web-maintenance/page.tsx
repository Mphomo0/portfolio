import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Web Maintenance Midrand | Fast & Updated South Africa',
  description: 'Expert web maintenance services in Midrand. We keep your website updated, secure, and performing at its best in South Africa.',
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
        "areaServed": { "@type": "Place", "name": "South Africa" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How often do you perform maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We perform regular maintenance monthly, including updates and security checks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer emergency support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide emergency support to address any critical website issues quickly."
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
        <h1 className="text-4xl font-bold mb-8">Web Maintenance in Midrand</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">Keep your website running smoothly with web maintenance in Midrand. We provide regular updates, security checks, and performance optimization for businesses in South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Why Web Maintenance is Essential for Your Business</h2>
          <p>A website requires ongoing care to remain secure and performant. In Midrand, regular maintenance ensures your business stays protected from threats and provides a fast experience for your users. Our maintenance services focus on keeping your site updated and optimized, allowing you to focus on growing your business in South Africa without worrying about technical issues.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">How often do you perform maintenance?</h3>
                <p>We perform regular maintenance monthly for our Midrand clients, ensuring all updates and security checks are completed on time.</p>
             </div>
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Do you offer emergency support?</h3>
                <p>Yes, we provide priority emergency support for our South African clients to address any critical website issues that may arise.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
