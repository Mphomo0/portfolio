'use client'

import { motion } from 'motion/react'
import { Gauge, Heart, Layers, Users } from 'lucide-react'
import Script from 'next/script'

const principles = [
  {
    icon: Gauge,
    title: 'Performance-first mindset',
    description:
      "Every decision starts with 'how will this affect performance?' Fast apps aren't just nice—they're essential for user retention and SEO.",
  },
  {
    icon: Heart,
    title: 'Accessibility & UX',
    description:
      'Building for everyone means building better for everyone. Semantic HTML, keyboard navigation, and screen reader support are non-negotiable.',
  },
  {
    icon: Layers,
    title: 'Maintainable architecture',
    description:
      "Code is read more than it's written. I prioritize clarity, modularity, and documentation so future developers (including future me) can work efficiently.",
  },
  {
    icon: Users,
    title: 'Developer experience',
    description:
      'Great DX leads to great products. Type safety, clear APIs, and thoughtful abstractions make teams more productive and codebases more reliable.',
  },
]

// JSON-LD structured data
const principlesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: "Mpho Moipolai's Software Development Philosophy",
  description:
    'Guiding principles that drive Mpho Moipolai’s approach to building high-quality web applications.',
  about: principles.map((p) => ({
    '@type': 'Thing',
    name: p.title,
    description: p.description,
  })),
}

export default function PhilosophySection() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id='principles-structured-data'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(principlesStructuredData),
        }}
      />

      <section
        id='philosophy'
        className='py-24 md:py-32 bg-background'
        aria-labelledby='philosophy-heading'
      >
        <div className='container mx-auto px-6'>
          <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start'>
            {/* LEFT COLUMN */}
            <motion.div
              className='lg:sticky lg:top-32'
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span className='inline-block text-sm font-medium text-primary mb-4'>
                Philosophy
              </span>

              <h2
                id='philosophy-heading'
                className='text-3xl md:text-4xl font-bold text-foreground mb-6'
              >
                How I think about building software
              </h2>

              <p className='text-muted-foreground text-lg mb-8'>
                Beyond technical skills, I believe great software comes from
                thoughtful principles applied consistently. Here’s what guides
                my approach to every project.
              </p>

              <div className='p-5 rounded-xl bg-muted border border-border'>
                <p className='text-sm text-muted-foreground italic'>
                  “The best code is no code at all. Every line of code you write
                  is a line that needs to be tested, documented, and
                  maintained.”
                </p>
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <div className='grid gap-6'>
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors'>
                      <principle.icon
                        className='w-6 h-6 text-primary'
                        aria-hidden='true'
                      />
                    </div>

                    <div>
                      <h3 className='text-lg font-semibold text-card-foreground mb-2'>
                        {principle.title}
                      </h3>

                      <p className='text-muted-foreground text-sm leading-relaxed'>
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
