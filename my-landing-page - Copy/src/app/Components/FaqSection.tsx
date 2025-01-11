'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "What is the purpose of email verifier?",
    answer: "The email verifier helps ensure that email addresses are valid and active before sending messages, reducing bounce rates and improving email campaign effectiveness."
  },
  {
    question: "How do you find email addresses?",
    answer: "We use advanced algorithms and multiple data sources to find and verify email addresses, ensuring high accuracy and deliverability."
  },
  {
    question: "What is the purpose of email verifier?",
    answer: "Email verification helps protect your sender reputation by validating email addresses before you send, preventing hard bounces and maintaining high deliverability rates."
  },
  {
    question: "How do you find email addresses?",
    answer: "Our system combines web scraping, pattern matching, and verification techniques to discover and validate professional email addresses."
  },
  {
    question: "What is the purpose of email verifier?",
    answer: "Email verification ensures your contact list is clean and up-to-date, saving you time and resources by preventing failed delivery attempts."
  },
  {
    question: "How do you find email addresses?",
    answer: "We utilize proprietary technology and multiple verification methods to find and confirm email addresses while respecting privacy guidelines."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#EFF2F7] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-2xl w-[60%]  md:text-[28px] font-bold text-[#2A2665] lg:mb-2 mb-8  max-w-2xl lg:mx-auto text-left sm:text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2A2665] mb-2">
            Got a Question?
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-[#2A2665] mb-10">
            Get Your Answers
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0">
              <button
                className="w-full text-left py-3 px-3 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[#2A2665] font-medium ml-[60px]">{faq.question}</span>
                  <span className="text-[#2A2665] text-3xl mr-10 font-medium ">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-[80px] pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

