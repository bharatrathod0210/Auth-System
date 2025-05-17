"use client";

import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  // For responsive design
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update width on resize
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  // Reusable styles
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    flexCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    flexColumn: {
      display: "flex",
      flexDirection: "column",
    },
    textCenter: {
      textAlign: "center",
    },
    gradientText: {
      background: "linear-gradient(90deg, #2563eb, #4f46e5, #7e22ce)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "transparent",
    },
    buttonBase: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px 30px",
      borderRadius: "10px",
      fontWeight: "600",
      fontSize: "1rem",
      textDecoration: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      minWidth: windowWidth < 640 ? "100%" : "220px",
    },
  };

  return (
    <>
      {/* Hero Section with improved gradient and layout */}
      <section
        style={{
          ...styles.flexCenter,
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f0f7ff, #e6f0ff, #edf5ff)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0) 70%)",
          }}
        ></div>

        <div style={{ ...styles.container, position: "relative", zIndex: 1 }}>
          <div
            style={{
              ...styles.textCenter,
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(8px)",
                padding: "8px 16px",
                borderRadius: "50px",
                marginBottom: "24px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
              }}
            >
              <span style={{ color: "#2563eb", fontWeight: "500" }}>
                Enterprise-Grade Security
              </span>
            </div>

            <h1
              style={{
                ...styles.gradientText,
                fontSize: windowWidth < 768 ? "2.5rem" : "3.5rem",
                fontWeight: "800",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Secure Authentication System
            </h1>
            <p
              style={{
                fontSize: windowWidth < 768 ? "1.1rem" : "1.25rem",
                color: "#64748b",
                marginBottom: "2.5rem",
                lineHeight: 1.6,
                maxWidth: "700px",
                margin: "0 auto 2.5rem",
              }}
            >
              A comprehensive role-based authentication solution with advanced
              access control for customers and administrators
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: windowWidth < 640 ? "column" : "row",
                gap: "16px",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Link
                to="/customer/register"
                style={{
                  ...styles.buttonBase,
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#1d4ed8";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 12px rgba(37, 99, 235, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#2563eb";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <span>Register as Customer</span>
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "1.2rem",
                    transition: "transform 0.3s ease",
                  }}
                >
                  →
                </span>
              </Link>

              <Link
                to="/admin/register"
                style={{
                  ...styles.buttonBase,
                  backgroundColor: "#7e22ce",
                  color: "#ffffff",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#6b21a8";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 12px rgba(126, 34, 206, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#7e22ce";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <span>Register as Admin</span>
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "1.2rem",
                    transition: "transform 0.3s ease",
                  }}
                >
                  →
                </span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "24px",
                marginTop: "48px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#64748b",
                }}
              >
                <span style={{ marginRight: "8px" }}>🛡️</span>
                <span>Bank-level security</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#64748b",
                }}
              >
                <span style={{ marginRight: "8px" }}>⚡</span>
                <span>Lightning fast setup</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#64748b",
                }}
              >
                <span style={{ marginRight: "8px" }}>🕒</span>
                <span>24/7 monitoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            overflow: "hidden",
            lineHeight: "0",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              position: "relative",
              display: "block",
              width: "calc(100% + 1.3px)",
              height: "60px",
            }}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              style={{ fill: "#ffffff" }}
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section with improved cards */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div style={styles.container}>
          <div style={{ ...styles.textCenter, marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: windowWidth < 768 ? "2rem" : "2.5rem",
                fontWeight: "700",
                marginBottom: "16px",
                color: "#1e293b",
              }}
            >
              Key Features
            </h2>
            <div
              style={{
                width: "60px",
                height: "4px",
                background: "linear-gradient(90deg, #2563eb, #4f46e5)",
                margin: "0 auto 24px",
                borderRadius: "2px",
              }}
            ></div>
            <p
              style={{
                color: "#64748b",
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Our authentication system provides enterprise-grade security with
              a user-friendly experience
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                windowWidth < 768
                  ? "1fr"
                  : windowWidth < 1024
                  ? "1fr 1fr"
                  : "1fr 1fr 1fr",
              gap: "32px",
            }}
          >
            {/* Feature Card 1 */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f1f5f9",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  backgroundColor: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  fontSize: "24px",
                }}
              >
                🔐
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "12px",
                  color: "#1e293b",
                }}
              >
                Secure Authentication
              </h3>
              <p style={{ color: "#64748b", lineHeight: 1.6 }}>
                Industry-standard security practices with multi-factor
                authentication to keep your accounts safe and protected
              </p>
            </div>

            {/* Feature Card 2 */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f1f5f9",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  backgroundColor: "#f5f3ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  fontSize: "24px",
                }}
              >
                👥
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "12px",
                  color: "#1e293b",
                }}
              >
                Role-Based Access
              </h3>
              <p style={{ color: "#64748b", lineHeight: 1.6 }}>
                Granular permission controls with different access levels for
                customers and administrators with proper authorization
              </p>
            </div>

            {/* Feature Card 3 */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f1f5f9",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  backgroundColor: "#f0fdf4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  fontSize: "24px",
                }}
              >
                ✉️
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "12px",
                  color: "#1e293b",
                }}
              >
                Email Verification
              </h3>
              <p style={{ color: "#64748b", lineHeight: 1.6 }}>
                Verify user identities through secure email verification process
                with tamper-proof tokens and expiration controls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with improved gradient */}
      <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg, #2563eb, #4f46e5, #7e22ce)",
          color: "#ffffff",
        }}
      >
        <div style={styles.container}>
          <div
            style={{
              ...styles.textCenter,
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: windowWidth < 768 ? "2rem" : "2.5rem",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "40px",
                maxWidth: "600px",
                margin: "0 auto 40px",
              }}
            >
              Join thousands of users who trust our authentication system for
              their applications
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: windowWidth < 640 ? "column" : "row",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              <Link
                to="/admin/login"
                style={{
                  ...styles.buttonBase,
                  backgroundColor: "#ffffff",
                  color: "#2563eb",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f8fafc";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 12px rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <span>Login Now</span>
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "1.2rem",
                    transition: "transform 0.3s ease",
                  }}
                >
                  →
                </span>
              </Link>

              <Link
                to="/documentation"
                style={{
                  ...styles.buttonBase,
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "32px 0",
          backgroundColor: "#0f172a",
          color: "#94a3b8",
        }}
      >
        <div style={{ ...styles.container, ...styles.textCenter }}>
          <p>
            © {new Date().getFullYear()} Secure Authentication System. All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
