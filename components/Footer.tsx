'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <footer id="footer" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className={currentTheme === 'dark' ? 'dark:text-neutral-100' : 'text-neutral-500'}> © 2023 Owoicho David Uji</div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/UjiDavid" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className={
                currentTheme === 'dark'
                  ? 'hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                  : 'hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500'
              }
              size={30}
            />
          </a>
          <a href="https://twitter.com/pixelsbyowie" rel="noreferrer" target="_blank">
            <AiOutlineTwitter
              className={
                currentTheme === 'dark'
                  ? 'hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                  : 'hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500'
              }
              size={30}
            />
          </a>

          <a href="https://www.linkedin.com/in/owoicho-uji-505255230/" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin
              className={
                currentTheme === 'dark'
                  ? 'hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                  : 'hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500'
              }
              size={30}
            />
          </a>
          <a href="https://www.instagram.com/uji_official/" rel="noreferrer" target="_blank">
            <AiOutlineInstagram
              className={
                currentTheme === 'dark'
                  ? 'hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                  : 'hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500'
              }
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
