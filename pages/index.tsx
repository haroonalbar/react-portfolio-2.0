import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Image from "next/future/image";
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'


const Home: NextPage = () => {
  return (
    //without the overfolw-scroll or overflow-hidden mobile version is looking bad
    //z-0 to layer somethings over it later
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden bg-[rgb(36,36,36)] text-white
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-400/80">
      <Head>
        <title>haroon's portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start" >
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-20 w-full cursor-pointer h-10 rounded-full'>
          <div className="flex items-center justify-center" >
            <ArrowUpCircleIcon className=' text-gray-500/50 hover:text-teal-500/60 h-10 w-10' />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
