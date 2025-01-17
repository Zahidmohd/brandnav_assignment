import React from "react";
import Image from "next/image";
import { features } from "process";

const Features: React.FC = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#09061A]"
            style={{
                backgroundImage: "url('/Logos & Images/background blur.svg')",
                backgroundSize: "cover",
            }}
        >
            <div className="w-full max-w-[1200px] px-4 py-6">
                <div className="text-center">
                    <h1 className="font-montserrat text-[58px] font-medium leading-[64.96px] text-[#F0F0F0] mb-6">
                        World’s most accurate email verifier and validator online
                    </h1>
                    <p className="font-montserrat text-[18px] font-normal leading-[21.94px] text-left mb-12 text-[#E0E0E0]">
                        Clean and validate your email addresses in just one click
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/Logos & Images/icon_4.svg"
                                alt="icon"
                                width={27.2}
                                height={16.77}
                            />
                            <p className="font-montserrat text-[24px] font-normal leading-[30px] text-[#C2C2C2]">
                                Bulk email verifier
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <p className="font-montserrat text-[24px] font-semibold leading-[30px] text-[#E0E0E0]">
                                Verify your email lists effortlessly
                            </p>
                            <p className="font-montserrat text-[16px] font-normal leading-[19.5px] text-[#E0E0E0]">
                                Use the bulk email verifier to improve email deliverability and sender
                                reputation.
                            </p>
                            <div className="flex flex-col gap-4 text-[#E0E0E0]">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/Logos & Images/check 1.png"
                                        alt="check"
                                        width={18}
                                        height={18}
                                    />
                                    <p className="font-montserrat text-[16px] font-normal leading-[19.5px]">
                                        Remove wrong emails
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/Logos & Images/check 1.png"
                                        alt="check"
                                        width={18}
                                        height={18}
                                    />
                                    <p className="font-montserrat text-[16px] font-normal leading-[19.5px]">
                                        Avoid spam traps
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/Logos & Images/check 1.png"
                                        alt="check"
                                        width={18}
                                        height={18}
                                    />
                                    <p className="font-montserrat text-[16px] font-normal leading-[19.5px]">
                                        Reduce bounces
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="w-[140px] h-[52px] px-[32px] py-[14px] rounded-[12px] border border-solid mt-6 "
                            style={{
                                color:"rgba(255, 255, 255, 1)",
                                background: 'linear-gradient(84.11deg, #531FAD 0%, #3A78D0 55.19%, #1683DC 110.37%)',
                                borderImageSource: 'linear-gradient(180deg, #7AA7EA 0%, #4A2FAC 50%, #4837B0 100%)',
                                borderImageSlice: 0,
                            }}
                        >
                            Dive in!
                        </button>
                    </div>

                    <div className="flex justify-center items-center">
                        <Image
                            src="/Logos & Images/image 1.png"
                            alt="image 1"
                            width={421}
                            height={445}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="flex justify-center items-center">
                        <Image
                            src="/Logos & Images/image 3.svg"
                            alt="image 1"
                            width={511}
                            height={379.55}
                        />
                    </div>

                    <div className="flex flex-col items-start gap-6">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/Logos & Images/Frame 1000002681.svg"
                                alt="frame"
                                width={30}
                                height={30}
                            />
                            <p className="font-montserrat text-[24px] font-normal leading-[30px] text-[#C2C2C2]">
                                Email Verification API
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <p className="font-montserrat text-[24px] font-semibold leading-[30px] text-[#E0E0E0]">
                                Prevent inaccurate data with real-time email validation
                            </p>
                            <p className="font-montserrat text-[16px] font-normal leading-[19.5px] text-[#E0E0E0]">
                                Guard your system against inaccurate data by instantly filtering out
                                invalid addresses!
                            </p>
                            <div className="flex flex-col gap-4 text-[#E0E0E0]">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/Logos & Images/check 1.png"
                                        alt="check"
                                        width={18}
                                        height={18}
                                    />
                                    <p className="font-montserrat text-[16px] font-normal leading-[19.5px]">
                                        Elegant and secure HTTPS-based RESTful API, with JSON as its core data
                                        format
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/Logos & Images/check 1.png"
                                        alt="check"
                                        width={18}
                                        height={18}
                                    />
                                    <p className="font-montserrat text-[16px] font-normal leading-[19.5px]">
                                        Validate emails before they enter your database
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/Logos & Images/check 1.png"
                                        alt="check"
                                        width={18}
                                        height={18}
                                    />
                                    <p className="font-montserrat text-[16px] font-normal leading-[19.5px]">
                                        Integrate the Verifier&apos;s real-time API into your website&apos;s registration
                                        process.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="w-[140px] h-[52px] px-[32px] py-[14px] rounded-[12px] border border-solid mt-6"
                            style={{
                                background: 'linear-gradient(84.11deg, #531FAD 0%, #3A78D0 55.19%, #1683DC 110.37%)',
                                borderImageSource: 'linear-gradient(180deg, #7AA7EA 0%, #4A2FAC 50%, #4837B0 100%)',
                                borderImageSlice: 0,
                            }}
                        >
                            Dive in!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;