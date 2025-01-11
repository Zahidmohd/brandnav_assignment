import Image from 'next/image'
import { Star } from 'lucide-react'
import image1 from "../../../public/image1.jpg"
import image2 from "../../../public/image2.jpg"
import ratings from "../../../public/stars_4.8.svg"

interface TestimonialProps {
  name: string
  role: string
  quote: string
  content: string
  image: any
}

const StarRating = ({ rating = 5 }: { rating?: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

const testimonials: TestimonialProps[] = [
  {
    name: "Sai",
    role: "CEO, Sentry Ecom",
    quote: "Super helpful tool for lead generation!",
    content: "BrandNav has been extremely useful in helping us find high quality leads for our agency. It's the best tool I've used so far for scrapping leads. Would definitely recommend BrandNav to businesses looking for a lead gen tool.",
    image: image1
  },
  {
    name: "Sairaj Matkar",
    role: "Founder, AceXmedia",
    quote: "Highly recommended if you're looking to get leads!",
    content: "Best tool I've used so far for scrapping leads. Helps me scrape my target audience data with ease. Low effort, amazing response rates. Saves a lot of time and manual work",
    image: image2
  }
]

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-[#E1F1FE] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl w-[60%]  md:text-[28px] font-bold text-[#2A2665] mb-2  max-w-2xl lg:mx-auto text-left sm:text-center">
            Don't just take our word for it
          </h2>
          <div className="flex items-center justify-center gap-4 font-semibold ml-[-95px] text-[13px]  lg:ml-0  ">
            <span className="text-[#2A2665] lg:text-[15px] text-left sm:text-center ">Excellent</span>
            <Image src={ratings} alt="stars_ratings" className='h-[18px] w-[100px]' />
            <span className="text-[#2A2665] lg:text-[15px] text-left sm:text-center">4.8/5 G2 Ratings</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg">
              <div className="py-12 px-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2A2665]">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <StarRating/>
                </div>
                <div>
                  <p className="text-[#2A2665] font-semibold text-[15.6px] mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
