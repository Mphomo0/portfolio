import React from 'react'
import Skill from './Skill'

// Define the Skills component
const Skills = () => {
    return (
        <div className="skills my-8">
            <h2 className="mt-8 mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">I have experience with these technologies</h2>
            <div className="skillsGrid">
            <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="The logo icon for JS" title="JS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="The logo icon for MongoDB" title="MongoDB"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="The logo icon for MysqlS" title="Mysql"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="The logo icon for NextJS" title="NextJS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="The logo icon for Bootstrap" title="Bootstrap"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="The logo icon for ExpressJs" title="ExpressJS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="The logo icon for Illustrator" title="Illustrator"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="The logo icon for Photoshop" title="Photoshop"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" alt="The logo icon for AdobeXD" title="ADOBE XD"/>
            </div>
            <style jsx>
                {`
                /* Large Screens (min-width: 1080px) */
                @media screen and (min-width: 1080px) {
                    .skillsGrid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 50px;
                    grid-auto-rows: auto;
                    height: auto;
                    margin-top: 45px;
                    }

                .skills{
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                }
                }

                /* Medium Screens min width 641px change to 4 columns */
                @media screen and (min-width: 641px) {
                .skillsGrid{
                    display: grid;
                    grid-template-columns: repeat(8, 1fr);
                    gap: 30px;
                    grid-auto-rows: auto;
                    height: auto;
                    margin-top: 45px;
                }
                .skillsGrid img {
                height: 100px;
                width: 100px;
                }
                .skills{
                background-color: white;
                display: flex;
                flex-direction: column;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
                justify-content: center;
                align-items: center;
                }
                }

                /* Small Screens max width 640px */
                @media screen and (max-width: 640px) {
                  .skillsGrid{
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    grid-auto-rows: auto;
                    height: auto;
                    margin-top: 45px;
                  }

                .skills {
                  background-color: white;
                  display: flex;
                  flex-direction: column;
                  margin-left: auto;
                  margin-right: auto;
                  text-align: center;
                  justify-content: center;
                  align-items: center;
                }
                }
                `}
            </style>
        </div>
    )
}

export default Skills