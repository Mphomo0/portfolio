'use client'
import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Thabo Molefe',
    role: 'Founder',
    company: 'Sozim Trading & Consultancy',
    quote: 'Mpho delivered our education platform on time and exceeded expectations. The website performance and SEO results speak for themselves - we now rank on the first page for our key terms.',
    rating: 5,
    service: 'Ecommerce Website Development',
  },
  {
    name: 'Sarah van der Berg',
    role: 'Creative Director',
    company: 'Nostalgic Studio',
    quote: 'Working with Mpho was seamless. His Next.js expertise combined with SEO knowledge helped our agency website achieve exceptional Core Web Vitals scores and organic visibility.',
    rating: 5,
    service: 'Next.js Website Design',
  },
  {
    name: 'Lucky Nkosi',
    role: 'Managing Director',
    company: 'Jiyology Building & Plumbing',
    quote: 'Our new website has generated more leads in 3 months than our previous site did in a year. The local SEO optimization for Midrand and Gauteng was exactly what we needed.',
    rating: 5,
    service: 'Web Design & Local SEO',
  },
]

export function TestimonialsSection() {
  return (
    <section
      id='testimonials'
      aria-labelledby='testimonials-heading'
      className='py-24 bg-card-gradient border-y border-border/50'
    >
      <div className='container mx-auto px-6'>
        <header className='text-center mb-16'>
          <span className='inline-block text-sm font-medium text-violet-700 mb-4'>
            Client Feedback
          </span>
          <h2
            id='testimonials-heading'
            className='text-3xl md:text-4xl font-bold text-foreground mb-4'
          >
            What Clients Say
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Results-driven web solutions for businesses across South Africa.
          </p>
        </header>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, i) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className='relative p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50'
            >
              <Quote className='w-8 h-8 text-violet-500/30 mb-4' />
              
              <div className='flex gap-1 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-4 h-4 fill-violet-500 text-violet-500'
                  />
                ))}
              </div>

              <blockquote className='text-foreground mb-6 leading-relaxed'>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <footer className='border-t border-border/50 pt-4'>
                <p className='font-semibold text-foreground'>
                  {testimonial.name}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {testimonial.role}, {testimonial.company}
                </p>
                <p className='text-xs text-violet-600 mt-2'>
                  {testimonial.service}
                </p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://www.mpho-moipolai.co.za/#organization',
            name: 'Mpho Moipolai Web Design',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: '3',
              bestRating: '5',
              worstRating: '1',
            },
            review: testimonials.map((t) => ({
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: t.rating.toString(),
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: t.name,
              },
              reviewBody: t.quote,
              itemReviewed: {
                '@type': 'Service',
                name: t.service,
                provider: {
                  '@id': 'https://www.mpho-moipolai.co.za/#organization',
                },
              },
            })),
          }),
        }}
      />
    </section>
  )
}