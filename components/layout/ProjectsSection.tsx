'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight } from 'lucide-react'

const GitHubIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
    <path d='M9 18c-4.51 2-5-2-7-2' />
  </svg>
)

type Project = {
  title: string
  description: string
  features: string[]
  tech: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  imageUrl: string
}

const projects: Project[] = [
  {
    title: 'Sozim Trading & Consultancy',
    description:
      'An education and professional development organisation offering career‑focused courses, expert training, and recognised certificates to help students advance and achieve success.',
    features: [
      'Industry‑relevant courses',
      'Expert instructors',
      'Recognised certificates',
      'Career growth programs',
    ],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'MongoDB', 'Tailwind'],
    liveUrl: 'https://www.sozim.co.za/',
    githubUrl: 'https://github.com/Mphomo0/sozim',
    featured: true,
    imageUrl: '/images/projects/sozim.webp',
  },
  {
    title: 'Nostalgic Studio',
    description:
      'Check out the live site at https://www.nostalgic-studio.co.za. Nostalgic Studio is a digital design agency based in South Africa that helps startups and growing businesses design high-converting websites, strong brand identities, and user-focused digital products.',
    features: [
      'Responsive design',
      'SEO optimized',
      'Fast performance',
      'Modern UI with Tailwind',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    liveUrl: 'https://www.nostalgic-studio.co.za',
    githubUrl: 'https://github.com/Mphomo0/nostalgic-studio',
    featured: true,
    imageUrl: '/images/projects/nostalgic-studio.webp',
  },
  {
    title: 'Jiyology Building & Construction Plumbing',
    description:
      'Jiyology Building & Construction Plumbing is a South African business providing professional building, construction, and plumbing services with a focus on quality and reliability.',
    features: [
      'Responsive design',
      'SEO optimized',
      'Fast performance',
      'Modern UI with Tailwind',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    liveUrl: 'https://www.jiyology.co.za/',
    githubUrl:
      'https://github.com/Mphomo0/jiyology-building-construction-plumbing',
    featured: false,
    imageUrl: '/images/projects/jiyology.webp',
  },
  {
    title: 'Didee Holdings',
    description:
      'Didee Holdings is a South African company delivering professional business solutions and services, presented through a modern, responsive, and performance-optimized website.',
    features: [
      'Responsive design',
      'SEO optimized',
      'Fast performance',
      'Modern UI with Tailwind',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    liveUrl: 'https://www.dideeholdings.co.za',
    githubUrl: 'https://github.com/Mphomo0/dideeholdings',
    featured: false,
    imageUrl: '/images/projects/didee.webp',
  },
]

export function ProjectsSection() {
  return (
    <section
      id='projects'
      aria-labelledby='projects-heading'
      className='py-24 md:py-32 bg-background'
    >
      <div className='container mx-auto px-6'>
        {/* Header */}
        <header className='text-center mb-16'>
          <span className='inline-block text-sm font-medium text-violet-700 mb-4'>
            Featured Work
          </span>
          <h2
            id='projects-heading'
            className='text-3xl md:text-4xl font-bold text-foreground mb-4'
          >
            Projects I&lsquo;ve Built
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            A selection of projects that showcase expertise in building
            production‑ready applications with modern technologies.
          </p>
        </header>

        {/* Projects Grid */}
        <div className='grid lg:grid-cols-2 gap-8'>
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`group relative rounded-2xl bg-card-gradient border border-border/50 overflow-hidden shadow-soft-sm hover:shadow-soft-lg transition-all duration-500 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Image / Visual */}
              <div className='h-56 relative overflow-hidden'>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
                />
                {/* Subtle overlay for polish */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none' />
                {project.featured && (
                  <span className='absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full z-10'>
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-violet-700 mb-2 group-hover:text-pink-600 transition-colors'>
                  {project.title}
                </h3>

                <p className='text-muted-foreground text-sm mb-4'>
                  {project.description}
                </p>

                {/* Features */}
                <ul className='flex flex-wrap gap-2 mb-4 list-disc list-inside'>
                  {project.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className='px-2 py-1 text-xs text-muted-foreground bg-secondary rounded-md'
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='px-2 py-1 text-xs font-medium text-accent bg-violet-600 rounded-md'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className='flex items-center gap-3'>
                  <Button variant='outline' size='sm' asChild>
                    <Link
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`Visit live demo for ${project.title}`}
                    >
                      <ExternalLink className='w-4 h-4' />
                      Live Demo
                    </Link>
                  </Button>

                  <Button variant='ghost' size='sm' asChild>
                    <Link
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <GitHubIcon />
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <div className='text-center mt-12'>
          <Button variant='outline' size='lg' asChild>
            <Link
              href='https://github.com/mphomo0?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View all projects on GitHub'
            >
              View All Projects on GitHub
              <ArrowRight className='w-4 h-4 ml-2' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
