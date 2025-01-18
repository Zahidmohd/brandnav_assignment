import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  return (
    <main className="  pt-[18.7rem] ">
      {/* Try section */}
      <section
        className="flex  flex-col items-center justify-center text-center relative before:absolute 
      before:w-[.1rem] before:h-[.1rem] before:top-[6rem]  before:[box-shadow:0px_0px_400px_80px_rgba(112,199,243,1)]"
      >
        <h1 className=" max-w-[61rem]  bg-clip-text text-transparent bg-gradient-to-b from-[#EBEBEB] to-[#A3A3A3] text-[7.4rem] font-semibold leading-[7.6rem]">
          TrySee Verifier in action
        </h1>
        <div className="mt-[6rem] mb-[12.5rem]  ">
          <Button title="Dive in!" textSize="text-[2.5rem]" />
        </div>
      </section>

      {/* border */}
      <div className="h-[1.7px] bg-gradient-to-r from-black via-[#5F638B] to-black"></div>

      {/* Footer */}

      <footer className=" pt-[6rem] pb-[12rem] sm:px-[7rem] bg-gradient-to-b from-[#1C2232]/40 to-[#020513]/80 ">
        <div className="flex flex-col gap-[5rem] sm:flex-row items-center justify-between max-container max-sm:px-[1.6rem]">
          <div className="w-full max-w-[43.8rem]">
            <div className="flex items-center gap-[.8rem] max-w-max ">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
              <span className="text-white text-[2.8rem] leading-[3.59rem] tracking-[.065rem] [font-family:NexaBold]">
                verifier
              </span>
            </div>
            <h2 className="font-medium text-[1.6rem] text-[#F0F0F0] leading-[112%] pt-[1rem] pb-[2rem]">
              2024 Verifier. All rights reserved.
            </h2>
            <p className="text-[1.4rem] text-[#A3A3A3]">
              All trademarks, logos, and brand names are the property of their
              respective owners.
            </p>
          </div>

          <div className="font-medium text-[1.6rem] leading-[112%] text-[#F0F0F0] flex items-center justify-center gap-[11.3rem]">
            <p>Terms and conditions</p>
            <p>Privacy policy </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
