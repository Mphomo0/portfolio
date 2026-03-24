import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ecommerce Development Midrand | Online Store Builder',
  description: 'Custom ecommerce development in Midrand. Secure online stores with PayFast, Peach Payments. Sell online in South Africa.',
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
            "name": "Which ecommerce platforms do you support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build custom ecommerce solutions using Next.js for maximum performance, and can integrate with Shopify, WooCommerce, and other platforms based on your business needs."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer secure payment gateway integration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we integrate with secure South African payment gateways including PayFast, Peach Payments, Paystack, and Yoco for seamless rand payments."
            }
          },
          {
            "@type": "Question",
            "name": "How much does an ecommerce website cost in South Africa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ecommerce websites in South Africa typically cost R8,000-R30,000+ depending on products, features, payment integration, and custom design requirements."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build an online store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ecommerce sites take 4-8 weeks depending on product catalog size, custom features, payment gateway integration, and design complexity."
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
        <nav className="mb-8">
          <Link href="/" className="text-violet-500 hover:text-violet-400 transition-colors">
            ← Back to Home
          </Link>
        </nav>
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Ecommerce Website Development in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            Custom ecommerce development in Midrand, Gauteng. We build secure, high-conversion online stores that help South African businesses sell products and services online.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">What is Ecommerce Website Development?</h2>
          <p className="text-lg leading-relaxed">
            Ecommerce website development is the process of building online stores that enable businesses to sell products or services over the internet. In South Africa, effective ecommerce sites require secure payment processing in Rand (ZAR), mobile-responsive design, inventory management, and SEO optimization. Our Next.js-powered stores load fast, rank well on Google, and provide seamless checkout experiences that convert visitors into customers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Ecommerce Matters in Midrand</h2>
          <p className="text-lg leading-relaxed mb-6">
            South Africa&apos;s ecommerce market is growing rapidly, with more consumers shopping online for convenience. Midrand businesses can reach customers across Gauteng and nationwide through well-designed online stores. An ecommerce presence allows you to operate 24/7, reduce overhead costs compared to physical retail, and scale your business beyond local boundaries.
          </p>
          <p>
            Ready to start selling online? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a free consultation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
          <p className="text-lg leading-relaxed mb-4">
            We build ecommerce websites for businesses throughout Gauteng including Midrand, Johannesburg, Pretoria, Sandton, Centurion, and surrounding areas.
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
              <span>Ecommerce websites in South Africa cost R8,000-R30,000+ depending on features and complexity.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>We integrate South African payment gateways including PayFast, Peach Payments, Paystack, and Yoco.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Next.js powered stores provide fast loading times essential for conversion optimization.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Ecommerce sites take 4-8 weeks to build depending on product catalog and custom features.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Mobile-responsive design is critical as over 60% of South African online shopping happens on mobile devices.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Which ecommerce platforms do you support?</h3>
                <p>We build custom ecommerce solutions using Next.js for maximum performance, and can integrate with Shopify, WooCommerce, and other platforms based on your business needs. Custom builds offer better SEO and no monthly platform fees.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer secure payment gateway integration?</h3>
                <p>Yes, we integrate with secure South African payment gateways including PayFast, Peach Payments, Paystack, and Yoco for seamless rand (ZAR) payments. All integrations include SSL security and PCI compliance.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does an ecommerce website cost in South Africa?</h3>
                <p>Ecommerce websites in South Africa typically cost R8,000-R30,000+ depending on number of products, custom features, payment gateway integration, and design requirements. Custom Next.js stores start at R12,000.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to build an online store?</h3>
                <p>Ecommerce sites take 4-8 weeks depending on product catalog size, custom features, payment gateway integration, and design complexity. Basic stores with under 50 products can be ready in 4 weeks.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
