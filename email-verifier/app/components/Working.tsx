import Image from "next/image";
import Button from "./Button";

const Working = () => {
  return (
    <main className="max-container bg-[#09061A] relative overflow-hidden  max-sm:px-[1.6rem]">
      <section className="text-center">
        <h1 className="font-medium text-[#F0F0F0] text-[5.8rem] leading-[112%]">
          How it works
        </h1>
        <p className="text-[1.8rem] text-[#E0E0E0] mt-[2.4rem] mb-[7.2rem]">
          It’s super easy to verify your email addresses with Verifier.
        </p>

        {/* Images */}

        <div className="flex flex-wrap gap-[11.5rem] justify-center items-center ">
          <div className="w-full max-w-[21.8rem] flex flex-col items-center justify-center text-center ">
            <Image src="/upload.svg" alt="upload" width={100} height={100} />
            <p className="flex flex-col">
              <span className="text-[#F0F0F0] text-[2rem] font-medium mt-[3.6rem] mb-[1.6rem] leading-[120%]">
                Upload
              </span>
              <span className="text-[#E0E0E0] text-[1.6rem] leading-[125%]">
                Upload your email lists in .csv format
              </span>
            </p>
          </div>
          <div className="w-full max-w-[21.8rem] flex flex-col items-center justify-center text-center ">
            <Image src="/verify.svg" alt="upload" width={100} height={100} />
            <p className="flex flex-col">
              <span className="text-[#F0F0F0] text-[2rem] font-medium mt-[3.6rem] mb-[1.6rem] leading-[120%]">
                Upload
              </span>
              <span className="text-[#E0E0E0] text-[1.6rem] leading-[125%]">
                Upload your email lists in .csv format
              </span>
            </p>
          </div>
          <div className="w-full max-w-[21.8rem] flex flex-col items-center justify-center text-center ">
            <Image src="/download.svg" alt="upload" width={100} height={100} />
            <p className="flex flex-col">
              <span className="text-[#F0F0F0] text-[2rem] font-medium mt-[3.6rem] mb-[1.6rem] leading-[120%]">
                Upload
              </span>
              <span className="text-[#E0E0E0] text-[1.6rem] leading-[125%]">
                Upload your email lists in .csv format
              </span>
            </p>
          </div>
        </div>

        {/* Curve section */}

        <section
          className="mt-[25rem]   bg-inherit relative after:absolute after:w-[90rem] after:h-[90rem] after:rounded-full
         after:bg-transparent after:-top-[0rem] after:left-1/2 after:-translate-x-1/2 z-[100]  after:z-[5] after:[box-shadow:0px_-5px_300px_52px_#372952]"
        >
          <div className="overflow-hidden h-[100rem]  absolute  left-0 top-0 w-full ">
            <div className="relative mx-auto  w-full  aspect-square z-[10]">
              <Image src="/bgwork.svg" alt="background" layout="fill" />
            </div>
          </div>

          {/* Heading*/}

          <div className="text-center  relative z-[100] max-w-[109.4rem] w-full mx-auto pt-[17.4rem] ">
            <h1 className="text-[3.8rem] sm:text-[5.8rem] font-medium leading-[112%] text-[#F0F0F0] max-w-[90.5rem] mx-auto">
              World’s most accurate email verifier and validator online
            </h1>

            <p className="text-[1.8rem] text-[#E0E0E0] mt-[2.4rem] mb-[7.6rem]">
              Clean and validate your email addresses in just one click
            </p>
          </div>

          {/* Cards */}

          <div className="  relative z-[100] max-w-[109.4rem] w-full mx-auto  text-start bg-[#09061A] ">
            {/* 1st card */}
            <div className="w-full  flex  flex-col lg:flex-row mx-auto pb-[12rem]">
              {/* left */}
              <div className=" max-w-[50rem] pb-[3.5rem] text-[#E0E0E0]">
                <div className="flex gap-[2rem] justify-start items-center">
                  <Image
                    src="/mailicon.svg"
                    alt="mail icon"
                    width={30}
                    height={30}
                  />
                  <h1 className="text-[2.4rem] text-[#C2C2C2] leading-[125%]">
                    Bulk email verifier
                  </h1>
                </div>
                <h1 className=" text-[2.4rem] font-semibold leading-[125%] mt-[2rem] mb-[3.2rem]">
                  Verify your email lists effortlessly
                </h1>
                <p className="text-[1.6rem]">
                  Use the bulk email verifier to improve email deliverability
                  and sender reputation.
                </p>

                <ul className="mt-[3.2rem] mb-[4rem] flex flex-col gap-[2rem]">
                  <li className="flex gap-[1.8rem] justify-start items-center">
                    <Image
                      src="/check.png"
                      alt="check icon"
                      width={18}
                      height={18}
                    />
                    <span className="text-[1.6rem]">Remove wrong emails</span>
                  </li>
                  <li className="flex gap-[1.8rem] justify-start items-center">
                    <Image
                      src="/check.png"
                      alt="check icon"
                      width={18}
                      height={18}
                    />
                    <span className="text-[1.6rem]">Avoid spam traps</span>
                  </li>
                  <li className="flex gap-[1.8rem] justify-start items-center">
                    <Image
                      src="/check.png"
                      alt="check icon"
                      width={18}
                      height={18}
                    />
                    <span className="text-[1.6rem]">Reduce bounces</span>
                  </li>
                </ul>

                <Button title="Dive in!" textSize="text-[2rem]" />
              </div>
              {/* right */}
              <div className=" flex-1  flex justify-center items-center">
                <Image
                  src="/image1.png"
                  alt="image 1"
                  width={431}
                  height={445}
                />
              </div>
            </div>

            {/* 2nd Card */}

            <div className="w-full  flex  max-lg:gap-8 flex-col lg:flex-row-reverse mx-auto">
              {/* left */}
              <div className=" max-w-[50rem] pb-[3.5rem] text-[#E0E0E0]">
                <div className="flex gap-[2rem] justify-start items-center">
                  <Image
                    src="/mailicon.svg"
                    alt="mail icon"
                    width={30}
                    height={30}
                  />
                  <h1 className="text-[2.4rem] text-[#C2C2C2] leading-[125%]">
                    Bulk email verifier
                  </h1>
                </div>
                <h1 className=" text-[2.4rem] font-semibold leading-[125%] mt-[2rem] mb-[3.2rem]">
                  Verify your email lists effortlessly
                </h1>
                <p className="text-[1.6rem]">
                  Use the bulk email verifier to improve email deliverability
                  and sender reputation.
                </p>

                <ul className="mt-[3.2rem] mb-[4rem] flex flex-col gap-[2rem]">
                  <li className="flex gap-[1.8rem] justify-start items-center">
                    <Image
                      src="/check.png"
                      alt="check icon"
                      width={18}
                      height={18}
                    />
                    <span className="text-[1.6rem]">Remove wrong emails</span>
                  </li>
                  <li className="flex gap-[1.8rem] justify-start items-center">
                    <Image
                      src="/check.png"
                      alt="check icon"
                      width={18}
                      height={18}
                    />
                    <span className="text-[1.6rem]">Avoid spam traps</span>
                  </li>
                  <li className="flex gap-[1.8rem] justify-start items-center">
                    <Image
                      src="/check.png"
                      alt="check icon"
                      width={18}
                      height={18}
                    />
                    <span className="text-[1.6rem]">Reduce bounces</span>
                  </li>
                </ul>

                <Button title="Dive in!" textSize="text-[2rem]" />
              </div>
              {/* right */}
              <div className=" flex-1  flex justify-start items-center">
                <Image
                  src="/image2.png"
                  alt="image 2"
                  width={511}
                  height={379}
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Working;
