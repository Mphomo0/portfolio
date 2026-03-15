import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Web Hosting Midrand | Reliable & Secure South Africa',
  description: 'Fast and reliable web hosting services in Midrand. We provide secure hosting solutions with 99.9% uptime for businesses in South Africa.',
}

export default function WebHostingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Web Hosting",
        "description": "Secure and reliable web hosting services in Midrand, South Africa, specializing in high-performance hosting for small businesses.",
        "provider": { "@id": "https://www.mpho-moipolai.co.za/#person" },
        "areaServed": { "@type": "Place", "name": "South Africa" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is included in your hosting plans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our plans include SSL certificates, daily backups, and technical support."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer website migrations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide free website migration services for new customers moving to our hosting."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="hosting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-8">Web Hosting in Midrand</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">Ensure your website is always online with reliable web hosting in Midrand. We provide fast, secure, and scalable hosting solutions for businesses in South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Why Web Hosting is Essential for Your Business</h2>
          <p>Your web hosting is the foundation of your online presence. In Midrand, having a host that provides fast load times and high uptime is crucial for maintaining customer trust and improving your SEO. Our hosting services focus on reliability and security, ensuring your website is always available and performing at its best for your South African audience.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">What is included in your hosting plans?</h3>
                <p>Our Midrand hosting plans include SSL certificates for security, regular daily backups, and reliable technical support to keep your South African business online.</p>
             </div>
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Do you offer website migrations?</h3>
                <p>Yes, we offer free migration services to help you seamlessly move your existing website to our secure Midrand servers.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
