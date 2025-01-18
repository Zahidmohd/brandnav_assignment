"use client";
import Image from "next/image";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const data: string[] = [
    "How is the Verifier different from other email verifier tools?",
    "What does it mean when an email address is valid?",
    "What does it mean when an email address is unknown?",
    "What does it mean when an email address is invalid?",
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <main className="max-container px-[1.6rem]">
      <h1 className="text-[5.8rem] text-[#F0F0F0] font-medium text-center mb-[5.2rem]">
        Frequently Asked Questions
      </h1>

      <section className="max-w-[114rem] mx-auto flex gap-[1.2rem] flex-col">
        {data.map((question, index) => (
          <div
            key={index} // Adding unique key
            className="text-[1.8rem] text-[#F0F0F0] rounded-[2rem] overflow-hidden border border-[#4B5266] bg-gradient-to-br from-[#30273D] to-[#121218]"
          >
            <div
              onClick={() => handleClick(index)}
              className="flex items-center justify-between py-[3rem] px-[4rem] cursor-pointer"
            >
              <h1 className="font-medium leading-[112%]">{question}</h1>
              <Image
                src="/arrow.png"
                alt="arrow icon"
                width={24}
                height={24}
                className={`transform transition-transform duration-300 ${
                  index === activeIndex ? "rotate-0" : "rotate-180"
                }`}
              />
            </div>

            <div
              className={`h-0 overflow-hidden transition-all duration-300 ${
                index === activeIndex &&
                "px-[4rem] py-[2.4rem] h-max bg-gradient-to-br from-[#1B1329] to-[#0D0D14]/40"
              }`}
            >
              {index === activeIndex && (
                <div className="max-w-[72.9rem]">
                  <p>BrandNav Verifier stands out for several reasons:</p>
                  <p>
                    <strong>Accuracy:</strong> Our advanced algorithms ensure
                    precise email verification.
                    <br />
                    <strong>Efficiency:</strong> Fast processing for large
                    email lists, saving you time.
                    <br />
                    <strong>User-Friendly:</strong> Easy-to-use interface makes
                    verification hassle-free.
                    <br />
                    <strong>Data Security:</strong> Your information is handled
                    with the utmost security.
                    <br />
                    <strong>Support:</strong> Responsive customer support to
                    assist you at any step.
                  </p>
                  <p>
                    Don’t just take our word for it—check out our G2 reviews!
                    We’re rated 4.8/5 by users.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default FAQ;
