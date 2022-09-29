import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircle";

type Props = {};


const Hero = ({}: Props) => {

  const [text, count] = useTypewriter({
    words: [
      "{{ React, Next, TypeScript, APIs, Cloud }}",
      'console.log("Hello World")',
      "<WebDeveloper />",
      "<FrontendEngineer />",
    ],
    loop: true,
    delaySpeed: 4000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <picture>
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="https://scontent.fpoz6-1.fna.fbcdn.net/v/t1.6435-9/128683376_3462882617143061_6269284434995924195_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=KVy_AcO8X2YAX9ZjctQ&tn=8DVK1alAiobK76zX&_nc_ht=scontent.fpoz6-1.fna&oh=00_AT_lQpQRdS_czlALek5BnuTD6Ax_Ff9qIZWZCJ_U5YyLrw&oe=6354C343"
          alt="patty"
        />
      </picture>
      <div className="z-20">
        <h2 className="text-xl uppercase text-[#FF0080] pb-4 tracking-[12px]">
          Patpicha Sitthitrai
        </h2>

        <h1 className="text-2xl font-semibold px-10">
          <span className="mr-2 text-[#EC9EC0] ">{text}</span>
          <Cursor cursorColor="#EC9EC0" />
        </h1>

        <div className="pt-12">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="experience">
            <button className="heroButton ">Experience</button>
          </Link>
          <Link href="skills">
            <button className="heroButton">tech stacks</button>
          </Link>
          <Link href="projects">
            <button className="heroButton ">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
