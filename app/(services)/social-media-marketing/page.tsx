import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Media Marketing Midrand | Grow Your Brand',
  description: 'Social media marketing in Midrand. Facebook, Instagram, LinkedIn management. Content creation for South African businesses.',
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
            "name": "Which social media platforms do you manage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We manage Facebook, Instagram, LinkedIn, Twitter/X, and TikTok. We select platforms based on your target audience and business goals in the South African market."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide content creation for social media?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide full content creation including graphics, video, Reels, captions, and posting schedules tailored to each platform and your brand voice."
            }
          },
          {
            "@type": "Question",
            "name": "How much does social media management cost in South Africa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Social media management in South Africa ranges from R3,000-R8,000/month per platform. This includes content creation, posting, community management, and monthly reporting."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from social media marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial growth and engagement improvements typically show within 1-2 months. Significant brand awareness and lead generation results usually take 3-6 months of consistent posting."
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
        <nav className="mb-8">
          <Link href="/" className="text-violet-500 hover:text-violet-400 transition-colors">
            ← Back to Home
          </Link>
        </nav>
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Social Media Marketing in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            Expert social media marketing in Midrand, Gauteng. We help South African businesses build brand awareness, engage communities, and drive leads through strategic social media campaigns.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">What is Social Media Marketing?</h2>
          <p className="text-lg leading-relaxed">
            Social media marketing is the use of platforms like Facebook, Instagram, LinkedIn, and TikTok to promote your business, build brand awareness, and engage with customers. With over 25 million social media users in South Africa, these platforms offer unprecedented reach. Effective social media marketing combines strategic content, community engagement, and data-driven optimization to convert followers into customers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Social Media Marketing Matters in Midrand</h2>
          <p className="text-lg leading-relaxed mb-6">
            South Africa has one of the highest social media engagement rates globally. For Midrand businesses, social media provides direct access to local customers and allows for highly targeted advertising. Unlike traditional marketing, social media offers measurable ROI and the ability to engage in real-time conversations with your audience, building trust and loyalty that translates to sales.
          </p>
          <p>
            Ready to grow your social presence? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a free social media audit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
          <p className="text-lg leading-relaxed mb-4">
            We provide social media marketing for businesses throughout Gauteng including Midrand, Johannesburg, Pretoria, Sandton, and surrounding areas.
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
              <span>South Africa has over 25 million active social media users with high engagement rates.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Social media management in South Africa costs R3,000-R8,000/month per platform.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Visible results typically appear within 1-2 months; significant growth takes 3-6 months.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Content creation includes graphics, video, Reels, captions, and strategic posting schedules.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Social media provides measurable ROI with detailed analytics and conversion tracking.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Which social media platforms do you manage?</h3>
                <p>We manage Facebook, Instagram, LinkedIn, Twitter/X, and TikTok. We select platforms based on your target audience and business goals in the South African market. B2B businesses benefit most from LinkedIn, while consumer brands see results on Facebook and Instagram.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide content creation for social media?</h3>
                <p>Yes, we provide full content creation including professional graphics, video content, Reels, captions, and strategic posting schedules tailored to each platform and your brand voice. Content is optimized for each platform&apos;s algorithm.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does social media management cost in South Africa?</h3>
                <p>Social media management in South Africa ranges from R3,000-R8,000/month per platform. This includes content creation, posting, community management, and monthly reporting. Packages with advertising spend have separate budgets.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to see results from social media marketing?</h3>
                <p>Initial growth and engagement improvements typically show within 1-2 months with consistent posting. Significant brand awareness, follower growth, and lead generation results usually take 3-6 months of consistent strategic posting and engagement.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
