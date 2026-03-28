import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, Briefcase, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Mpho Moipolai',
  description: 'Terms of service for mpho-moipolai.co.za. Read the terms and conditions for using our web design and SEO services in South Africa.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service',
    description: 'Terms of service for mpho-moipolai.co.za website.',
    url: 'https://www.mpho-moipolai.co.za/terms',
    publisher: {
      '@id': 'https://www.mpho-moipolai.co.za/#organization',
    },
  }

  return (
    <>
      <Script
        id="terms-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />

      <article className="container mx-auto px-6 py-32 max-w-4xl">
        <nav className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: March 28, 2026
          </p>
        </header>

        {/* Summary for AI Citability */}
        <section className="mb-12 p-6 bg-violet-500/10 rounded-2xl border border-violet-500/20">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-violet-500" />
            Summary
          </h2>
          <p className="text-muted-foreground">
            <strong className="text-foreground">By using mpho-moipolai.co.za</strong>, you agree to use the website lawfully and not interfere with its operation. Services provided by Mpho Moipolai are subject to individual project contracts. All work is copyrighted, and payment terms are outlined in project proposals. South African law governs these terms.
          </p>
        </section>

        {/* Quick Reference */}
        <section className="mb-12">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
              <Scale className="w-5 h-5 text-violet-500 mt-1" />
              <div>
                <p className="font-semibold">Governing Law</p>
                <p className="text-sm text-muted-foreground">South African law applies to all disputes</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
              <Briefcase className="w-5 h-5 text-violet-500 mt-1" />
              <div>
                <p className="font-semibold">Service Contracts</p>
                <p className="text-sm text-muted-foreground">Individual agreements per project</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
              <div>
                <p className="font-semibold">You May</p>
                <p className="text-sm text-muted-foreground">View, share content with attribution, contact for services</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
              <XCircle className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <p className="font-semibold">You May Not</p>
                <p className="text-sm text-muted-foreground">Copy, reproduce, or distribute without permission</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Terms */}
        <section className="mb-12 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-6">
            By accessing and using mpho-moipolai.co.za (&quot;the Website&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website. These terms apply to all visitors, users, and clients of the Website.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
          <p className="text-muted-foreground mb-4">
            Mpho Moipolai provides the following services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Web design and development</li>
            <li>Search engine optimization (SEO)</li>
            <li>E-commerce website development</li>
            <li>UI/UX design</li>
            <li>Branding and graphic design</li>
            <li>Social media marketing and advertising</li>
            <li>Web hosting and maintenance</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Specific service terms, deliverables, timelines, and pricing are outlined in individual project proposals and contracts agreed upon before project commencement.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
          <p className="text-muted-foreground mb-6">
            All content on this Website, including text, graphics, logos, images, and software, is the property of Mpho Moipolai or respective clients and is protected by South African and international copyright laws. You may not reproduce, distribute, or create derivative works without express written permission.
          </p>
          <p className="text-muted-foreground mb-6">
            For client projects, intellectual property rights are transferred to the client upon full payment as outlined in individual project contracts. Mpho Moipolai retains the right to use completed work in portfolio showcases unless otherwise agreed.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
          <p className="text-muted-foreground mb-4">
            General payment terms include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>A deposit (typically 50%) is required before project commencement</li>
            <li>Remaining balance is due upon project completion or as outlined in the contract</li>
            <li>Payment methods include EFT, credit card, or other agreed methods</li>
            <li>Late payments may incur interest and result in project delays</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Specific payment schedules are detailed in individual project proposals.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Project Deliverables and Revisions</h2>
          <p className="text-muted-foreground mb-4">
            Standard project terms include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Project scope and deliverables are defined in the project proposal</li>
            <li>Two rounds of revisions are typically included in standard projects</li>
            <li>Additional revisions beyond the agreed scope are charged at the hourly rate</li>
            <li>Timeline estimates are provided in good faith but may vary based on complexity and client responsiveness</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">6. Client Responsibilities</h2>
          <p className="text-muted-foreground mb-4">
            Clients agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Provide necessary content, materials, and feedback in a timely manner</li>
            <li>Review and approve deliverables within agreed timeframes</li>
            <li>Ensure all provided content does not infringe on third-party rights</li>
            <li>Make timely payments as agreed</li>
            <li>Provide access to necessary accounts and platforms</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-6">
            Mpho Moipolai shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of services or the Website. Total liability is limited to the amount paid for the specific service in question. This limitation applies to the fullest extent permitted by law.
          </p>

          <h2 className="text-2xl font-bold mb-4">8. Warranty Disclaimer</h2>
          <p className="text-muted-foreground mb-6">
            While we strive to deliver high-quality work, we cannot guarantee specific outcomes such as search engine rankings, traffic increases, or revenue growth. SEO results depend on numerous factors beyond our control. Websites are built to industry standards, but we cannot guarantee compatibility with all devices or future browser versions.
          </p>

          <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
          <p className="text-muted-foreground mb-4">
            Either party may terminate a project with written notice:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Work completed up to termination date is billable</li>
            <li>Deposit is non-refundable for work already commenced</li>
            <li>Completed deliverables are provided upon final payment</li>
            <li>Ongoing services (hosting, maintenance) require 30 days notice</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">10. Third-Party Services</h2>
          <p className="text-muted-foreground mb-6">
            Projects may involve third-party services (hosting, domains, plugins, APIs). Mpho Moipolai is not responsible for third-party service disruptions, policy changes, or fee increases. Clients are responsible for maintaining their own accounts with third-party providers unless otherwise agreed.
          </p>

          <h2 className="text-2xl font-bold mb-4">11. Confidentiality</h2>
          <p className="text-muted-foreground mb-6">
            Both parties agree to keep confidential any proprietary information shared during the project. This includes business strategies, customer data, and technical information. Confidentiality obligations survive the termination of the business relationship.
          </p>

          <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>
          <p className="text-muted-foreground mb-6">
            In the event of a dispute, parties agree to first attempt resolution through good-faith negotiation. If negotiation fails, disputes will be resolved through mediation or arbitration in South Africa, in accordance with South African law.
          </p>

          <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
          <p className="text-muted-foreground mb-6">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Website. Continued use of the Website constitutes acceptance of modified terms.
          </p>

          <h2 className="text-2xl font-bold mb-4">14. Governing Law</h2>
          <p className="text-muted-foreground mb-6">
            These Terms of Service are governed by the laws of the Republic of South Africa. Any disputes arising from these terms will be resolved in the South African courts.
          </p>

          <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
          <p className="text-muted-foreground mb-6">
            For questions about these Terms of Service, contact:
          </p>
          <div className="p-4 bg-muted/30 rounded-xl inline-block">
            <p className="font-semibold">Mpho Moipolai</p>
            <p className="text-sm text-muted-foreground">Email: contact@mpho-moipolai.co.za</p>
            <p className="text-sm text-muted-foreground">Location: Midrand, Gauteng, South Africa</p>
          </div>
        </section>

        {/* Warning Box */}
        <section className="mb-12 p-6 bg-amber-500/10 rounded-2xl border border-amber-500/20">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Important Notice
          </h2>
          <p className="text-muted-foreground">
            These terms represent a general framework. Specific project terms are outlined in individual contracts and proposals. Always read your project agreement carefully before commencing work.
          </p>
        </section>

        {/* Footer */}
        <section className="text-center mt-12 pt-8 border-t">
          <Link
            href="/privacy"
            className="text-violet-500 hover:underline mr-6"
          >
            Privacy Policy
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
