import React from 'react';
import Image from 'next/image';

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-b rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justofy-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">Get to know me!</h1>
            <p>
              Hi, my name is David and I am a <span className="font-bold">{'highly ambitious'}</span>,
              <span className="font-bold">{' self-motivated'}</span>, and
              <span className="font-bold">{' driven'}</span> software developer based in Abuja, Nigeria.
            </p>
            <br />
            <p>
              I spent Seven years studying Law in Benue State University(should be 5 years but got extended due to strike), but I’ve always been
              interested in Technology, from a young age I’ve always tried to understand how things work. I started learning HTML & CSS on my
              smartphone(Sololearn app) in 2019 because I didn’t have a laptop at the time. Since then I’ve picked up other interests like Digital
              Marketing, Graphic Design, Photography & Web Application Development.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy. From reading, playing video games, traveling, to watching tutorials on
              Youtube, I am always seeking new experiences and love to keep myself engaged and learning new things. I always do my best to provide
              value in any environment I find myself.
            </p>
            <br />
            <p>
              I believe that you should <span className="font-bold text-teal-500">never stop growing</span> and that&#39;s what I strive to do, I have
              a passion for technology and a desire to always push the limits of what is possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold" key={idx}>
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
              src="/about-image.png"
              alt="Owoicho David Uji"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default AboutSection;
