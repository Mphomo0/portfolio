'use client';

import AboutSection from "@/components/AboutPage/AboutSection";
import Experience from "@/components/AboutPage/Experience";
import Skills from "@/components/AboutPage/Skills";
import CallToAction from "@/components/CallToAction";

const Page = () => {
  return (
    <>
     {/* About Section */}
      <div className="about-section">
        <h1 className="text-4xl">About Us</h1>
      </div>
      {/* about section components */}
      <AboutSection />
      <Experience />
      <Skills />
      <CallToAction />
      <style jsx>
  {`
    .about-section {
      padding: 50px;
      text-align: center;
      background-color: #474e5d;
      color: white;
    }
  `}
</style>
    </>
  );
};

export default Page;
