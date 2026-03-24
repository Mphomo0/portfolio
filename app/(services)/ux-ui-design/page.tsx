import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'UX/UI Design Midrand | User Experience Expert',
  description: 'Expert UX/UI design in Midrand. User research, wireframes, prototypes for web and mobile apps. South Africa.',
}

export default function UXUIDesignPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "UX/UI Design",
        "description": "Professional UX/UI design services in Midrand, South Africa, focused on creating user-centric digital experiences.",
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
            "name": "What is the difference between UX and UI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "UX (User Experience) focuses on user research, journey mapping, usability, and overall feel. UI (User Interface) focuses on visual design, colors, typography, and interactive elements. Both work together for successful products."
            }
          },
          {
            "@type": "Question",
            "name": "Do you perform user testing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we conduct user testing including usability testing, A/B testing, and prototype validation to ensure the design meets actual user needs before development begins."
            }
          },
          {
            "@type": "Question",
            "name": "How much does UX/UI design cost in South Africa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "UX/UI design in South Africa ranges from R5,000-R30,000+ depending on project scope. UX audit: R5,000-R10,000. Complete UX/UI design: R15,000-R30,000+."
            }
          },
          {
            "@type": "Question",
            "name": "What is your UX design process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our process includes discovery, user research, personas, user journeys, wireframes, prototyping, visual design, and usability testing. We deliver Figma files ready for development."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="uxui-schema"
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
          <h1 className="text-4xl font-bold mb-6">UX/UI Design in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            Expert UX/UI design services in Midrand, Gauteng. We create intuitive and beautiful user interfaces for web and mobile apps that drive engagement for South African businesses.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">What is UX/UI Design?</h2>
          <p className="text-lg leading-relaxed">
            UX/UI design is the process of creating digital products that are both functional and visually appealing. UX (User Experience) design focuses on understanding user needs, creating intuitive journeys, and ensuring usability. UI (User Interface) design handles the visual aspects—colors, typography, layout, and interactive elements. In South Africa, good UX/UI design can increase conversion rates by 200-400% and significantly reduce customer support costs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why UX/UI Design Matters in Midrand</h2>
          <p className="text-lg leading-relaxed mb-6">
            In today&apos;s competitive market, users expect seamless digital experiences. Poor UX costs businesses significantly—users abandon sites that are difficult to navigate. In South Africa, where mobile usage dominates, responsive and intuitive design is critical. Our UX/UI design services help you create products that users love, improving engagement, retention, and ultimately your bottom line.
          </p>
          <p>
            Need a user-centered design? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a free consultation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
          <p className="text-lg leading-relaxed mb-4">
            We provide UX/UI design for businesses throughout Gauteng including Midrand, Johannesburg, Pretoria, Sandton, and surrounding areas.
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
              <span>Good UX/UI design can increase conversion rates by 200-400% for South African businesses.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>UX focuses on usability and user journey; UI focuses on visual design and interactivity.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>UX/UI design in South Africa costs R5,000-R30,000+ depending on project scope and complexity.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>User testing reduces development costs by catching issues before coding begins.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Mobile-first design is essential as over 60% of South Africans access the internet via mobile.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What is the difference between UX and UI?</h3>
                <p>UX (User Experience) focuses on user research, journey mapping, usability testing, and overall feel of the experience. UI (User Interface) focuses on the specific visual design, colors, typography, layout, and interactive elements. Both are essential and work together to create successful digital products.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you perform user testing?</h3>
                <p>Yes, we conduct user testing including usability testing sessions, A/B testing, and prototype validation to ensure the design meets actual user needs before development begins. Testing typically involves 5-10 users and provides actionable insights.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does UX/UI design cost in South Africa?</h3>
                <p>UX/UI design in South Africa ranges from R5,000-R30,000+ depending on project scope. A UX audit and recommendations costs R5,000-R10,000. Complete UX/UI design including research, wireframes, prototypes, and visual design costs R15,000-R30,000+.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What is your UX design process?</h3>
                <p>Our process includes discovery and stakeholder interviews, user research and persona creation, user journey mapping, wireframing, interactive prototyping, visual design in Figma, and usability testing. We deliver production-ready Figma files ready for development.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
