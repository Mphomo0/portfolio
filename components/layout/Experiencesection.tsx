'use client'

import { motion } from 'motion/react'

const experiences = [
  {
    title: 'Junior Web Developer',
    company: 'Chillies.co.za',
    companyUrl: 'https://chillies.co.za',
    startDate: '2016',
    endDate: '2017',
    description:
      'Maintained and updated company websites, managing content publishing through WordPress and PHP-based systems.',
    highlights: [
      'Developed a custom WordPress data scraper plugin to automate content aggregation.',
      'Managed and published content for the Arrive Alive platform.',
      'Performed website updates, bug fixes, and general maintenance to ensure optimal performance.',
      'Assisted in front-end enhancements and implemented responsive design improvements.',
    ],
  },
  {
    title: 'Digital Designer',
    company: 'AutoTrader South Africa',
    companyUrl: 'https://www.autotrader.co.za',
    startDate: '2017',
    endDate: undefined,
    description:
      'Design and develop visually compelling graphics, logos, HTML banners, and digital assets that strengthen brand presence and support marketing objectives.',
    highlights: [
      'Collaborated with marketing, development, and product teams to deliver cohesive cross-channel campaigns.',
      'Maintained brand consistency across all creative outputs and marketing materials.',
      'Designed responsive HTML emailers and display ads to support promotional campaigns.',
      'Managed multiple projects simultaneously, ensuring on-time delivery in a fast-paced environment.',
    ],
  },
  {
    title: 'Web Developer',
    company: 'AutoTrader South Africa',
    companyUrl: 'https://www.autotrader.co.za',
    startDate: '2021',
    endDate: undefined,
    description:
      "Develop responsive, high-performance web interfaces and contribute to the company's design system, with a strong focus on accessibility, scalability, and cross-browser compatibility.",
    highlights: [
      'Built and implemented an internal briefing system to streamline project requests and improve team workflow efficiency.',
      'Developed and launched microsites and full-scale websites, increasing online traffic and user engagement.',
      'Ensured WCAG accessibility standards and cross-browser compatibility across all web projects.',
      'Optimized front-end code and assets to enhance performance, maintainability, and scalability.',
    ],
  },
]

const experienceStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mpho Moipolai',
  url: 'https://mpho-moipolai.co.za',
  hasOccupation: experiences.map((exp) => ({
    '@type': 'Occupation',
    name: exp.title,
    description: `${exp.description} ${exp.highlights.join('. ')}`,
    occupationLocation: {
      '@type': 'Place',
      name: 'Johannesburg, South Africa',
    },
    hiringOrganization: {
      '@type': 'Organization',
      name: exp.company,
      url: exp.companyUrl,
    },
    estimatedSalary: undefined,
  })),
}

export function ExperienceSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(experienceStructuredData),
        }}
      />

      <section
        id="experience"
        className="py-24 md:py-32 bg-secondary/30"
        aria-labelledby="experience-heading"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="inline-block text-sm font-medium text-violet-700 mb-4">
                Experience
              </p>
              <h2
                id="experience-heading"
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Where I've worked
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A timeline of my professional journey, building products that
                matter and growing as a developer.
              </p>
            </motion.div>

            <div className="relative">
              <div
                className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"
                aria-hidden="true"
              />

              <ol className="space-y-12 list-none p-0 m-0">
                {experiences.map((exp, index) => (
                  <motion.li
                    key={`${exp.company}-${exp.title}`}
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div
                      className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-violet-700 border-4 border-background -translate-x-1/2 shadow-soft-md"
                      aria-hidden="true"
                    />

                    <div
                      className={`flex-1 pl-8 md:pl-0 ${
                        index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                      }`}
                    >
                      <article className="group p-6 rounded-2xl bg-card border border-border/50 shadow-soft-sm hover:shadow-soft-md transition-all duration-300">
                        <div
                          className={`flex flex-col ${
                            index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                          }`}
                        >
                          <time
                            dateTime={
                              exp.endDate
                                ? `${exp.startDate}/${exp.endDate}`
                                : exp.startDate
                            }
                            className="text-sm text-violet-700 font-medium mb-1"
                          >
                            {exp.startDate} - {exp.endDate ?? 'Present'}
                          </time>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {exp.company}
                          </p>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4">
                          {exp.description}
                        </p>

                        <ul
                          className={`space-y-2 ${
                            index % 2 === 0 ? 'md:text-right' : ''
                          }`}
                        >
                          {exp.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="text-sm text-foreground flex items-center gap-2"
                              style={{
                                justifyContent:
                                  index % 2 === 0 ? 'flex-end' : 'flex-start',
                              }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-violet-700 shrink-0"
                                aria-hidden="true"
                              />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>

                    <div
                      className="hidden md:block flex-1"
                      aria-hidden="true"
                    />
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
