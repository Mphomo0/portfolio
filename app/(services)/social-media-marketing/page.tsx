import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Social Media Marketing Midrand | Engage & Grow South Africa',
  description: 'Expert social media marketing services in Midrand. We help you build a community and drive engagement on platforms like Facebook and Instagram in South Africa.',
}

export default function SocialMediaMarketingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Social Media Marketing",
        "description": "Professional social media marketing services in Midrand, South Africa, focused on brand engagement and community building.",
        "provider": { "@id": "https://www.mpho-moipolai.co.za/#person" },
        "areaServed": { "@type": "Place", "name": "South Africa" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which platforms do you manage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We manage multiple platforms, including Facebook, Instagram, LinkedIn, and Twitter/X."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide content creation for social media?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide full content creation services, including graphics, video, and copy."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="smm-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-8">Social Media Marketing in Midrand</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">Connect with your audience where they are with social media marketing in Midrand. We help you build a loyal community and drive meaningful engagement on social platforms in South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Why Social Media Marketing is Essential for Your Business</h2>
          <p>Social media is a powerful tool for building brand awareness and fostering customer loyalty. In Midrand, social media allows you to connect with your local community in real-time. Our marketing services focus on creating engaging content and implementing strategic campaigns that drive results and help your business thrive in the South African digital landscape.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Which platforms do you manage?</h3>
                <p>We manage a range of platforms tailored to your Midrand audience, including Facebook, Instagram, LinkedIn, and Twitter/X.</p>
             </div>
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Do you provide content creation for social media?</h3>
                <p>Yes, we offer full content creation services including professional graphics, video content, and engaging copy specifically designed for South African businesses.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
