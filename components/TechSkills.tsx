import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

const TechSkills = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto 
    items-center"
    >
      <h3 className="uppercase absolute top-24 tracking-[20px] text-2xl text-[#FF0080]">
        tech stacks
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[5px] text-xs text-[#EC9EC0]">
        hover over a{" "}
        <span className="text-[#FF0080] text-lg font-semibold animate-pulse">
          skill
        </span>{" "}
        for currency proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 absolute top-80">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default TechSkills;
