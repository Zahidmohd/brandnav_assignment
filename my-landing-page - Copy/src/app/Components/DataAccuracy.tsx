import before from "../../../public/before svg.svg";
import after from "../../../public/after svg.svg";
import Image from "next/image";

export default function DataAccuracy() {
  return (
    <div className="min-h-screen bg-[#EFF2F7] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-2xl md:text-[28px] font-bold text-[#2A2665] mb-10 max-w-2xl mx-auto text-left sm:text-center pl-10">
          Fix data accuracy problems<br />with BrandNav
        </h1>

        {/* Before/After Container */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-0 max-w-6xl mx-auto h-full w-full lg:mx-[100px] lg:pl-[180px]">
          <div className="flex justify-center items-center px-[20px]">
            <Image
              src={before}
              height={380}
              width={370}
              alt=""
              className="lg:mr-[-30px]"
            />
          </div>
          <div>
            <Image
              src={after}
              height={450}
              width={450}
              alt=""
              className="ml-14 lg:m-[-10px] lg:mt-[2px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
