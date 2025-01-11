import React from 'react'
import { Hero } from '../components/Hero'
import PricingCard from '../components/PricingCard'
import UserCategories from '../components/UserCategories'
import DataAttributes from '../components/DataAttributes'
import Testimonials from '../components/Testimonial'
import FAQSection from '../components/Faqsection'
import Footer from '../components/Footer'
import DataAccuracy from '../components/DataAccuracy'
import Features from '../components/Features'


const page = () => {
  return (
    <div>
      <Hero/>
      <PricingCard/>
      <Features/>
      <DataAttributes/>
      <DataAccuracy/>
      <UserCategories/>
      <Testimonials/>
      <FAQsection/>
      <Footer/>
    </div>
  )
}

export default page
