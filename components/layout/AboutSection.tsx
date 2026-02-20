'use client'

import { Code2, Sparkles, Zap } from 'lucide-react'
import { motion } from 'motion/react'

export function AboutSection() {
  // Skills data for JSON-LD
  const skillsData = [
    {
      title: 'Full-Stack Expertise',
      description:
        'From database design to pixel-perfect UIs. I handle the entire stack with equal proficiency and attention to detail.',
      keywords: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    },
    {
      title: 'Performance Obsessed',
      description:
        'Every millisecond counts. I optimize Core Web Vitals, implement smart caching, and ensure blazing-fast load times.',
      keywords: [
        'Performance',
        'SEO',
        'Web Vitals',
        'Caching',
        'Speed Optimization',
      ],
    },
    {
      title: 'User-Centric Design',
      description:
        'Beautiful interfaces that are accessible to everyone. I build with empathy and test with real users.',
      keywords: [
        'UX',
        'UI',
        'Accessibility',
        'Design Thinking',
        'User Research',
      ],
    },
  ]

  // JSON-LD structured data for skills
  const skillsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mpho Moipolai',
    hasSkill: skillsData.map((skill) => ({
      '@type': 'DefinedTerm',
      name: skill.title,
      description: skill.description,
      keywords: skill.keywords.join(', '),
    })),
  }

  return (
    <>
      {/* JSON-LD structured data for skills */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(skillsStructuredData),
        }}
      />

      <section
        id='about'
        className='py-24 md:py-32 bg-secondary/30'
        aria-labelledby='about-heading'
      >
        <div className='container mx-auto px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className='inline-block text-sm font-medium text-violet-700 mb-4'>
                  About Me
                </span>
                <h2
                  id='about-heading'
                  className='text-3xl md:text-4xl font-bold text-foreground mb-6'
                >
                  Crafting digital experiences with precision and purpose
                </h2>
                <div className='space-y-4 text-muted-foreground'>
                  <p className='text-lg'>
                    I'm a full-stack developer with 13+ years of experience
                    building production-grade web applications. My expertise
                    lies in the
                    <span className='text-foreground font-medium'>
                      {' '}
                      Next.js ecosystem
                    </span>
                    , where I leverage App Router, Server Components, and modern
                    React patterns to deliver exceptional user experiences.
                  </p>
                  <p>
                    I&lsquo;ve built web applications used by a growing number
                    of users, improved performance to make apps faster and more
                    reliable, and designed systems that can scale as needed. I
                    care about clean code, intuitive UX, and creating solutions
                    that genuinely help people.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, experimenting with web development projects,
                    or learning about the latest trends in tech.
                  </p>
                </div>
              </motion.div>

              {/* Stats/Highlights Cards */}
              <div className='grid gap-6'>
                {[
                  {
                    icon: <Code2 className='w-6 h-6 text-violet-500' />,
                    title: 'Full-Stack Expertise',
                    description:
                      'From database design to pixel-perfect UIs. I handle the entire stack with equal proficiency and attention to detail.',
                  },
                  {
                    icon: <Zap className='w-6 h-6 text-violet-500' />,
                    title: 'Performance Obsessed',
                    description:
                      'Every millisecond counts. I optimize Core Web Vitals, implement smart caching, and ensure blazing-fast load times.',
                  },
                  {
                    icon: <Sparkles className='w-6 h-6 text-violet-500' />,
                    title: 'User-Centric Design',
                    description:
                      'Beautiful interfaces that are accessible to everyone. I build with empathy and test with real users.',
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className='group p-6 rounded-2xl bg-card-gradient border border-border/50 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1'
                  >
                    {/* Icon container with proper padding and background */}
                    <div className='w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors'>
                      {card.icon}
                    </div>

                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                      {card.title}
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
