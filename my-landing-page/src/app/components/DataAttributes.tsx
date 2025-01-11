import financial from "../../../public/financials.svg";
import companyName from "../../../public/company-name.svg";
import companyLocation from "../../../public/company-location.svg";
import countryCode from "../../../public/country-code.svg";
import employeeCount from "../../../public/employee-count.svg";
import industry from "../../../public/industry.svg";
import more from "../../../public/20-more.svg";
import phone from "../../../public/phone.svg";
import email from "../../../public/email.svg";
import jobtitle from "../../../public/job-title.svg";
import linkldin from "../../../public/linkedin.svg";
import Image from "next/image";


export default function DataAttributes() {
    const screenerAttributes = [
        { icon: financial, title: "Financials" },
        { icon: companyName, title: "Company Name\n& Website" },
        { icon: companyLocation, title: "Company\nlocation" },
        { icon: countryCode, title: "Country code" },
        { icon: employeeCount, title: "Employee count" },
        { icon: industry, title: "Industry" },
        { icon: more, title: "and 20+ more" },
      ];
    
      const enricherAttributes = [
        { icon: phone, title: "Phone" },
        { icon: email, title: "Email" },
        { icon: jobtitle, title: "Job title" },
        { icon: linkldin, title: "Linkedin" },
      ];
  return (
    <div className="min-h-screen bg-[#F8F7FF] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#2A2665] mb-2  max-w-2xl mx-auto text-left sm:text-center">
            Pinpoint your ideal customer with relevant data attributes
          </h2>
        </div>

        {/* Screener Attributes */}
        <div className="mb-16">
          <h3 className=" lg:text-[22px] md:text-[22px] text-[18px] text-[#007bff] font-semibold text-left sm:text-center mb-12">
            Screener attributes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {screenerAttributes.slice(0, 4).map((attribute, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-18 h-18  rounded-2xl flex items-center justify-center text-white mb-4">
                  <Image src={attribute.icon} alt={attribute.title} width={94} height={94} className="h-54 w-54" />
                </div>
                <p className="text-center text-[#2A2665] font-medium whitespace-pre-line">
                  {attribute.title}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8">
            {screenerAttributes.slice(4).map((attribute, index) => (
              <div key={index + 4} className="flex flex-col items-center">
                <div className="w-18 h-18 rounded-2xl flex items-center justify-center text-white mb-4">
                  <Image src={attribute.icon} alt={attribute.title} width={94} height={94} />
                </div>
                <p className="text-center text-[#2A2665] font-medium whitespace-pre-line">
                  {attribute.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enricher Attributes */}
        <div>
          <h3 className=" lg:text-[22px] md:text-[22px] text-[18px] text-[#007bff] text-left sm:text-center font-semibold mb-12">
            Enricher attributes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {enricherAttributes.map((attribute, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-18 h-18 rounded-2xl flex items-center justify-center text-white mb-4">
                  <Image src={attribute.icon} alt={attribute.title} width={94} height={94} />
                </div>
                <p className="text-center text-[#2A2665] font-medium">
                  {attribute.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

