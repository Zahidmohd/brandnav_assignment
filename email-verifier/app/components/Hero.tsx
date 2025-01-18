"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import Button from "./Button";

const Hero = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal(false);
    setIsSubmitted(false);
    document.body.style.overflow = "visible";
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }, 4000);
  };
  return (
    <main className="max-container bg-[#09061A] relative px-[1.6rem]">
      {/* Header */}
      <header className="flex items-center gap-[.8rem] max-w-max absolute left:[3rem] sm:left-[7rem] top-[2.6rem]">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <span className="text-white text-[2.8rem] leading-[3.59rem] tracking-[.065rem] [font-family:NexaBold]">
          verifier
        </span>
      </header>

      {/* Content */}
      <section
        className="w-full max-w-[114rem] mx-auto flex flex-col items-center sm:text-center pt-[9rem]  
      relative before:absolute before:w-full before:h-full before:bg-green-600 before:left-0  before:-top-full before:rounded-full
      before:[box-shadow:21px_70px_200px_350px_rgba(80,92,173,.3)] "
      >
        {/* Text section */}
        <h1
          className="text-[5rem] sm:text-[7.2rem] sm:leading-[7.4rem] pt-[7.1rem] pb-[1.8rem] font-semibold relative z-10
          w-full max-w-[68rem]  bg-clip-text text-transparent bg-gradient-to-b from-[#EBEBEB] to-[#A3A3A3]"
        >
          Email Checker <span className="font-normal">and</span> Verifier
        </h1>
        <p className="text-[#E0E0E0] text-[1.8rem]  my-[1rem] leading-[3rem] w-full max-w-[54.4rem] relative z-10">
          Reduce bounce rate and improve your email marketing performance with
          our verifier.
        </p>

        {/* Email Verifivation Logic */}

        {!isSubmitted && (
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="mt-[2.8rem] border border-[#332890] mb-[6.1rem] rounded-[1.8rem] w-full max-w-[60.2rem] flex items-center justify-between p-[.6rem] pl-[2.8em]
         bg-gradient-to-r from-[#45588FCC_0%] via-[#303B61CC_50%] to-[#272A49CC_100%]
            [box-shadow:0px_4px_28px_-1px_rgba(88,218,242,.22)]"
          >
            <input
              type="email"
              required
              placeholder="Enter an email to verify"
              className="bg-transparent outline-none border-none flex-1  placeholder:text-[1.8rem] text-[1.8rem]
             placeholder:text-[#F0F0F0] placeoholder:font-medium placeholder:leading-[2.2rem] text-[#F0F0F0]
              font-medium leading-[2.2rem] "
            />
            <button
              className="rounded-[1.2rem] overflow-hidden  relative p-[.1rem] bg-gradient-to-b from-[#7AA7EA]  via-[#4A2FAC] to-[#4837B0] 
              after:absolute after:w-full after:h-full after:left-0 after:top-0  after:z-[1]   after:rounded-[1.2rem]"
            >
              <span className=" block relative leading-[2rem] z-[2] rounded-[1.2rem] font-medium  text-white text-[2rem]  py-[1.4rem] px-[3rem]  bg-gradient-to-r from-[#2D58BD]  via-[#3A78D0] to-[#1892F5] ">
                Verify
              </span>
            </button>
          </form>
        )}

        {/* Progress bar */}
        {isSubmitted && (
          <div className="text-[#E0E0E0]/90 text-[1.6rem] mt-[2.8rem] mb-[6.1rem] ">
            <p className="mb-[4.4rem]">Verifying your email in real-time...</p>
            <div
              className=" [box-shadow:0px_2px_36px_4px_rgba(56,235,235,.28),0_0_7px_rgba(255,255,255,.3)_inset]  w-full sm:w-[38rem] h-[1rem] rounded-[4rem] 
            overflow-hidden "
            >
              <div className=" bg-gradient-to-r from-[#2B70B5_0%] via-[#1575E9_50%] to-[#2EC2F1_100%] w-0 load-animation h-full"></div>
            </div>
          </div>
        )}
      </section>

      {/* Modal Pop up */}
      {
        <div
          className={`fixed px-[1.6rem] w-screen inset-0 h-screen  bg-black/40 [backdrop-filter:blur(2rem)] 
        z-[100] text-white flex justify-center items-start pt-[16.4rem] scale-0 [transition:all_1s_ease] ${
          showModal && "scale-100"
        } `}
        >
          <div className="p-[3rem]   sm:p-[6rem] flex rounded-[3.2rem] border border-[2A3D76] w-full max-w-[74rem] bg-gradient-to-r from-[rgba(15,12,67,.44)_0%] to-[rgba(63,61,133,.64)_100%]">
            <div>
              <h1 className="font-medium leading-[112%] text-[4rem]  sm:text-[5.8rem] text-[#F0F0F0] ">
                One last step!
              </h1>
              <p className="text-[1.4rem] sm:text-[1.8rem] text-[#E0E0E0] mt-[1.6rem] mb-[3.2rem]">
                Make sure to sign up before you get your result. We promise in
                won’t take long.
              </p>
              <div onClick={handleModal}>
                <Button title="Take me in" textSize="text-[2.5rem]" />
              </div>
            </div>

            <Image src="/mail.svg" alt="mail icon" width={122} height={205} />
          </div>
        </div>
      }

      {/* Companies logo */}

      <section className="mt-[7.8rem] pb-[17.4rem]">
        <p className="text-[#E0E0E0] text-center text-[2rem] sm:text-[2.4rem] mb-[4rem] leading-[125%]">
          Modern companies are using{" "}
          <span className="font-semibold">Verifier</span>
        </p>

        <div className="flex items-center justify-center gap-[3rem] sm:gap-[9.8rem] flex-wrap">
          <Image src="/comp1.svg" alt="company logo" width={257} height={31} />
          <Image src="/comp2.svg" alt="company logo" width={190} height={31} />
          <Image src="/comp3.svg" alt="company logo" width={104} height={43} />
          <Image src="/comp4.svg" alt="company logo" width={59} height={37} />
          <Image src="/comp5.png" alt="company logo" width={77} height={43} />
        </div>
      </section>
    </main>
  );
};

export default Hero;
