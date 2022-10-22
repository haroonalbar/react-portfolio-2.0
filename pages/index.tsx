import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div  >
      <Head>
        <title>haroon's portfolio
        </title>
      </Head>
      {/* Header */}
      <Header />

      {/* Hero  */}

      <Hero />

      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}
    </div>
  )
}

export default Home
