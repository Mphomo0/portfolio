'use client';

// Import necessary components from libraries.
import { Card, Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

// Define the HomeProjects functional component
const HomeProjects = () => {
  return (
    <section className='projects-section'>
    <div className="mx-8">
    <h2 className="py-8 text-4xl tracking-tight font-extrabold text-white dark:text-white">Projects</h2>
        </div>
        <div className='card-grid mx-8 py-8'>
          <div>
            <Card className='p-0'>
            <Image width={900} height={500} src="/images/portfolio/GymFitness.PNG"/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Gym Fitness
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Gym Fitness is a membership-based gym for anyone who wants to join.
              </p>
              <Link href="https://fitnessgym-mpho.netlify.app"> 
                <Button>Visit</Button>
            </Link>
            </Card>
          </div>
          <div>
          <Card className='p-0'>
            <Image width={900} height={500} src="/images/portfolio/Hangman.PNG"/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hangman Game
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              A classic word-guessing game where the player tries to guess words
              </p>
              <Link href="https://hangmanbympho.netlify.app"> 
                <Button>Visit</Button>
            </Link>
            </Card>
          </div>
          <div>
          <Card className='p-0'>
            <Image width={900} height={500} src="/images/portfolio/itunes.PNG"/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Itunes Searh Api
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Here you can search for any content from itunes 
              </p>
              <Link href="https://fitnessgym-mpho.netlify.app"> 
                <Button>Visit</Button>
            </Link>
            </Card>
          </div>
    </div>
    <style jsx>
        {`

          .projects-section {
            background-color: #474e5d;
            color: white;
          }
          .card-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
          }

          .card-image {
            width: 100%;
            object-fit: contain;
          }

          @media screen and (max-width: 767px) {
            .card-grid {
              display: grid;
              grid-template-columns: 1fr;
              grid-gap: 20px;
            }
          }
        `}
    </style>
    </section>
  )
}

export default HomeProjects