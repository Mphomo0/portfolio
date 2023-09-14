import Link from 'next/link';
import React from 'react';

// Define the CallToAction functional component.
const CallToAction = () => {
  return (
    <div className="cta-bg">
      {/* Start of the background section with a background image */}
      <section className="mx-auto container w-full py-36">
        <div className="flex flex-col justify-center items-center">
          {/* Title */}
          <div className="md:text-5xl text-4xl font-black text-center text-white dark:text-white leading-snug lg:w-3/4">
            <h2>Do you want to hire me?</h2>
          </div>
          {/* Button */}
          <div className="flex justify-center items-center mt-16">
            <Link href="/contact">
              {/* CTA button */}
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                Let&#39;s Talk
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Inline styles for the background */}
      <style jsx>
        {`
          .cta-bg {
            background-image: url("/images/CTA.jpg"); 
            background-size: cover; // Cover the entire container
            background-position: center; // Center the background image
          }
        `}
      </style>
    </div>
  );
};

export default CallToAction; 
