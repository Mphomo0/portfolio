'use client'

import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

const PORTFOLIO_CONFIG = {
  name: 'Mpho Moipolai',
  title: 'Full Stack Web Developer',
  location: 'Johannesburg, Gauteng, South Africa',
  social: {
    github: 'https://github.com/Mphomo0',
    linkedin: 'https://www.linkedin.com/in/mpho-moipolai-26b06286',
    facebook: 'https://www.facebook.com/mbmoipolai',
    instagram: 'https://www.instagram.com/mphomoipolai',
  },
} as const

// ===========================
// Custom Social Icons
// ===========================
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

// ===========================
// Motion Variants
// ===========================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

// ===========================
// Social Icons Array
// ===========================
const socialIcons = [
  { name: 'GitHub', href: PORTFOLIO_CONFIG.social.github, icon: GitHubIcon },
  {
    name: 'LinkedIn',
    href: PORTFOLIO_CONFIG.social.linkedin,
    icon: LinkedInIcon,
  },
  {
    name: 'Facebook',
    href: PORTFOLIO_CONFIG.social.facebook,
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    href: PORTFOLIO_CONFIG.social.instagram,
    icon: InstagramIcon,
  },
]

// ===========================
// Hero Section
// ===========================
export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction and hero section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-1/4 -left-40 w-125 h-125 rounded-full blur-3xl brand-gradient opacity-20"
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-125 h-125 rounded-full blur-3xl brand-gradient opacity-10"
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-pink-900 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for new opportunities
            </span>
          </div>
          {/* Main H1 */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Mpho Moipolai
            <motion.span
              className="block brand-text-gradient"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Full Stack Web Developer in Johannesburg, South Africa
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            I&lsquo;m {PORTFOLIO_CONFIG.name}, a Full Stack Web Developer based
            in {PORTFOLIO_CONFIG.location}. I help startups and growing
            businesses build fast, scalable, and SEO-optimized web applications
            using Next.js, React, and Node.js.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full"
            variants={itemVariants}
          >
            <Button
              size="lg"
              asChild
              className="px-8 py-6 w-full sm:w-auto bg-violet-500 hover:bg-purple-600 text-white border-0 transition-colors"
            >
              <Link
                href="#projects"
                className="gap-2 flex items-center justify-center"
              >
                View My Work <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-8 py-6 w-full sm:w-auto"
            >
              <a
                href="/Mpho_Moipolai_2026.pdf"
                download="Mpho_Moipolai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 flex items-center justify-center"
              >
                <Download className="w-5 h-5" /> Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors duration-300"
                aria-label={`Visit my ${social.name} profile`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                whileHover={{
                  y: -4,
                  scale: 1.1,
                  transition: { type: 'spring', stiffness: 400 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            role="button"
            tabIndex={0}
            aria-label="Scroll to explore more content"
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <span className="text-xs text-muted-foreground">
              Scroll to explore
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 rounded-full bg-muted-foreground"
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
