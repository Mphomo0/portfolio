// Import necessary components and styles
import Footer from '@/components/Footer'
import DefaultNavbar, { Navbar } from '@/components/Navbar'
import './globals.css' // Import global CSS styles
import { Rubik } from 'next/font/google'

// Define a font using the Rubik font family
const rubik = Rubik({ subsets: ['latin'] })

// Metadata for the entire site
export const metadata = {
  title: 'Mpho Moipolai Portfolio', // Title displayed in the browser/tab
  description: 'Generated by create next app', // Site description
}

// Define the RootLayout component that wraps around all other components
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Set the HTML language to English */}
      <body className={rubik.className}> {/* Apply the Rubik font style to the body */}
        {/* Render the default navigation bar */}
        <DefaultNavbar />
        {children} {/* Render the child components that are passed as props */}
        {/* Render the site's footer */}
        <Footer />
      </body>
    </html>
  )
}
