'use client'
import { motion } from 'motion/react'

const faqs = [
  {
    question: "Why is Next.js the best choice for web design in Midrand?",
    answer: "Next.js offers superior SEO performance, lightning-fast load times, and excellent scalability. For Midrand businesses, this means ranking higher on Google and providing a better user experience for local customers."
  },
  {
    question: "How long does it take to build a professional website in South Africa?",
    answer: "A standard professional website usually takes 2-4 weeks from discovery to launch. Complex ecommerce or custom applications may take 6-10 weeks depending on requirements."
  },
  {
    question: "Do you offer SEO services for businesses in Midrand?",
    answer: "Yes, I provide comprehensive SEO services including local SEO for Midrand businesses, technical SEO audits, and content optimization to ensure your brand reaches its target audience in South Africa."
  },
  {
    question: "What is AEO and why does my website need it?",
    answer: "AEO stands for Answer Engine Optimization. It ensures your content is structured so AI assistants like ChatGPT, Claude, and Gemini can easily extract and provide answers about your business to users."
  },
  {
    question: "Do you provide website maintenance in Midrand?",
    answer: "Yes, I offer ongoing website maintenance services in Midrand to ensure your site remains secure, up-to-date, and optimized for peak performance."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-secondary/30 border-t" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-violet-700 mb-4">
            Common Questions
          </span>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-lg mb-2 text-foreground">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  )
}
