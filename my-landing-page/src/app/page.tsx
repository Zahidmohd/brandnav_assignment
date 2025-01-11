import React from 'react'
import { Hero } from './components/Hero'
import PricingCard from './components/PricingCard'
import FeatureSection from './components/FeatureSection'
import UserCategories from './components/UserCategories'
import DataAttributes from './components/DataAttributes'
import Testimonials from './components/Testimonial'
import FAQSection from './components/Faqsection'
import Footer from './components/Footer'
import DataAccuracy from './components/DataAccuracy'


const page = () => {
  return (
    <div>
      <Hero/>
      <PricingCard/>
      <FeatureSection/>
      <DataAttributes/>
      <DataAccuracy/>
      <UserCategories/>
      <Testimonials/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default page
