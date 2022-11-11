import type { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo[];
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    //without the overfolw-scroll or overflow-hidden mobile version is looking bad
    //z-0 to layer somethings over it later
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden bg-[rgb(36,36,36)] text-white
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-400/80">
      <Head>
        <title>haroon's portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experiences />
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

// we are going to use irs which is a middle ground between static render and server side render
// in which we can give a time limit after that time the static site will rerender and be ready to deliver

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    //it will update every 10s this will make the site faster by cacheing it 
    revalidate: 10,
  };

}
