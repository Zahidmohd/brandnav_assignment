import Ratings from "../../../public/rating-star.svg"
import CreditCard from "../../../public/credit_card.svg"
import verifierCard from "../../../public/verifier_card.svg"
import screenerCard from "../../../public/screener-card-lp.svg"
import enricherCard from "../../../public/enricher-card-lp.svg"
import blackShieldCard from "../../../public/blacklist-shield-card-lp.svg"
import brand1 from "../../../public/sentry-ecom-new.svg"
import brand2 from "../../../public/acexmedia-new.svg"
import brand3 from "../../../public/outreach-clerk-new.svg"
import brand4 from "../../../public/og-new.svg"
import brand5 from "../../../public/xlr-media-new.svg"
import bgline from "../../../public/bgline.svg"
import Image from "next/image"

export function Hero() {
  return (
    <div
      className="relative pt-10 bg-blue-50 min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16"
      style={{
        backgroundImage: `url(${bgline.src})`, // i used this bg but it is giving white shadows and black bg so didnt use took from figma 
      }}
    >
      <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.2rem] font-medium leading-tight text-[#0D2052] max-w-4xl mx-auto mb-6 text-left sm:text-center">
        Weapons to grow <br className="hidden sm:inline" />
        your Business
      </h2>
      <div className="max-w-2xl mx-auto space-y-1 mb-8 mt-0 gap-0 text-left sm:text-center">
        <p className="text-gray-600 sm:text-xl lg:text-[15px] ">
          Turbocharge your business growth.
        </p>
        <p className="text-gray-600 sm:text-xl lg:text-[15px] ">
          Our products help ignite sales and entrepreneurship.
        </p>
      </div>

      <button className="bg-gradient-to-r from-[#52A8FF] via-[#0084FF] to-[#0084FF] text-white w-full md:w-full lg:w-auto lg:px-12 py-[8px] rounded-[10px] text-lg font-medium hover:bg-blue-600 transition-colors mb-3">
        Start for free
      </button>

      <div className="flex items-center justify-center gap-4 text-[13px] text-gray-600 hidden mb-3 lg:flex md:flex">
        <div className="flex items-center gap-2">
          <Image src={CreditCard} alt="card" />
          No credit card required
        </div>
        <span>|</span>
        <div className="flex items-center">
          <Image src={Ratings} alt="card" />
          <span className="ml-1">4.8/5 G2 Rating</span>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 h-full w-full max-w-6xl mx-auto rounded-xl items-center justify-center w-full h-auto">
          <Image
            src={verifierCard}
            alt="Verifier Card"
            className="w-full h-auto object-contain lg:w-auto lg:mt-[-80px]"
          />
          <Image
            src={screenerCard}
            alt="Screener Card"
            className="w-full h-auto object-contain lg:w-auto"
          />
          <Image
            src={blackShieldCard}
            alt="Black Shield Card"
            className="w-full h-auto object-contain lg:w-auto"
          />
          <Image
            src={enricherCard}
            alt="Enricher Card"
            className="w-full h-auto object-contain lg:w-auto lg:mt-[-80px]"
          />
        </div>
      </div>

      <div className="p-8">
        <h4 className="lg:text-[18px] text-[14px] md:text-[15px] font-poppins text-[#666666] mb-[9px] p-5">
          Modern companies are using <span className="font-semibold">BrandNav</span>
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-6 lg:gap-8">
          <Image src={brand1} alt="brand1" className="h-auto" />
          <Image src={brand2} alt="brand2" className="h-auto" />
          <Image src={brand3} alt="brand3" className="h-auto" />
          <Image src={brand4} alt="brand4" className="h-auto" />
          <Image src={brand5} alt="brand5" className="h-auto" />
        </div>
      </div>
    </div>
  )
}
