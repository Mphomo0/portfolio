import React from 'react'
import Image from 'next/image'

const AboutHome = () => {
  return (
    <div className='about-home'>
      <div className='column mx-8'>
        <h2 className="mt-8 mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Me</h2>
        <p>I am an accomplished Full Stack Web Developer with a proven track record of success in the marketing and advertising sector.
          My expertise spans a wide range of skills and competencies, including exceptional proficiency in customer service, as well as
          advanced technical skills in JavaScript, React.js, Express.js, Node.js, and Next.js. In addition to my coding skills, I also
          possess a creative flair, with proficiency in Photoshop, Illustrator, and Adobe XD.</p><br />
        <p>My qualifications include a certificate in Web Design and Development from ATTI College and training through HyperionDev,
          where I honed my skills and gained valuable experience in the field of web development. With a strong engineering background,
          I bring a unique blend of technical expertise and creative problem-solving to every project I undertake.</p>
        <a href="/about" className="mt-6 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          View More
        </a>
      </div>
      <div className='column'>
        <Image
          className='py-10'
          src='/images/image.jpg'
          alt="Web Development"
          width={450}
          height={350}
        />
      </div>
      <style jsx>
        {`
            .about-home {
                display: grid;
                grid-template-columns: 2fr 1fr;
                grid-gap: 20px;
              }
    
              .column {
                padding: 20px;
              }

              @media screen and (max-width: 767px) {
                .about-home {
                  display: grid;
                  grid-template-columns: 1fr;
                  grid-gap: 20px;
                }
              }
          
            `}
      </style>
    </div>
  )
}

export default AboutHome