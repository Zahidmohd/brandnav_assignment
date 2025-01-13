import before from "../../../public/before svg.svg";
import after from "../../../public/after svg.svg";
import Image from "next/image";

export default function DataAccuracy() {
  return (
    <div className="min-h-screen bg-[#EFF2F7] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-2xl md:text-[28px] font-bold text-[#2A2665] mb-10 max-w-2xl mx-auto text-left sm:text-center">
          Fix data accuracy problems
          <br />
          with BrandNav
        </h1>

        {/* Before/After Container */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-0 max-w-6xl mx-auto h-full w-full justify-center">
          <div className="flex justify-center items-center px-[20px] md:justify-end lg:pr-[50px]">
            <Image
              src={before}
              height={380}
              width={370}
              alt="Before Image"
              className="lg:mr-[-30px]"
            />
          </div>
          <div className="flex justify-center items-center px-[20px] md:justify-start lg:pl-[50px]">
            <Image
              src={after}
              height={450}
              width={450}
              alt="After Image"
              className="lg:ml-[-30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
