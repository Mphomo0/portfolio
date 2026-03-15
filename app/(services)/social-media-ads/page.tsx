import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Social Media Ads Midrand | Drive Conversions South Africa',
  description: 'Targeted social media advertising in Midrand. We create high-converting ad campaigns on Facebook, Instagram, and LinkedIn for businesses in South Africa.',
}

export default function SocialMediaAdsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Social Media Ads",
        "description": "Custom social media advertising services in Midrand, specializing in high-conversion ad campaigns.",
        "provider": { "@id": "https://www.mpho-moipolai.co.za/#person" },
        "areaServed": { "@type": "Place", "name": "South Africa" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which ad platforms do you focus on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We primarily focus on Meta (Facebook & Instagram), LinkedIn, and Google Ads."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure ad success?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We track key metrics like Click-Through Rate (CTR), Cost Per Acquisition (CPA), and Return on Ad Spend (ROAS)."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="ads-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-8">Social Media Ads in Midrand</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">Reach your target audience with precision using social media ads in Midrand. We create high-converting advertising campaigns that drive sales and growth for businesses in South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Why Social Media Ads are Essential for Your Business</h2>
          <p>Paid advertising on social media is one of the most effective ways to reach a specific audience. In Midrand, social media ads allow you to target customers based on their interests, demographics, and behavior. Our ad services focus on optimizing your spend to ensure you get the best possible return on investment (ROI) in the South African market.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Which ad platforms do you focus on?</h3>
                <p>We primarily focus on Meta (Facebook & Instagram), LinkedIn, and Google Ads, depending on where your Midrand audience is most active.</p>
             </div>
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">How do you measure ad success?</h3>
                <p>We track key performance indicators such as Click-Through Rate (CTR), Cost Per Acquisition (CPA), and overall Return on Ad Spend (ROAS) to ensure your South African business is seeing real results.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
