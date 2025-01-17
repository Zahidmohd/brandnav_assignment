'use client';
import React, { useState } from "react";
import Image from "next/image";

const EmailVerifier: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false); // State to toggle progress bar
  const [email, setEmail] = useState(""); // State to store email input
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleVerify = () => {
    if (email) {
      setIsVerifying(true); // Show verifying UI
      setTimeout(() => {
        setIsVerifying(false);
        setShowModal(true); // Show modal after progress
      }, 2000); // 2 seconds delay for progress bar
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #1E1E2F, #0F0F1F)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
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
            Reduce bounce rate and improve your email marketing <br /> performance with our verifier.
          </p>

          {/* Conditional Rendering */}
          {!isVerifying ? (
            <div
              style={{
                width: "602px",
                padding: "6px 6px 6px 28px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderRadius: "18px",
                border: "1px solid",
                margin: "0 auto",
                background:
                  "linear-gradient(90deg, rgba(69, 88, 143, 0.8) 0%, rgba(48, 59, 97, 0.8) 50.5%, rgba(39, 42, 73, 0.8) 100%)",
              }}
            >
              <input
                type="email"
                placeholder="Enter an email to verify"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onClick={handleVerify}
                style={{
                  padding: "14px 30px",
                  borderRadius: "12px",
                  backgroundColor: "#1892F5",
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: "linear-gradient(84.11deg, #2D58BD 0%, #3A78D0 55.19%, #1892F5 110.37%)",
                  boxShadow: "0px 0px 28px -1px #58DAF247",
                }}
              >
                Verify
              </button>
            </div>
          ) : (
            <div>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#E0E0E0",
                }}
              >
                Verifying your email in real-time...
              </p>
              <div
                style={{
                  width: "100%",
                  height: "4px",
                  marginTop: "20px",
                  background: "#444",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, #3A78D0, #1892F5)",
                    animation: "progress 2s linear",
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#1E1E2F",
              padding: "40px",
              borderRadius: "16px",
              textAlign: "center",
              color: "white",
            }}
          >
            <h2>One last step!</h2>
            <p>Make sure to sign up before you get your result. We promise it won’t take long.</p>
            <button
              onClick={handleModalClose}
              style={{
                padding: "14px 30px",
                borderRadius: "12px",
                backgroundColor: "#1892F5",
                color: "white",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Take me in
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ marginTop: "90px" }}>
        <div style={{ width: "1080px", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "30px",
              color: "#E0E0E0",
              paddingBottom: "90px",
            }}
          >
            Modern companies are using <span style={{ fontWeight: 600 }}>Verifier</span>
          </p>
          <Image
            src="/Logos & Images/testimonial section.png"
            width={1080}
            height={43.07}
            alt="Testimonials"
          />
        </div>
      </footer>
    </div>
  );
};

export default EmailVerifier;
