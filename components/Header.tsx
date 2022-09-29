import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2.0,
        }}
        className="flex flex-row items-center "
      >
        <SocialIcon
        className="hover:animate-bounce"
          url="https://www.github.com/PattyCutie"
          fgColor="#FF0080"
          bgColor="transparent"
        />
        <SocialIcon
        className="hover:animate-bounce"
          url="https://www.linkedin.com/in/patpicha-sit/"
          fgColor="#FF0080"
          bgColor="transparent"
        />
        <SocialIcon
        className="hover:animate-bounce"
          url="https://www.instagram.com/pattyindev"
          fgColor="#FF0080"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2.0,
          }}
          className="flex flex-row items-center text-gray-300"
        >
          <SocialIcon          
            className="cursor-pointer hover:animate-bounce"
            network="email"
            fgColor="#FF0080"
            bgColor="transparent"
          />
          <p
            className="uppercase hidden md:inline-flex text-[16px]
            text-[#FF0080] cursor-pointer animate-pulse hover:animate-none"
          >
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
