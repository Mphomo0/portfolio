import { AboutSection } from '@/components/layout/AboutSection'
import { ExperienceSection } from '@/components/layout/Experiencesection'
import HeroSection from '@/components/layout/HeroSection'
import PhilosophySection from '@/components/layout/PhilosophySection'
import { ProjectsSection } from '@/components/layout/ProjectsSection'
import TechStackSection from '@/components/layout/TechStackSection'
import ContactSection from '@/components/layout/ContactSection'
import { FAQSection } from '@/components/layout/FAQSection'
import { TestimonialsSection } from '@/components/layout/TestimonialsSection'

// Page-specific schema — server-rendered so all crawlers see it in initial HTML
const homePageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.mpho-moipolai.co.za',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is Next.js the best choice for web design in Midrand?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Next.js offers superior SEO performance, lightning-fast load times, and excellent scalability. For Midrand businesses, this means ranking higher on Google and providing a better user experience for local customers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a professional website in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard professional website usually takes 2-4 weeks from discovery to launch. Complex ecommerce or custom applications may take 6-10 weeks depending on requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer SEO services for businesses in Midrand?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, I provide comprehensive SEO services including local SEO for Midrand businesses, technical SEO audits, and content optimization to ensure your brand reaches its target audience in South Africa.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is AEO and why does my website need it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AEO stands for Answer Engine Optimization. It ensures your content is structured so AI assistants like ChatGPT, Claude, and Gemini can easily extract and provide answers about your business to users.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide website maintenance in Midrand?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, I offer ongoing website maintenance services in Midrand to ensure your site remains secure, up-to-date, and optimized for peak performance.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does a full stack developer do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Full Stack Developer handles both front-end and back-end development, building complete web applications using technologies like Next.js, React, Node.js, and databases, ensuring performance, scalability, and security.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why hire a Next.js developer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hiring a Next.js developer ensures your web application is SEO-friendly, fast, server-side rendered or statically generated, and built using a modern, scalable framework that supports both dynamic and static content.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a website cost in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Website costs in South Africa range from R3,000-R15,000+ depending on complexity. Basic business websites start at R3,000, e-commerce sites range from R8,000-R30,000, and custom Next.js websites start at R8,000.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is SEO and why is it important?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO (Search Engine Optimization) improves website visibility in search results. It takes 3-6 months to see results. Ranking on the first page of Google can increase organic traffic by 300% or more.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer local SEO in Midrand?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, local SEO includes Google Business Profile optimization, local keyword targeting for Midrand and Gauteng, citation building, and review management to dominate local search results.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best web hosting in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality web hosting in South Africa includes 99.9% uptime, free SSL, daily backups, CDN integration, and 24/7 support. Costs range from R99-R5,000/month depending on server type.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with international clients?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, I work with clients globally, delivering high-quality web applications remotely while maintaining clear communication and project management standards.',
          },
        },
      ],
    },
    // Portfolio projects — CreativeWork is the correct type for websites
    {
      '@type': 'CreativeWork',
      name: 'Sozim Trading & Consultancy',
      url: 'https://www.sozim.co.za/',
      description:
        'Education and professional development organisation offering career-focused courses, expert training, and recognised certificates.',
      creator: { '@id': 'https://www.mpho-moipolai.co.za/#person' },
      keywords: 'Next.js, TypeScript, Prisma, MongoDB, Tailwind CSS',
    },
    {
      '@type': 'CreativeWork',
      name: 'Nostalgic Studio',
      url: 'https://www.nostalgic-studio.co.za',
      description:
        'Digital design agency helping startups and growing businesses design high-converting websites, strong brand identities, and user-focused digital products.',
      creator: { '@id': 'https://www.mpho-moipolai.co.za/#person' },
      keywords: 'Next.js, TypeScript, Tailwind CSS',
    },
    {
      '@type': 'CreativeWork',
      name: 'Jiyology Building & Construction Plumbing',
      url: 'https://www.jiyology.co.za/',
      description:
        'South African business providing professional building, construction, and plumbing services with a focus on quality and reliability.',
      creator: { '@id': 'https://www.mpho-moipolai.co.za/#person' },
      keywords: 'Next.js, TypeScript, Tailwind CSS',
    },
    {
      '@type': 'CreativeWork',
      name: 'Didee Holdings',
      url: 'https://www.dideeholdings.co.za',
      description:
        'South African company delivering professional business solutions and services through a modern, responsive, and performance-optimized website.',
      creator: { '@id': 'https://www.mpho-moipolai.co.za/#person' },
      keywords: 'Next.js, TypeScript, Tailwind CSS',
    },
    // Aggregate rating from client testimonials
    {
      '@type': 'Organization',
      '@id': 'https://www.mpho-moipolai.co.za/#organization',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '3',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Thabo Molefe' },
          reviewBody:
            'Mpho delivered our education platform on time and exceeded expectations. The website performance and SEO results speak for themselves - we now rank on the first page for our key terms.',
          itemReviewed: {
            '@type': 'Service',
            name: 'Ecommerce Website Development',
            provider: { '@id': 'https://www.mpho-moipolai.co.za/#organization' },
          },
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Sarah van der Berg' },
          reviewBody:
            'Working with Mpho was seamless. His Next.js expertise combined with SEO knowledge helped our agency website achieve exceptional Core Web Vitals scores and organic visibility.',
          itemReviewed: {
            '@type': 'Service',
            name: 'Next.js Website Design',
            provider: { '@id': 'https://www.mpho-moipolai.co.za/#organization' },
          },
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Lucky Nkosi' },
          reviewBody:
            'Our new website has generated more leads in 3 months than our previous site did in a year. The local SEO optimization for Midrand and Gauteng was exactly what we needed.',
          itemReviewed: {
            '@type': 'Service',
            name: 'Web Design & Local SEO',
            provider: { '@id': 'https://www.mpho-moipolai.co.za/#organization' },
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Choose a Web Design Agency in South Africa',
      description:
        'A step-by-step guide to selecting the right web design agency for your business in South Africa.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Define Your Requirements',
          text: 'List your business goals, target audience, required features, and budget before contacting agencies.',
        },
        {
          '@type': 'HowToStep',
          name: 'Check Portfolio and Reviews',
          text: 'Review the agency portfolio for quality and relevance. Check Google reviews and testimonials from past clients.',
        },
        {
          '@type': 'HowToStep',
          name: 'Evaluate Technical Expertise',
          text: 'Ensure they use modern technologies like Next.js, React, and implement SEO best practices for better Google rankings.',
        },
        {
          '@type': 'HowToStep',
          name: 'Request Detailed Quote',
          text: 'Get a comprehensive quote including timeline, costs, hosting, maintenance, and post-launch support.',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Improve Your Website SEO',
      description:
        'Essential steps to improve your website ranking on Google in South Africa.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Conduct Keyword Research',
          text: 'Identify relevant keywords for your business, including local terms like "web design Midrand" or "SEO services South Africa".',
        },
        {
          '@type': 'HowToStep',
          name: 'Optimize On-Page Elements',
          text: 'Ensure proper title tags, meta descriptions, header tags, and image alt text for all pages.',
        },
        {
          '@type': 'HowToStep',
          name: 'Improve Page Speed',
          text: 'Optimize images, enable compression, use CDN, and ensure fast hosting. Aim for under 3 second load time.',
        },
        {
          '@type': 'HowToStep',
          name: 'Build Quality Backlinks',
          text: 'Earn links from reputable South African websites and directories to improve domain authority.',
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ExperienceSection />
      <PhilosophySection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
