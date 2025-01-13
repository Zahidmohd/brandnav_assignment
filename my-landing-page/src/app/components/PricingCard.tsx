import gift from "../../../public/gift.svg";
import Ratings from "../../../public/rating-star.svg";
import singleStar from "../../../public/single-star.svg";
import CreditCard from "../../../public/credit_card.svg";
import Banner from "../../../public/banner.png";
import tick from "../../../public/circle-tick.svg";
import Tesitmonial1 from "../../../public/testimonial2.svg";
import Tesitmonial2 from "../../../public/testimonial2.svg";
import Tesitmonial3 from "../../../public/testimonial2.svg";
import Tesitmonial4 from "../../../public/testimonial2.svg";
import Tesitmonial5 from "../../../public/testimonial2.svg";
import numbers from "../../../public/10k.svg";
import Image from "next/image";

export default function PricingCard() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Banner.src})` }}
    >
      {/* Pricing Card */}
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-10 lg:px-20 items-center">
        {/* Left Side Text */}
        <div className="text-white flex flex-col justify-center items-center text-center lg:text-right order-1 md:order-2">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            Not convinced yet?
          </h2>
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            Take it for a{" "}
            <span className="text-[#007bff] font-semibold ">FREE</span> spin
          </p>
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
            before committing
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg w-full max-w-md mx-auto lg:mx-0 order-2 md:order-1">
          <div className="flex flex-col items-center text-center">
            {/* Gift Icon */}
            <div className="w-12 h-12 mb-4">
              <Image src={gift} alt="Gift" width={48} height={8} />
            </div>

            {/* Pricing */}
            <h2 className="text-xl md:text-2xl font-bold text-[#1a237e] mb-2">
              Free
            </h2>
            <div className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">
              $0
            </div>

            {/* CTA Button */}
            <button className="bg-[#007bff] w-full py-2 rounded-lg text-white font-medium hover:bg-blue-600 transition">
              Grab free leads
            </button>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 mt-4">
              <div className="flex items-center gap-1">
                <Image src={CreditCard} alt="card" width={16} height={16} />
                No credit card required
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <Image src={singleStar} alt="rating" width={16} height={16} />
                <span>4.8/5 G2 Rating</span>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-6 space-y-3 text-left text-sm font-medium w-full">
              {[
                "All BrandNav features included",
                "200 Screener credits per month",
                "25 Enricher credits per month",
                "Pinpoint ideal prospects",
                "Chat support with real humans",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Image src={tick} alt="tick" width={16} height={16} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="mt-8">
              <div className="flex justify-center -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={Tesitmonial3}
                      alt={`User ${i + 1}`}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
                <Image
                  src={numbers}
                  alt="numbers"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Trusted by 10,000+ users
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
