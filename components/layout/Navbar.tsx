'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft-sm'
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-6'>
        <nav className='flex items-center justify-between h-16 lg:h-20'>
          <Link href='/' className='flex items-center gap-2 group'>
            <Image
              src='/images/logo/logo.webp'
              alt='Logo'
              width={200}
              height={150}
              className='object-contain w-full h-full'
              priority
            />
          </Link>

          <div className='hidden lg:flex items-center gap-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-secondary'
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className='hidden lg:block'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Button
                size='lg'
                asChild
                className='bg-violet-500 hover:bg-purple-600 text-white border-0 shadow-md transition-colors'
              >
                <Link href='#contact'>Get in Touch</Link>
              </Button>
            </motion.div>
          </div>

          <button
            className='lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className='w-5 h-5' />
            ) : (
              <Menu className='w-5 h-5' />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className='lg:hidden py-4 border-t border-border/50'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className='flex flex-col gap-2'>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className='pt-2 mt-2 border-t border-border/50'>
                  <Button
                    className='w-full bg-violet-500 hover:bg-purple-600 text-white border-0 transition-colors'
                    asChild
                  >
                    <Link
                      href='#contact'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
