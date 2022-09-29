import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      // viewport={{ once: true }}
      transition={{
        duration: 1.5,
      }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#FF0080]">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://scontent.fpoz6-1.fna.fbcdn.net/v/t1.6435-9/44872971_1840781409353198_7535184580806967296_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Su_CrsSrPuUAX8bS0hl&_nc_ht=scontent.fpoz6-1.fna&oh=00_AT_RsRnSpcHqbim-eAxh52gf1NitwrH8Ex8VnHEVbfQVyw&oe=635373EF"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover md:rounded-lg md:w-[180px] md:h-[400px] xl:w-[500px] xl:h-[300px] my-10"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-[#EC9EC0] text-lg uppercase tracking-[10px]">
          Get to{" "}
          <span className="text-[#FF0080] text-2xl font-semibold animate-pulse">
            know
          </span>{" "}
          me
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          minus eius ut iure amet veritatis aliquid harum molestiae laborum
          ullam dolor labore, a debitis accusamus unde veniam, reprehenderit ea
          illo voluptates dignissimos voluptatibus et! Nesciunt animi labore,
          totam quisquam consectetur iste, tempora atque laborum, maxime quidem
          natus odit autem corporis. Sit, eveniet quasi esse quisquam voluptatum
          hic soluta officiis, blanditiis veritatis ipsam quae a delectus libero
          quis fugit! Veniam temporibus incidunt, quos expedita, similique quo
          ullam ipsum, laborum ea culpa odit reprehenderit iusto nostrum non
          tempore laudantium modi unde eius quasi repellat voluptates molestias
          commodi recusandae perspiciatis! Fuga, molestiae et ipsa, ex iusto
          perspiciatis natus numquam placeat id at corporis cum quos.
        </p>
      </div>
      
    
    </motion.div>
  );
};

export default About;
