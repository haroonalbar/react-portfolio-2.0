import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    //without the overfolw-scroll or overflow-hidden mobile version is looking bad
    //z-0 to layer somethings over it later
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0' >
      <Head>
        <title>haroon's portfolio
        </title>
      </Head>
      <div>
        <Header />
        <section className='snap-center'>
          <Hero />
        </section>

        {/* About */}
        {/* Experience */}
        {/* Skills */}
        {/* Projects */}
        {/* Contact me */}
      </div>

    </div>
  );
}

export default Home;
