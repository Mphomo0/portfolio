import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ecommerce Website Development Midrand | Sell Online South Africa',
  description: 'Custom ecommerce website development in Midrand. We build secure, user-friendly online stores to help you grow your sales in South Africa.',
}

export default function EcommerceWebsiteDevelopmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Ecommerce Website Development",
        "description": "Custom ecommerce website development services in Midrand, specializing in high-conversion online stores.",
        "provider": { "@id": "https://www.mpho-moipolai.co.za/#person" },
        "areaServed": { "@type": "Place", "name": "South Africa" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which ecommerce platforms do you support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build custom ecommerce solutions using Next.js, and can also integrate with platforms like Shopify and WooCommerce."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer secure payment gateway integration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we integrate with secure South African payment gateways like PayFast, Peach Payments, and Paystack."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="ecommerce-dev-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-8">Ecommerce Website Development in Midrand</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">Expand your reach and sell online with ecommerce website development in Midrand. We create secure, high-conversion online stores that drive growth for businesses in South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Why Ecommerce is Essential for Your Business</h2>
          <p>Having an online store is no longer just an option; it&apos;s a necessity for businesses that want to stay competitive. Our ecommerce development services in Midrand focus on providing a seamless shopping experience for your customers, from product discovery to secure checkout. We ensure your online store is optimized for sales, performance, and security, helping you succeed in the digital marketplace of South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Which ecommerce platforms do you support?</h3>
                <p>We build custom ecommerce solutions using Next.js for high performance, and we can also integrate with leading platforms like Shopify and WooCommerce depending on your Midrand business needs.</p>
             </div>
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Do you offer secure payment gateway integration?</h3>
                <p>Absolutely. We integrate with secure South African payment gateways like PayFast, Peach Payments, and Paystack to ensure your customers in Midrand and beyond can shop with confidence.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
