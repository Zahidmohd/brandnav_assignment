"use client";
import Image from "next/image";
import { useState } from "react";

const FAQ = () => {
  const [activeIndx, setActiveIndex] = useState<number>(0);
  const data: string[] = [
    "How is the Verifier different from other email verifier tools?",
    "What does it mean when an email address is valid?",
    "What does it mean when an email address is unknown?",
    "What does it mean when an email address is invalid?",
  ];

  const handleClick = (indx: number) => {
    if (activeIndx === indx) setActiveIndex(-1);
    else setActiveIndex(indx);
  };
  return (
    <main className="max-container px-[1.6rem] ">
      <h1 className="text-[5.8rem] text-[#F0F0F0] font-medium text-center mb-[5.2rem] ">
        Frequently asked questions
      </h1>

      <section className="max-w-[114rem] mx-auto flex gap-[1.2rem] flex-col">
        {data.map((e, i) => (
          <div className="text-[1.8rem] text-[#F0F0F0] rounded-[2rem]  overflow-hidden border border-[#4B5266] bg-gradient-to-br from-[#30273D] to-[#121218]">
            <div
              onClick={() => handleClick(i)}
              className="flex items-center justify-between  py-[3rem] px-[4rem] cursor-pointer"
            >
              <h1 className="font-medium leading-[112%]">
                How is the Verifier different from other email verifier tools?
              </h1>
              <Image
                src="/arrow.png"
                alt="arrow icon"
                width={24}
                height={24}
                className={` ${i === activeIndx ? "rotate-0" : "rotate-180"} `}
              />
            </div>

            <div
              className={`  h-0 ${
                i === activeIndx &&
                "px-[4rem] py-[2.4rem] h-max [transition:all_.4s_ease] bg-gradient-to-br from-[#1B1329] to-[#0D0D14]/40"
              }   `}
            >
              <div className="max-w-[72.9rem]">
                <p>BrandNav Verifier stands out for several reasons:</p>
                <p className="">
                  Accuracy: Our advanced algorithms ensure precise email
                  verification. Efficiency: Fast processing for large email
                  lists, saving you time. User-Friendly: Easy-to-use interface
                  makes verification hassle-free. Data Security: Your
                  information is handled with the utmost security. Support:
                  Responsive customer support to assist you at any step.
                </p>
                <p>
                  Don’t just take our word for it, checkout our G2 reviews we’re
                  rated 4.8/5 by users.
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default FAQ;
