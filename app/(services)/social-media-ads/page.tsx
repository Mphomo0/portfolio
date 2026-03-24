import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Media Ads Midrand | Facebook Instagram Ads',
  description: 'Targeted social media ads in Midrand. Facebook, Instagram, LinkedIn advertising. High-converting campaigns for South African businesses.',
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
            "name": "Which ad platforms do you focus on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus on Meta Ads (Facebook & Instagram), LinkedIn Ads, and TikTok Ads. Platform selection depends on your target audience, industry, and business goals in the South African market."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure ad success?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We track key metrics including Click-Through Rate (CTR), Cost Per Click (CPC), Cost Per Acquisition (CPA), and Return on Ad Spend (ROAS). We provide detailed monthly reports with actionable insights."
            }
          },
          {
            "@type": "Question",
            "name": "How much should I spend on social media ads in South Africa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Minimum recommended budget is R5,000/month for meaningful testing. Most Midrand businesses see good results with R10,000-R30,000/month ad spend plus management fees of R2,000-R5,000/month."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to optimize ad campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial campaign optimization takes 2-4 weeks to gather enough data. Significant ROAS improvements typically achieved within the first month of running optimized campaigns."
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
        <nav className="mb-8">
          <Link href="/" className="text-violet-500 hover:text-violet-400 transition-colors">
            ← Back to Home
          </Link>
        </nav>
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Social Media Ads in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            Targeted social media advertising in Midrand, Gauteng. We create high-converting ad campaigns on Facebook, Instagram, LinkedIn, and TikTok that drive real results for South African businesses.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">What is Social Media Advertising?</h2>
          <p className="text-lg leading-relaxed">
            Social media advertising is paid promotion on platforms like Facebook, Instagram, LinkedIn, and TikTok. Unlike organic posting, paid ads allow precise targeting by location (Gauteng, Midrand), demographics, interests, and behaviors. South African businesses can reach specific audiences with budgets as low as R5,000/month, making it accessible for businesses of all sizes. Effective ad campaigns combine compelling creatives, strategic targeting, and continuous optimization.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Social Media Ads Matter in Midrand</h2>
          <p className="text-lg leading-relaxed mb-6">
            Social media ads offer the highest targeting precision of any advertising channel. In Gauteng&apos;s competitive market, well-optimized ads can achieve ROAS (Return on Ad Spend) of 3-10x or more. Unlike traditional advertising, you only pay for actual clicks or impressions, and you can scale successful campaigns immediately. Our data-driven approach ensures every rand of your ad budget works harder.
          </p>
          <p>
            Ready to scale your business with ads? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a free ad strategy consultation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
          <p className="text-lg leading-relaxed mb-4">
            We create social media ad campaigns for businesses throughout Gauteng including Midrand, Johannesburg, Pretoria, Sandton, and surrounding areas.
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
              <span>Social media ads can achieve 3-10x ROAS with proper optimization for South African businesses.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Minimum recommended budget is R5,000/month; most Midrand businesses use R10,000-R30,000/month.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Management fees range from R2,000-R5,000/month in addition to ad spend.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Campaign optimization takes 2-4 weeks; significant results within the first month.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>We track CTR, CPC, CPA, and ROAS with detailed monthly reporting.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Which ad platforms do you focus on?</h3>
                <p>We focus on Meta Ads (Facebook & Instagram), LinkedIn Ads, and TikTok Ads. Platform selection depends on your target audience, industry, and business goals. B2B businesses benefit from LinkedIn, while consumer brands see results on Facebook, Instagram, and TikTok.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How do you measure ad success?</h3>
                <p>We track key metrics including Click-Through Rate (CTR), Cost Per Click (CPC), Cost Per Acquisition (CPA), and Return on Ad Spend (ROAS). We provide detailed monthly reports with campaign performance, audience insights, and actionable recommendations for improvement.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How much should I spend on social media ads in South Africa?</h3>
                <p>Minimum recommended budget is R5,000/month for meaningful testing and data collection. Most Midrand businesses see good results with R10,000-R30,000/month ad spend plus management fees of R2,000-R5,000/month. Larger campaigns can scale significantly based on goals.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to optimize ad campaigns?</h3>
                <p>Initial campaign optimization takes 2-4 weeks to gather enough data and identify winning audiences. Significant ROAS improvements are typically achieved within the first month of running optimized campaigns. Ongoing optimization continues to improve performance.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
