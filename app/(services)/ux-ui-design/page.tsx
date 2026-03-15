import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'UX/UI Design Midrand | Intuitive & Beautiful South Africa',
  description: 'Expert UX/UI design services in Midrand. We create intuitive and beautiful user interfaces for web and mobile apps in South Africa.',
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
        "areaServed": { "@type": "Place", "name": "South Africa" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between UX and UI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "UX focuses on the overall feel of the experience, while UI focuses on the visual design and interactivity of the interface."
            }
          },
          {
            "@type": "Question",
            "name": "Do you perform user testing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we conduct user testing as part of our UX design process to ensure the final product meets your users' needs."
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
        <h1 className="text-4xl font-bold mb-8">UX/UI Design in Midrand</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">Create intuitive and beautiful digital experiences with UX/UI design in Midrand. We focus on putting your users first to drive engagement and satisfaction in South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Why UX/UI Design is Essential for Your Business</h2>
          <p>The success of your digital product depends on how users interact with it. In Midrand, providing a seamless and enjoyable user experience is key to retaining customers. Our UX/UI design services focus on understanding your users&apos; needs and creating interfaces that are both functional and visually appealing, ensuring your business delivers value in the South African market.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">What is the difference between UX and UI?</h3>
                <p>UX focuses on the overall feel and usability of the experience, while UI focuses on the specific visual design and interactivity of the interface for your Midrand customers.</p>
             </div>
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Do you perform user testing?</h3>
                <p>Yes, we conduct user testing as part of our UX design process to ensure the final product truly meets the needs of your users in South Africa.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
