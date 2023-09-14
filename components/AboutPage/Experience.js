// Import necessary components and icons
'use client';
import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';

// Define the Experience component
const Experience = () => {
    return (
        <section className='dark-background py-8'>
            {/* Section Title */}
            <h2 className="py-8 mx-8 text-4xl tracking-tight font-extrabold  text-white">Experience</h2>
            {/* Timeline Component */}
            <Timeline className='mx-8'>
                {/* Timeline Item 1 */}
                <Timeline.Item>
                    {/* Timeline Point */}
                    <Timeline.Point />
                    {/* Timeline Content */}
                    <Timeline.Content>
                        {/* Experience Date */}
                        <Timeline.Time  className='text-white'>
                            September 2017
                        </Timeline.Time>
                        {/* Experience Title */}
                        <Timeline.Title className='text-white'>
                           Digital Designer
                        </Timeline.Title>
                        {/* Experience Description */}
                        <Timeline.Body>
                            <p>
                                I do websites for AutoTrader clients as well as micro websites for AutoTrader, I also design logos, and web banners
                            </p>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                {/* Timeline Item 2 */}
                <Timeline.Item>
                    {/* Timeline Point */}
                    <Timeline.Point />
                    {/* Timeline Content */}
                    <Timeline.Content>
                        {/* Experience Date */}
                        <Timeline.Time  className='text-white'>
                            June 2015
                        </Timeline.Time>
                        {/* Experience Title */}
                        <Timeline.Title  className='text-white'>
                            Junior Web Developer
                        </Timeline.Title>
                        {/* Experience Description */}
                        <Timeline.Body>
                            <p>
                                I was responsible for the design and construction of websites. Ensuring that sites meet user expectations by ensuring they look good, run smoothly and offer easy access points with no loading issues between pages or error messages
                            </p>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                {/* Timeline Item 3 */}
                <Timeline.Item>
                    {/* Timeline Point */}
                    <Timeline.Point />
                    {/* Timeline Content */}
                    <Timeline.Content>
                        {/* Experience Date */}
                        <Timeline.Time className='text-white'>
                            January 2011
                        </Timeline.Time>
                        {/* Experience Title */}
                        <Timeline.Title className='text-white'>
                            Freelance Web Designer
                        </Timeline.Title>
                        {/* Experience Description */}
                        <Timeline.Body>
                            <p>
                            I was doing Wordpress Development,  HTML and CSS, Web Maintenance and support, Graphic Design
                            </p>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
            {/* Inline CSS for styling */}
            <style jsx>
                {`
                /* Style for the dark background section */
                .dark-background {
                    background-color: #333; /* You can change this color to your desired dark background color */
                    color: #fff; /* Text color on the dark background */
                }

                /* Style for the timeline text and paragraphs */
                .timeline {
                    color: #fff;
                }

                /* Style for the paragraphs within the timeline */
                p {
                    color: #fff;
                }
            `}
            </style>
        </section>
    )
}

// Export the Experience component
export default Experience;
