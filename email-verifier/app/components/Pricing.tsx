import Image from "next/image";
import Button from "./Button";

const Pricing = () => {
  return (
    <main className="max-container px-[1.6rem] pt-[17.2rem] pb-[18rem]">
      <section className="max-w-[102rem] w-full  mx-auto   text-center">
        <h1 className="font-medium text-[5.8rem] leading-[112%] text-[#F0F0F0]">
          Choose the right plan for you
        </h1>
        <p className="text-[#E0E0E0] text-[1.8rem] mt-[2.4rem] mb-[8rem]">
          With great power comes great plans
        </p>

        <div className="min-h-[57rem]  flex items-center flex-col lg:flex-row max-lg:gap-10">
          <div className="max-w-[60rem] sm:w-[60rem] p-[4.8rem]  rounded-[1.6rem] bg-gradient-to-r from-[rgba(69,81,116,.64)] to-[rgba(33,50,98,.24)]">
            <div className="flex  gap-[2rem] items-center justify-center">
              <span className="text-[#5FAEF8]  text-[2.4rem] font-semibold">
                Monthly
              </span>
              <Image src="/toggle.png" alt="switch" width={66} height={36} />
              <span className="text-[2.4rem] font-medium text-[#A4A4A6]">
                Pay-as-you-go
              </span>
            </div>

            <p className="font-medium text-[2rem] text-[#F0F0F0] mt-[4.4rem] mb-[2rem]">
              How many emails do you have?
            </p>
            <input
              type="text"
              defaultValue="2,000"
              className="text-[1.6rem] text-end outline-none border-none font-semibold bg-white  py-[1.2rem] px-[2rem] rounded-[1rem]"
            />

            {/* Slider */}
            <div
              className="max-w-[48.4rem] w-full h-[1.6rem] mt-[7.3rem] mb-[5.7rem] bg-white rounded-[3rem]  relative
            before:absolute before:bg-[#2095F2] before:w-[30%] before:h-full before:inset-0 before:rounded-[3rem] cursor-pointer"
            >
              <div className="absolute w-[4.2rem] aspect-square  -top-3/4 left-[27%] z-10">
                <Image src="/frame.png" alt="slider" layout="fill" />
              </div>
            </div>

            <div className="flex items-center justify-center text-[#F0F0F0] mb-[4.1rem]">
              <span className="text-[5.2rem] font-bold">$18 USD</span>
              <span className="text-[1.8rem]">/month</span>
            </div>

            <Button title="Buy this now" textSize="text-[2rem]" />
          </div>

          <div className="flex-1 grid place-items-center">
            <div
              className=" lg:h-[90%] w-full rounded-[1.6rem] [background-image:radial-gradient(at_top_left,#281E38,rgba(11,8,28,.6))]
            [box-shadow:1px_2px_36px_rgba(56,235,235,.1)] p-[4rem] pt-[3.4rem] text-start text-[#F0F0F0]"
            >
              <h1 className="mb-[2.8rem] font-semibold text-[2rem]">
                Monthly rates
              </h1>

              <ul className="flex flex-col gap-[.8rem]  leading-[220%]">
                <li className="text-[1.8rem] flex items-center justify-between bg-[#596793] p-[.8rem] rounded-[.8rem]">
                  <span className="font-semibold">from 2,000/mo</span>
                  <span className="font-medium text-[#DDDDE1] ">0.009 USD</span>
                </li>
                <li className="text-[1.8rem] flex items-center justify-between  p-[.8rem] rounded-[.8rem]">
                  <span className="font-semibold">from 5,000/mo</span>
                  <span className="font-medium text-[#DDDDE1] ">0.008 USD</span>
                </li>
                <li className="text-[1.8rem] flex items-center justify-between  p-[.8rem] rounded-[.8rem]">
                  <span className="font-semibold">from 10,000/mo</span>
                  <span className="font-medium text-[#DDDDE1] ">0.075 USD</span>
                </li>
                <li className="text-[1.8rem] flex items-center justify-between  p-[.8rem] rounded-[.8rem]">
                  <span className="font-semibold">from 25,000/mo</span>
                  <span className="font-medium text-[#DDDDE1] ">0.007 USD</span>
                </li>
                <li className="text-[1.8rem] flex items-center justify-between  p-[.8rem] rounded-[.8rem]">
                  <span className="font-semibold">from 50,000/mo</span>
                  <span className="font-medium text-[#DDDDE1] ">0.007 USD</span>
                </li>
                <li className="text-[1.8rem] flex items-center justify-between  p-[.8rem] rounded-[.8rem]">
                  <span className="font-semibold">from 100,000/mo</span>
                  <span className="font-medium text-[#DDDDE1] ">
                    0.0039 USD
                  </span>
                </li>
                <li className="text-[1.8rem] flex items-center justify-between  p-[.8rem] rounded-[.8rem]">
                  <span className="font-semibold">from 250,000/mo</span>
                  <span className="font-medium text-[#DDDDE1] ">
                    0.0035 USD
                  </span>
                </li>
                <li className="text-[1.8rem] flex items-center justify-between  p-[.8rem] rounded-[.8rem]">
                  <span className="font-semibold">from 500,000/mo</span>
                  <span className="font-medium text-[#DDDDE1] ">0.003 USD</span>
                </li>
                <li className="text-[1.8rem] flex items-center justify-between  p-[.8rem] rounded-[.8rem]">
                  <span className="font-semibold">from 1,000,000/mo</span>
                  <span className="font-medium text-[#DDDDE1] ">
                    0.00225 USD
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
