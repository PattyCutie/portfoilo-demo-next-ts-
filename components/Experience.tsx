import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
       //   viewport={{ once: true }}
      transition={{
        duration: 1.5,
      }}
      className="flex relative overflow-hidden flex-col text-center
      md:flex-row max-w-full px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#FF0080]">
        Experience
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[5px] text-xs text-[#EC9EC0]">
        hover over a  {" "}<span className="text-[#FF0080] text-lg font-bold animate-pulse">card</span>
        {" "}for what I have worked
      </h3>
    
      <div className="w-full flex space-x-5 overflow-x-scroll p-10
      snap-x snap-mandatory 
      scrollbar-thin scrollbar-track-[#EC9EC0]/10 scrollbar-thumb-[#FF0080]/60 scrollbar-thumb-rounded">
        
        <ExpCard />
        <ExpCard />
        <ExpCard />
      </div>
      
    </motion.div>
  );
};

export default Experience;
