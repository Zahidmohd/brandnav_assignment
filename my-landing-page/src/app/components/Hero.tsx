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
      className="relative pt-20 bg-blue-50 min-h-[90vh] flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-10 py-20"
      style={{
        backgroundImage: `url(${bgline.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
      }}
    >
      <h2 className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[3.8rem] font-semibold leading-tight text-[#0D2052] max-w-4xl mx-auto mb-8">
        Weapons to grow <br className="hidden sm:inline" />
        your Business
      </h2>
      <div className="max-w-2xl mx-auto space-y-2 mb-10">
        <p className="text-gray-600 sm:text-lg lg:text-xl">
          Turbocharge your business growth.
        </p>
        <p className="text-gray-600 sm:text-lg lg:text-xl">
          Our products help ignite sales and entrepreneurship.
        </p>
      </div>

      <button className="bg-gradient-to-r from-[#52A8FF] via-[#0084FF] to-[#0084FF] text-white w-full sm:w-auto px-10 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors mb-6">
        Start for free
      </button>

      <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-10 hidden sm:flex">
        <div className="flex items-center gap-2">
          <Image src={CreditCard} alt="No credit card required" />
          <span>No credit card required</span>
        </div>
        <span className="text-gray-400">|</span>
        <div className="flex items-center gap-2">
          <Image src={Ratings} alt="Ratings" />
          <span>4.8/5 G2 Rating</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Image
          src={verifierCard}
          alt="Verifier Card"
          className="w-full h-auto object-contain"
        />
        <Image
          src={screenerCard}
          alt="Screener Card"
          className="w-full h-auto object-contain"
        />
        <Image
          src={blackShieldCard}
          alt="Black Shield Card"
          className="w-full h-auto object-contain"
        />
        <Image
          src={enricherCard}
          alt="Enricher Card"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="mt-16">
        <h4 className="text-lg font-medium text-gray-600 mb-6">
          Modern companies are using <span className="font-semibold">BrandNav</span>
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image src={brand1} alt="Brand 1" className="h-auto" />
          <Image src={brand2} alt="Brand 2" className="h-auto" />
          <Image src={brand3} alt="Brand 3" className="h-auto" />
          <Image src={brand4} alt="Brand 4" className="h-auto" />
          <Image src={brand5} alt="Brand 5" className="h-auto" />
        </div>
      </div>
    </div>
  );
}
