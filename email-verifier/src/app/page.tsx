import React from 'react'
import EmailVerifier from './components/EmailVerifier'
import HowItWorks from './components/Howitwork'
import Feautures from './components/Features'
import SolidVerifier from './components/SolidVerifier'
const page = () => {
  return (
    <div>
      <EmailVerifier/>
      <HowItWorks/>
      <Feautures/>
      <SolidVerifier/>
    </div>
  )
}

export default page
