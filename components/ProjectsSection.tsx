'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SlideUp';

const projects = [
  {
    name: 'Lyriks',
    description:
      'Lyriks is a music player that uses the Shazam API to play music and display lyrics, it also uses Geolocation API to recommend songs based on the location of the User',
    image: '/lyriks.png',
    github: 'https://github.com/UjiDavid/lyriks',
    link: 'https://david-lyrics-app.netlify.app/',
  },
  {
    name: 'Metaversus',
    description: 'Metaversus is a web3 project about the Metaverse that I used to explore some cool animations with framer motion',
    image: '/metaversus.png',
    github: 'https://github.com/UjiDavid/metaversus',
    link: 'https://metaversus-ujidavid.vercel.app/',
  },
  {
    name: 'Raven & Macaw HMO',
    description: 'Raven & Macaw HMO is a Health Management Organisation website built. I built it as part of an interview assesment',
    image: '/raven-macaw.png',
    github: 'https://github.com/UjiDavid/raven-macaw',
    link: 'https://raven-macaw.vercel.app',
  },
  {
    name: 'Movie App',
    description: 'Movie App is a movie website I built to practice querying data from a movie API',
    image: '/movie-app.png',
    github: 'https://github.com/UjiDavid/movie_app',
    link: 'https://movie-app-ujidavid.vercel.app/',
  },
  {
    name: 'HooBank',
    description: 'Hoo Bank is a Bank website with a modern desgin',
    image: '/bank-app.png',
    github: 'https://github.com/UjiDavid/bank_app',
    link: 'https://bank-app-ujidavid.vercel.app/',
  },
];

const ProjectsSection = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <section id="projects" className="mb-6">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-b rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animate-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt={`${project.name} image`}
                        width={1000}
                        height={1000}
                        className="mt-8 rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p
                      className={
                        currentTheme === 'dark'
                          ? 'text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'
                          : 'text-xl leading-7 mb-4 text-neutral-600'
                      }
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
