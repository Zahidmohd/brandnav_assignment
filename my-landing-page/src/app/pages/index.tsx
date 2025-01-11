import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home