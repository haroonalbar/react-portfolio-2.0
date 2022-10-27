import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    //without the overfolw-scroll or overflow-hidden mobile version is looking bad
    //z-0 to layer somethings over it later
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
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
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* Contact me */}
    </div>
  );
};

export default Home;
