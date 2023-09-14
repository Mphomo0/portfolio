'use client';

import { Navbar } from 'flowbite-react';
import Image from 'next/image'

// Define the DefaultNavbar functional component
export default function DefaultNavbar() {
  return (
    // Start of the Navbar component.
    <Navbar>
      <Navbar.Brand href="/">
        <Image
              src="/images/logo.png"
              alt="Logo"
              width={350}
              height={15}
              priority
            />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/about">About Me</Navbar.Link>
        <Navbar.Link href="/projects">Projects</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


