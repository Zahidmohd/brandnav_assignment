import React from "react";
import Image from "next/image";

const EmailVerifier: React.FC = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to bottom, #1E1E2F, #0F0F1F)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", // Centers both main content and footer vertically
                color: "white",
                textAlign: "center", // Centers text horizontally by default
            }}
        >
            <nav
                style={{
                    position: "absolute",
                    top: "26px",
                    left: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "150px",
                    height: "40px",
                }}
            >
                <Image src="/Logos & Images/Frame 1000003104.png" alt="Logo" width={40} height={40} />
                <span
                    style={{
                        fontFamily: "Nexa-Bold",
                        fontSize: "28px",
                        fontWeight: 400,
                        lineHeight: "35.9px",
                        letterSpacing: "0.02em",
                        textAlign: "left",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                        width: "102px",
                        height: "36px",
                    }}
                >
                    verifier
                </span>
            </nav>

            {/* Main Content */}
            <main>
                <div style={{ width: "1140px" }}>
                    <h1
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "72px",
                            color: "#EBEBEB",
                            fontWeight: 600,
                            lineHeight: "74px",
                        }}
                    >
                        Email Checker
                    </h1>
                    <span
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "72px",
                            color: "#A3A3A3",
                            fontWeight: 400,
                            lineHeight: "74px",
                        }}
                    >
                        and <span style={{ fontWeight: 600 }}>Verifier</span>
                    </span>
                    <p
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "18px",
                            fontWeight: 400,
                            lineHeight: "30px",
                            color: "#E0E0E0",
                            margin: "20px 0",
                        }}
                    >
                        Reduce bounce rate and improve your email marketing <br />performance with our verifier.
                    </p>
                    <div
                        style={{
                            width: "602px",
                            padding: "6px 6px 6px 28px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            borderRadius: "18px",
                            border: "1px solid",
                            margin: "0 auto", // Centers the input box horizontally
                            background: "linear-gradient(90deg, rgba(69, 88, 143, 0.8) 0%, rgba(48, 59, 97, 0.8) 50.5%, rgba(39, 42, 73, 0.8) 100%)",
                            borderImageSource: "linear-gradient(90.65deg, #332890 0%, #404B7A 100%)", // Added border gradient
                            borderImageSlice: 0,
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter an email to verify"
                            style={{
                                flexGrow: 1,
                                fontFamily: "Montserrat",
                                fontSize: "18px",
                                fontWeight: 500,
                                border: "none",
                                outline: "none",
                                color: "#fff",
                                background: "transparent",
                            }}
                        />
                        <button
                            style={{
                                padding: "14px 30px",
                                borderRadius: "12px",
                                backgroundColor: "#1892F5", // Fallback color for browsers that don't support gradient
                                color: "white",
                                fontFamily: "Montserrat",
                                fontSize: "18px",
                                fontWeight: 600,
                                cursor: "pointer",
                                background: "linear-gradient(84.11deg, #2D58BD 0%, #3A78D0 55.19%, #1892F5 110.37%)", // Gradientackground
                                boxShadow: "0px 0px 28px -1px #58DAF247",
                            }}
                        >
                        Verify
                    </button>
                </div>
        </div>
            </main >

    {/* Footer */ }
    <footer  style = {{ marginTop: "90px" }}>
        <div style={{ width: "1080px", textAlign: "center" }}>
            <p
                style={{
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    color: "#E0E0E0",
                    paddingBottom:"90px"
                }}
            >
                Modern companies are using{" "}
                <span style={{ fontWeight: 600 }}>Verifier</span>
            </p>
            <Image
                src="/Logos & Images/testimonial section.png"
                width={1080}
                height={43.07}
                alt="Testimonials"
            />
        </div>
            </footer >
        </div >
    );
};
export default EmailVerifier;