import Image from "next/image";
import Button from "./Button";

const Verifier = () => {
  return (
    <main className="max-container px-[1.6rem]">
      <section
        className=" pb-[15.6rem] relative before:-translate-x-1/2 before:-translate-y-2/3
       before:absolute before:w-[1rem] before:h-[1rem] before:[background-image:radial-gradient(#383844,#383844)]  
        before:rounded-full before:top-1/2 before:left-1/2 before:[backdrop-fliter:blur(70rem)]
        before:[box-shadow:0px_0px_300px_150px_rgba(56,56,68,1)] "
      >
        <div className="max-w-[114rem] mx-auto relative z-10">
          <h1 className="text-[5.8rem] font-medium text-[#F0F0F0] leading-[124%] text-center mb-[8rem]">
            Who is using Verifier?
          </h1>

          {/* Cards */}
          <div className="flex gap-[2rem] flex-wrap items-center justify-center">
            {/* 1st card */}
            <div>
              <div className="p-[2.4rem] pb-[3.5rem] rounded-[1.6rem] border-[.235rem] border-[#484554] [background-image:radial-gradient(at_top,#272436,#0B081C,#09061A)] max-w-[39.4rem] mb-[2rem]">
                <Image src="/user.svg" alt="icon" width={60} height={60} />
                <h1 className="text-[#F0F0F0] text-[2.4rem] font-medium mt-[2.2rem]">
                  Sales and marketing teams
                </h1>
              </div>

              <div className="p-[2.4rem] pb-[3.5rem] rounded-[1.6rem] border-[.235rem] border-[#484554] [background-image:radial-gradient(at_top,#272436,#0B081C,#09061A)] max-w-[39.4rem]">
                <Image src="/comp.svg" alt="icon" width={60} height={60} />
                <h1 className="text-[#F0F0F0] text-[2.4rem] font-medium  mt-[2.2rem]">
                  Sales and marketing teams
                </h1>
              </div>
            </div>

            {/* 2nd card */}
            <div className="flex-1  p-[2.4rem]  rounded-[1.6rem] border-[.235rem] border-[#484554] [background-image:radial-gradient(at_top,#272436,#0B081C,#09061A)]">
              <h1 className="text-[3.6rem] mb-[5.8rem] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#EBEBEB] to-[#A3A3A3]">
                Irreplaceable tool for businesses
              </h1>
              <Image src="/comp.svg" alt="icon" width={60} height={60} />
              <h2 className="text-[#F0F0F0] text-[2.4rem] font-medium mt-[2.2rem]">
                Service providers
              </h2>
            </div>

            {/* 3rd card */}
            <div>
              <div className="p-[2.4rem] pb-[3.5rem] rounded-[1.6rem] border-[.235rem] border-[#484554] [background-image:radial-gradient(at_top,#272436,#0B081C,#09061A)] max-w-[39.4rem] mb-[2rem]">
                <Image src="/user.svg" alt="icon" width={60} height={60} />
                <h1 className="text-[#F0F0F0] text-[2.4rem] font-medium mt-[2.2rem]">
                  Sales and marketing teams
                </h1>
              </div>

              <div className="p-[2.4rem] pb-[3.5rem] rounded-[1.6rem] border-[.235rem] border-[#484554] [background-image:radial-gradient(at_top,#272436,#0B081C,#09061A)] max-w-[39.4rem]">
                <Image src="/comp.svg" alt="icon" width={60} height={60} />
                <h1 className="text-[#F0F0F0] text-[2.4rem] font-medium mt-[2.2rem]">
                  Sales and marketing teams
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[3.2rem]">
          <Button title="Dive in" textSize="text-[2rem]" />
        </div>
      </section>
    </main>
  );
};

export default Verifier;
