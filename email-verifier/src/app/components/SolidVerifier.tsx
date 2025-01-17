import React from "react";
import Image from "next/image";

const SolidVerifier: React.FC = () => {
    const images = [
        "/Logos & Images/icon_01.svg",
        "/Logos & Images/icon11.svg",
        "/Logos & Images/icon22.svg",
        "/Logos & Images/icon33.svg",
        "/Logos & Images/icon44.svg",
        "/Logos & Images/icon55.svg",
        "/Logos & Images/icon66.svg",
        "/Logos & Images/icon77.svg",
        "/Logos & Images/icon88.svg",
        "/Logos & Images/icon99.svg",
        "/Logos & Images/icon101.svg",
        "/Logos & Images/icon102.svg",
    ];

    return (
        <div
            style={{
                display: "flex",
                backgroundColor: "#09061A",
                minHeight: "100vh",
                padding: "20px",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop:"200px",
            }}
        >
            {/* Left Section */}
            <div style={{
                width: "33.333%",
                paddingRight: "40px",
                marginTop: "20px"
            }}>
                <h1
                    style={{
                        fontSize: "52px",
                        fontWeight: 500,
                        lineHeight: "58.24px",
                        color: "#FFFFFF",
                        fontFamily: "Montserrat, sans-serif",
                    }}
                >
                    Rock solid email verification
                </h1>
                <p
                    style={{
                        fontSize: "18px",
                        lineHeight: "21.94px",
                        color: "#E0E0E0",
                        fontFamily: "Montserrat, sans-serif",
                        marginTop: "16px",
                    }}
                >
                    Clean, optimize, and <br />supercharge your email lists.
                </p>
                <button
                    style={{
                        width: "140px",
                        height: "52px",
                        borderRadius: "12px",
                        color: "#FFFFFF",
                        fontWeight: 500,
                        marginTop: "24px",
                        background:
                            "linear-gradient(84.11deg, #531FAD 0%, #3A78D0 55.19%, #1683DC 110.37%)",
                    }}
                >
                    Dive in!
                </button>
            </div>

            {/* Right Section */}
            <div
                style={{
                    width: "802px",
                    gap: "20px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                }}
            >
                {[
                    {
                        title: "Disposable email detection",
                        description:
                            "Verifier detects & removes temp emails for a clean, reliable list.",
                    },
                    {
                        title: "Hard bounce prevention",
                        description:
                            "Efficiently eliminate undeliverable emails due to non-existent addresses.",
                    },
                    {
                        title: "Soft bounce prevention",
                        description:
                            "Verifier spots soft bounce issues for successful email delivery.",
                    },
                    {
                        title: "Email verification API",
                        description:
                            "Integrate our email verification software to remove inaccurate data.",
                    },
                    {
                        title: "Catch-All email detection",
                        description:
                            "Detect and remove catch-all domains to assess your email risk.",
                    },
                    {
                        title: "MX record validation",
                        description:
                            "Validate email authenticity with advanced MX record checks.",
                    },
                    {
                        title: "SMTP provider identification",
                        description:
                            "Automatically identify email providers to enhance targeting.",
                    },
                    {
                        title: "Email syntax validation",
                        description:
                            "Syntax check ensures only RFC-compliant emails remain.",
                    },
                    {
                        title: "Email domain validation",
                        description:
                            "Confirm domain functionality with our verification process.",
                    },
                    {
                        title: "SMTP verification",
                        description:
                            "Evaluate and analyze email deliverability for valuable insights.",
                    },
                    {
                        title: "Anti-greylisting technology",
                        description:
                            "Trust Verifier for accurate email verification with anti-greylisting tech.",
                    },
                    {
                        title: "Real-time results",
                        description:
                            "Track the real-time results of your email verification as we process the list.",
                    },
                ].map((card, index) => (
                    <div
                        key={index}
                        style={{
                            width: "254px",
                            height: "292px",
                            padding: "48px 18px",
                            gap: "28px",
                            borderRadius: "16px",
                            background:
                                "radial-gradient(191.31% 100% at 50% 0%, #281E38 0%, rgba(11, 8, 28, 0.6) 100%)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                    >
                        <Image
                            src={images[index]}  // Using dynamic image source based on index
                            alt={`icon_${index}`}
                            width={50}
                            height={50}
                        />
                        <h3
                            style={{
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: "24.38px",
                                color: "#F0F0F0",
                                fontFamily: "Montserrat, sans-serif",
                                marginTop:"16px",
                            }}
                        >
                            {card.title}
                        </h3>
                        <p
                            style={{
                                fontSize: "15px",
                                lineHeight: "18.29px",
                                color: "#E0E0E0",
                                fontFamily: "Montserrat, sans-serif",
                                marginTop: "16px",
                            }}
                        >
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SolidVerifier;