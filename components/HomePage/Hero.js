import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            {/* Hero section */}
            <section className="hero-bg dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="my-10 place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 tracking-tight leading-none text-white">Hi there, I'm Mpho Moipolai</h1>
                        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">I am a FullStack Web Developer from Johannesburg, I enjoy building everything from small business websites to rich interactive web apps. If you a business seeking a web presence or an employer looking to hire, you can get in touch with me.</p>
                        <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get in touch
                        </Link>
                        <Link href="/projects" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            View Portfolio
                        </Link>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src="/images/back.png" alt="me" width={400} height={300} />
                    </div>
                </div>
                <style jsx>
        {`
            .hero-bg {
                background-image: url("/images/heroImage.jpg"); 
                background-size: cover;
                background-position: center;
                height: 70vh;
            }
          
        `}
      </style>
            </section>
        </>
    )
}

export default Hero