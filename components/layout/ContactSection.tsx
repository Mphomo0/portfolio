'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Mail, ArrowRight, ChevronDown } from 'lucide-react'
import { sendEmail, type ContactState } from '@/app/actions/contact'

const faqs = [
  {
    question: 'What does a full stack developer do?',
    answer:
      'A Full Stack Developer handles both front-end and back-end development, building complete web applications using technologies like Next.js, React, Node.js, and databases, ensuring performance, scalability, and security.',
  },
  {
    question: 'Why hire a Next.js developer?',
    answer:
      'Hiring a Next.js developer ensures your web application is SEO-friendly, fast, server-side rendered or statically generated, and built using a modern, scalable framework that supports both dynamic and static content.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes! I work with clients globally, delivering high-quality web applications remotely while maintaining clear communication and project management standards.',
  },
]

const sourceOptions = [
  { value: 'friend', label: 'Friend' },
  { value: 'social', label: 'Social Media' },
  { value: 'google', label: 'Google' },
  { value: 'referral', label: 'Referral' },
]

const initialState: ContactState = { success: false }

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, isPending] = useActionState(sendEmail, initialState)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state])

  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: 'mailto:admin@mpho-moipolai.co.za',
    availableLanguage: ['English'],
    areaServed: 'Worldwide',
  }

  const inputClass = (hasError?: boolean) =>
    `w-full p-3 rounded-lg border ${
      hasError ? 'border-red-500' : 'border-border/50'
    } bg-card text-foreground`

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />

      <section
        id='contact'
        className='py-24 md:py-32 bg-secondary/30'
        aria-labelledby='contact-heading'
      >
        <div className='container mx-auto px-6'>
          <motion.div
            className='max-w-3xl mx-auto text-center'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className='inline-block text-sm font-medium text-violet-700 mb-4'>
              Get in Touch
            </p>
            <h2
              id='contact-heading'
              className='text-3xl md:text-4xl font-bold text-foreground mb-4'
            >
              Open to new opportunities
            </h2>
            <p className='text-muted-foreground text-lg mb-10 max-w-xl mx-auto'>
              Whether you have a project in mind, a question about my work, or
              just want to say hello—I'd love to hear from you.
            </p>

            <motion.form
              ref={formRef}
              className='space-y-6 text-left'
              action={formAction}
              aria-label='Contact form'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium text-foreground mb-1'
                  >
                    First Name
                  </label>
                  <input
                    id='firstName'
                    type='text'
                    name='firstName'
                    autoComplete='given-name'
                    className={inputClass()}
                    placeholder='First Name'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium text-foreground mb-1'
                  >
                    Last Name
                  </label>
                  <input
                    id='lastName'
                    type='text'
                    name='lastName'
                    autoComplete='family-name'
                    className={inputClass()}
                    placeholder='Last Name'
                    required
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-foreground mb-1'
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    autoComplete='email'
                    className={inputClass()}
                    placeholder='you@example.com'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-foreground mb-1'
                  >
                    Phone
                  </label>
                  <input
                    id='phone'
                    type='tel'
                    name='phone'
                    autoComplete='tel'
                    className={inputClass()}
                    placeholder='+27 12 345 6789'
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-foreground mb-1'
                >
                  Subject
                </label>
                <input
                  id='subject'
                  type='text'
                  name='subject'
                  className={inputClass()}
                  placeholder='What is this about?'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-foreground mb-1'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  className={inputClass()}
                  placeholder='Your message...'
                  required
                />
              </div>

              <fieldset>
                <legend className='block text-sm font-medium text-foreground mb-2'>
                  How did you find me?
                </legend>
                <div className='flex flex-wrap gap-4'>
                  {sourceOptions.map((option) => (
                    <label
                      key={option.value}
                      htmlFor={`source-${option.value}`}
                      className='flex items-center gap-2 cursor-pointer text-foreground'
                    >
                      <input
                        id={`source-${option.value}`}
                        type='radio'
                        name='source'
                        value={option.value}
                        required
                        className='w-4 h-4 accent-purple-600'
                      />
                      <span className='text-sm'>{option.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {state.error && (
                <p className='text-red-500 text-sm text-center' role='alert'>
                  {state.error}
                </p>
              )}

              <div className='text-center'>
                <Button
                  type='submit'
                  disabled={isPending}
                  aria-busy={isPending}
                  className='flex items-center justify-center gap-2 px-6 py-5 rounded-[var(--radius)] bg-purple-600 text-white'
                >
                  <Mail className='w-5 h-5' aria-hidden='true' />
                  {isPending ? 'Sending...' : 'Send Message'}
                  <ArrowRight className='w-5 h-5' aria-hidden='true' />
                </Button>
              </div>

              {state.success && (
                <p className='text-green-500 mt-4 text-center' role='status'>
                  Thank you! Your message has been sent.
                </p>
              )}
            </motion.form>
          </motion.div>

          <motion.div
            className='max-w-3xl mx-auto mt-20'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              id='faq-heading'
              className='text-2xl md:text-3xl font-bold text-foreground text-center mb-8'
            >
              Frequently Asked Questions
            </h3>

            <div
              role='region'
              aria-labelledby='faq-heading'
              className='space-y-3'
            >
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                const answerId = `faq-answer-${index}`
                const questionId = `faq-question-${index}`

                return (
                  <div
                    key={index}
                    className='border border-border/50 rounded-lg bg-card overflow-hidden'
                  >
                    <h4>
                      <button
                        id={questionId}
                        type='button'
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        className='w-full flex items-center justify-between p-4 text-left text-foreground font-medium hover:bg-secondary/50 transition-colors'
                      >
                        {faq.question}
                        <ChevronDown
                          aria-hidden='true'
                          className={`w-5 h-5 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </h4>
                    <div
                      id={answerId}
                      role='region'
                      aria-labelledby={questionId}
                      hidden={!isOpen}
                    >
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className='px-4 pb-4 text-muted-foreground'
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
