import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechSkills from "../components/TechSkills";

type section = {};

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden 
    z-0 scrollbar-thin scrollbar-track-[#EC9EC0]/10 
    scrollbar-thumb-[#FF0080]/60 scrollbar-thumb-rounded"
    >
      <Head>
        <title>Vibe Race</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start hero">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="Techskills" className="snap-start">
        <TechSkills />
      </section>

      <section id="experience" className="snap-center ">
        <Experience />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer>
          <ChevronDoubleUpIcon
            className="fixed bg-transparent text-[#FF0080]/20 hover:text-[#FF0080] animate-bounce w-10 h-10
            bottom-[1%] right-[5%] cursor-pointer z-100"
          />
        </footer>
      </Link>
    </div>
  );
};

export default Home;
