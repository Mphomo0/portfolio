import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mpho Moipolai',
  description: 'Privacy policy for mpho-moipolai.co.za. Learn how we collect, use, and protect your personal information in compliance with POPIA and GDPR.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy policy for mpho-moipolai.co.za website.',
    url: 'https://www.mpho-moipolai.co.za/privacy',
    publisher: {
      '@id': 'https://www.mpho-moipolai.co.za/#organization',
    },
  }

  return (
    <>
      <Script
        id="privacy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      <article className="container mx-auto px-6 py-32 max-w-4xl">
        <nav className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: March 28, 2026
          </p>
        </header>

        {/* Summary for AI Citability */}
        <section className="mb-12 p-6 bg-violet-500/10 rounded-2xl border border-violet-500/20">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-violet-500" />
            Summary
          </h2>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Mpho Moipolai (mpho-moipolai.co.za)</strong> collects minimal personal information through contact forms. We use your information solely to respond to inquiries and provide services. We do not sell, rent, or share your data with third parties. This site complies with the POPIA (South Africa) and GDPR (EU) regulations.
          </p>
        </section>

        {/* Key Facts for AI */}
        <section className="mb-12">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
              <Lock className="w-5 h-5 text-violet-500 mt-1" />
              <div>
                <p className="font-semibold">Data Collection</p>
                <p className="text-sm text-muted-foreground">Name, email, phone (optional), project details via contact form only</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
              <Eye className="w-5 h-5 text-violet-500 mt-1" />
              <div>
                <p className="font-semibold">Data Usage</p>
                <p className="text-sm text-muted-foreground">Only to respond to inquiries and provide services</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
              <Database className="w-5 h-5 text-violet-500 mt-1" />
              <div>
                <p className="font-semibold">Data Storage</p>
                <p className="text-sm text-muted-foreground">Secure servers, encrypted transmission, retained only as needed</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
              <UserCheck className="w-5 h-5 text-violet-500 mt-1" />
              <div>
                <p className="font-semibold">Your Rights</p>
                <p className="text-sm text-muted-foreground">Access, correct, delete your data at any time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="mb-12 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect information you provide directly through our contact form, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Project requirements or message content</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            Your information is used exclusively to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Respond to your inquiries and provide quotes</li>
            <li>Deliver services you request</li>
            <li>Communicate about project progress (if you become a client)</li>
            <li>Send important updates about our services (with your consent)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
          <p className="text-muted-foreground mb-6">
            We do not sell, rent, or share your personal information with third parties. Your data is never used for advertising or marketing purposes by external parties. We may share information with trusted service providers (such as hosting providers) who assist in operating our website, but they are bound by confidentiality obligations.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Cookies and Analytics</h2>
          <p className="text-muted-foreground mb-6">
            This website uses Google Analytics to understand how visitors interact with our content. Google Analytics collects anonymous data such as pages visited, time on site, and referral sources. You can opt out of Google Analytics using browser extensions. We use essential cookies for website functionality but do not use tracking cookies for advertising.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
          <p className="text-muted-foreground mb-6">
            We implement appropriate security measures including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>HTTPS encryption for all data transmission</li>
            <li>Secure server infrastructure</li>
            <li>Regular security updates and monitoring</li>
            <li>Limited access to personal data</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
          <p className="text-muted-foreground mb-6">
            We retain your information only for as long as necessary to fulfill the purposes outlined in this policy. Contact form submissions are typically retained for 12 months. Client project data is retained for the duration of the business relationship plus 5 years for legal compliance.
          </p>

          <h2 className="text-2xl font-bold mb-4">7. Your Rights (POPIA and GDPR)</h2>
          <p className="text-muted-foreground mb-4">
            Under the Protection of Personal Information Act (POPIA) in South Africa and the General Data Protection Regulation (GDPR) in the EU, you have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
          <p className="text-muted-foreground mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any linked websites.
          </p>

          <h2 className="text-2xl font-bold mb-4">9. Children&apos;s Privacy</h2>
          <p className="text-muted-foreground mb-6">
            Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
          <p className="text-muted-foreground mb-6">
            We may update this privacy policy periodically. The &quot;Last updated&quot; date at the top indicates the most recent revision. We encourage you to review this policy regularly.
          </p>

          <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            For questions about this privacy policy or to exercise your rights, contact:
          </p>
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl inline-block">
            <Mail className="w-5 h-5 text-violet-500 mt-1" />
            <div>
              <p className="font-semibold">Mpho Moipolai</p>
              <p className="text-sm text-muted-foreground">Email: contact@mpho-moipolai.co.za</p>
              <p className="text-sm text-muted-foreground">Location: Midrand, Gauteng, South Africa</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center mt-12 pt-8 border-t">
          <Link
            href="/terms"
            className="text-violet-500 hover:underline mr-6"
          >
            Terms of Service
          </Link>
          <Link
            href="/"
            className="text-violet-500 hover:underline"
          >
            Back to Home
          </Link>
        </section>
      </article>
    </>
  )
}
