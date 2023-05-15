'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SlideUp';

const projects = [
  {
    name: 'Airbnb Clone',
    description:
      'This is an Airbnb Clone with full CRUD Functionality, built with NEXT.JS, Typescript, Prisma, MongoDB, NextAuth, Cloudinary',
    image: '/airbnb-clone.jpg',
    github: 'https://github.com/UjiDavid/airbnb',
    link: 'https://rent-project-ujidavid.vercel.app/',
  },
  {
    name: 'Promptopia',
    description:
      'Promptopia is a Full Stack Application that allows users add AI Prompts that can be copied and used by anyone. Built using Next.JS, MongoDB, NextAuth',
    image: '/promptopia.jpg',
    github: 'https://github.com/UjiDavid/promptopia',
    link: 'https://promptopia-ujidavid.vercel.app/',
  },
  {
    name: 'HooBank',
    description:
      'Hoo Bank is a Bank website with a modern desgin, it has a dark background with some cool gradients and animations to give it a modern feel.',
    image: '/bank-app.png',
    github: 'https://github.com/UjiDavid/bank_app',
    link: 'https://bank-app-ujidavid.vercel.app/',
  },
  {
    name: 'Metaversus',
    description:
      'Metaversus is a web3 project about the Metaverse that I used to explore some cool animations with framer motion.',
    image: '/metaversus.png',
    github: 'https://github.com/UjiDavid/metaversus',
    link: 'https://metaversus-ujidavid.vercel.app/',
  },
  {
    name: '3D Shirt',
    description:
      '3D Shirt is a react app, with some cool 3D effects from Three JS. It enables users customize a shirt with custom colors or texture, users can also imprint a custom logo on the shirt. And download an image of the customized shirt.',
    image: '/threejs.png',
    github: 'https://github.com/UjiDavid/threejs',
    link: 'https://threejs-ujidavid.vercel.app/',
  },
  {
    name: 'Lyriks',
    description:
      'Lyriks is a music player that uses the Shazam API to play music and display lyrics, it also uses Geolocation API to recommend songs based on the location of the User.',
    image: '/lyriks.png',
    github: 'https://github.com/UjiDavid/lyriks',
    link: 'https://david-lyrics-app.netlify.app/',
  },
  {
    name: 'Raven & Macaw HMO',
    description:
      'Raven & Macaw HMO is a Health Management Organisation website built. I built it as part of an interview assesment.',
    image: '/raven-macaw.png',
    github: 'https://github.com/UjiDavid/raven-macaw',
    link: 'https://raven-macaw.vercel.app',
  },
  {
    name: 'Movie App',
    description:
      'Movie App is a movie website where you can search any movie and it displays movies based on the search query, infomation about a particular movie is displayed when the user selects a movie.',
    image: '/movie-app.png',
    github: 'https://github.com/UjiDavid/movie_app',
    link: 'https://movie-app-ujidavid.vercel.app/',
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
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
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
