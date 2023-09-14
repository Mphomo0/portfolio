// Import necessary libraries and components
"use client"
import React from 'react'
import Image from 'next/image'

// Define the AboutSection component
const AboutSection = () => {
  return (
    <>
      {/* About Container */}
      <div className="about-container">
        {/* Left Column */}
        <div className="column">
          {/* Section Title */}
          <h2 className="mt-8 mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            My Background
          </h2>
          <p>
            I am an accomplished Full Stack Web Developer with a proven track record of success in the marketing and advertising sector. My expertise spans a wide range of skills and competencies, including exceptional proficiency in customer service, as well as advanced technical skills in JavaScript, React.js, Express.js, Node.js, and Next.js. In addition to my coding skills, I also possess a creative flair, with proficiency in Photoshop, Illustrator, and Adobe XD.
          </p>
          <br />
          <p>
            My qualifications include a certificate in Web Design and Development from ATTI College and training through HyperionDev, where I honed my skills and gained valuable experience in the field of web development. With a strong engineering background, I bring a unique blend of technical expertise and creative problem-solving to every project I undertake.
          </p>
          <br />
          <p>
            I am passionate about crafting exceptional web experiences and am committed to delivering high-quality solutions that meet the unique needs of my clients and users. My dedication to staying updated with the latest industry trends and technologies ensures that I remain at the forefront of web development, consistently delivering outstanding results for my clients.
          </p>
        </div>
        {/* Right Column */}
        <div className="column">
          <Image
            className='py-10'
            src='/images/me.png'
            alt="Web Development"
            width={450}
            height={350}
          />
        </div>
        {/* Inline CSS for styling */}
        <style jsx>
          {`
            /* Style for the container */
            .about-container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-gap: 20px;
            }

            /* Responsive styles for smaller screens */
            @media screen and (max-width: 767px) {
              .about-container {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 20px;
              }
            }

            /* Style for the columns */
            .column {
              padding: 20px;
            }
          `}
        </style>
      </div>
    </>
  )
}

// Export the AboutSection component
export default AboutSection
