import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import {
  ArrowLeft,
  Code2,
  Zap,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Mpho Moipolai | Full Stack Web Developer & SEO Specialist',
  description:
    'Learn about Mpho Moipolai, a Full Stack Web Developer and SEO Specialist based in Midrand, South Africa. 13+ years of experience building production-grade web applications with Next.js, React, and modern web technologies.',
  openGraph: {
    title: 'About Mpho Moipolai | Full Stack Web Developer',
    description:
      'Full Stack Web Developer and SEO Specialist based in Midrand, South Africa. 13+ years of experience building production-grade web applications.',
    type: 'profile',
  },
}

const timeline = [
  {
    year: '2011',
    title: 'Started Web Development Career',
    description:
      'Began journey as a web developer, learning HTML, CSS, JavaScript, and PHP fundamentals.',
  },
  {
    year: '2014',
    title: 'Full Stack Development Focus',
    description:
      'Transitioned to full stack development with HTML, PHP & MySQL, and Wordpress.',
  },
  {
    year: '2017',
    title: 'Graphic Design & Digital Marketing',
    description:
      'Developed skills in graphic design and digital marketing, enhancing the visual appeal and online presence of web applications.',
  },
  {
    year: '2022',
    title: 'Next.js Specialization',
    description:
      'Adopted Next.js as primary framework, leveraging SSR, SSG, and App Router for optimal performance.',
  },
  {
    year: '2023',
    title: 'AI-Optimized Development',
    description:
      'Pioneered GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) for AI search visibility.',
  },
  {
    year: '2026',
    title: 'Continued Growth',
    description:
      'Building high-performance, AI-optimized web applications for clients across South Africa and internationally.',
  },
]

const skills = [
  {
    category: 'Frontend',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'JavaScript',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Prisma',
      'REST APIs',
    ],
  },
  {
    category: 'SEO & Marketing',
    items: [
      'Technical SEO',
      'Local SEO',
      'GEO/AEO',
      'Google Analytics',
      'Search Console',
      'Core Web Vitals',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Azure', 'AWS', 'Figma', 'VS Code'],
  },
]

const certifications = [
  {
    name: 'Graphic Design, Multimedia & Web Programming',
    issuer: 'Atti College',
    year: '2012',
  },
  {
    name: 'Edesign, Multimedia & Solution Development',
    issuer: 'Att',
    year: '2013',
  },
  {
    name: 'FullStack Web Development',
    issuer: 'HyperionDev',
    year: '2023',
  },
]

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://www.mpho-moipolai.co.za/about#webpage',
        url: 'https://www.mpho-moipolai.co.za/about',
        name: 'About Mpho Moipolai',
        description:
          'Full Stack Web Developer and SEO Specialist based in Midrand, South Africa with 13+ years of experience.',
        mainEntity: {
          '@id': 'https://www.mpho-moipolai.co.za/#person',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://www.mpho-moipolai.co.za/#person',
        name: 'Mpho Moipolai',
        jobTitle: 'Full Stack Web Developer & SEO Specialist',
        description:
          'Mpho Moipolai is a Full Stack Web Developer and SEO Specialist based in Midrand, South Africa, with 13+ years of experience building production-grade web applications using Next.js, React, and modern web technologies.',
        url: 'https://www.mpho-moipolai.co.za',
        image: 'https://www.mpho-moipolai.co.za/images/og-image.jpg',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Midrand',
          addressRegion: 'Gauteng',
          addressCountry: 'ZA',
        },
        knowsAbout: [
          'Web Design',
          'Web Development',
          'Next.js',
          'React',
          'SEO',
          'Full Stack Development',
          'TypeScript',
          'Node.js',
          'PostgreSQL',
        ],
        sameAs: [
          'https://github.com/Mphomo0',
          'https://www.linkedin.com/in/mpho-moipolai-26b06286',
          'https://www.facebook.com/mbmoipolai',
          'https://www.instagram.com/mphomoipolai',
        ],
      },
    ],
  }

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <article className="container mx-auto px-6 py-32 max-w-4xl">
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </nav>

        {/* Hero Section - Definition Pattern */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            About Mpho Moipolai
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">
              Mpho Moipolai is a Full Stack Web Developer and SEO Specialist
              based in Midrand, South Africa
            </strong>
            , with 13+ years of experience building production-grade web
            applications using Next.js, React, and modern web technologies.
          </p>
          <p className="text-lg text-muted-foreground">
            I specialize in creating high-performance, SEO-optimized websites
            that rank higher on Google and convert visitors into customers. My
            expertise spans the entire development stack, from database design
            to pixel-perfect user interfaces.
          </p>
        </header>

        {/* Quick Facts - For AI Citability */}
        <section
          className="mb-16 p-6 bg-muted/30 rounded-2xl border"
          aria-labelledby="quick-facts"
        >
          <h2
            id="quick-facts"
            className="text-2xl font-bold mb-6 flex items-center gap-2"
          >
            <Award className="w-6 h-6 text-violet-500" />
            Quick Facts
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-pink-500 mt-1" />
              <div>
                <p className="font-semibold">13+ Years Experience</p>
                <p className="text-sm text-muted-foreground">
                  Web development and design
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-pink-500 mt-1" />
              <div>
                <p className="font-semibold">Midrand, South Africa</p>
                <p className="text-sm text-muted-foreground">
                  Serving Gauteng and beyond
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Code2 className="w-5 h-5 text-pink-500 mt-1" />
              <div>
                <p className="font-semibold">50+ Projects Delivered</p>
                <p className="text-sm text-muted-foreground">
                  For startups and businesses
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-pink-500 mt-1" />
              <div>
                <p className="font-semibold">Performance Focused</p>
                <p className="text-sm text-muted-foreground">
                  Core Web Vitals optimized
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="mb-16" aria-labelledby="journey-heading">
          <h2
            id="journey-heading"
            className="text-2xl font-bold mb-6 flex items-center gap-2"
          >
            <Calendar className="w-6 h-6 text-violet-500" />
            Professional Journey
          </h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-violet-500 bg-violet-500/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16" aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="text-2xl font-bold mb-6 flex items-center gap-2"
          >
            <Sparkles className="w-6 h-6 text-violet-500" />
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-4 bg-muted/30 rounded-xl border"
              >
                <h3 className="font-semibold mb-3 text-violet-700">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-violet-600 text-white rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16" aria-labelledby="certifications-heading">
          <h2
            id="certifications-heading"
            className="text-2xl font-bold mb-6 flex items-center gap-2"
          >
            <GraduationCap className="w-6 h-6 text-violet-500" />
            Certifications
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-4 bg-muted/30 rounded-xl border text-center"
              >
                <p className="font-semibold mb-1">{cert.name}</p>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} - {cert.year}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* E-E-A-T Section */}
        <section
          className="mb-16 p-6 bg-linear-to-r from-violet-500/10 to-pink-500/10 rounded-2xl border"
          aria-labelledby="expertise-heading"
        >
          <h2 id="expertise-heading" className="text-2xl font-bold mb-4">
            Why Work With Me?
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Experience:</strong> With over
              13 years in web development, I&apos;ve worked on projects ranging
              from simple landing pages to complex e-commerce platforms. I
              understand the challenges businesses face and deliver solutions
              that work.
            </p>
            <p>
              <strong className="text-foreground">Expertise:</strong> I
              specialize in Next.js and SEO, two critical areas for modern web
              success. My technical knowledge ensures your website is fast,
              secure, and search-engine friendly.
            </p>
            <p>
              <strong className="text-foreground">Authoritativeness:</strong> I
              stay current with industry best practices and emerging
              technologies. My portfolio includes successful projects for
              clients across South Africa.
            </p>
            <p>
              <strong className="text-foreground">Trustworthiness:</strong> I
              believe in transparent communication, fair pricing, and delivering
              on promises. My clients receive regular updates and support
              throughout the project lifecycle.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-lg mb-6 text-muted-foreground">
            Ready to start your project?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-500 hover:bg-purple-600 text-white rounded-xl font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </article>
    </>
  )
}
