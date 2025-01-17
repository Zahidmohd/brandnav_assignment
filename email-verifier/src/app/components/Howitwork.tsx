import React from "react";
import Image from "next/image";

const HowItWorks: React.FC = () => {
    return (
        <div
            style={{
                background:"#09061A",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    width: "884px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "72px",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h1
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "58px",
                            fontWeight: 500,
                            lineHeight: "65px",
                            color: "#F0F0F0",
                        }}
                    >
                        How it works
                    </h1>
                    <p
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "18px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            color: "#E0E0E0",
                            marginTop: "8px",
                        }}
                    >
                        It’s super easy to verify your email addresses with Verifier.
                    </p>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: "36px",
                    }}
                >
                    {/* Step 1 */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "218px",
                            textAlign: "center",
                        }}
                    >
                        <Image src="/Logos & Images/icon_1.svg" alt="icon_1" width={100} height={100} />
                        <h3
                            style={{
                                fontFamily: "Montserrat",
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "#F0F0F0",
                                marginTop: "16px",
                            }}
                        >
                            Upload
                        </h3>
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                fontSize: "16px",
                                fontWeight: 400,
                                lineHeight: "20px",
                                color: "#E0E0E0",
                                marginTop: "8px",
                            }}
                        >
                            Upload your email lists in .csv format
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "218px",
                            textAlign: "center",
                        }}
                    >
                        <Image src="/Logos & Images/icon_2.svg" alt="icon_2" width={100} height={100} />
                        <h3
                            style={{
                                fontFamily: "Montserrat",
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "#F0F0F0",
                                marginTop: "16px",
                            }}
                        >
                            Verify
                        </h3>
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                fontSize: "16px",
                                fontWeight: 400,
                                lineHeight: "20px",
                                color: "#E0E0E0",
                                marginTop: "8px",
                            }}
                        >
                            Let Verifier perform, ensuring email validity
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "218px",
                            textAlign: "center",
                        }}
                    >
                        <Image src="/Logos & Images/icon_3.svg" alt="icon_3" width={100} height={100} />
                        <h3
                            style={{
                                fontFamily: "Montserrat",
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "#F0F0F0",
                                marginTop: "16px",
                            }}
                        >
                            Download
                        </h3>
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                fontSize: "16px",
                                fontWeight: 400,
                                lineHeight: "20px",
                                color: "#E0E0E0",
                                marginTop: "8px",
                            }}
                        >
                            Download your clean and verified email list
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;