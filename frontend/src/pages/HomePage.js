import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #c4e0f9, #d2e4f7, #b2d9f7)",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem", color: "#2c3e50" }}>
                        Secure Authentication System
                    </h1>
                    <p style={{ fontSize: "1.2rem", color: "#6c757d", marginBottom: "2rem" }}>
                        A complete role-based authentication solution with customer and admin access control
                    </p>

                    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                        <Link
                            to="/customer/register"
                            style={{
                                display: "inline-block",
                                padding: "15px 30px",
                                backgroundColor: "#007bff",
                                color: "#ffffff",
                                textDecoration: "none",
                                fontSize: "1rem",
                                fontWeight: "600",
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
                                transition: "all 0.3s ease",
                                textAlign: "center",
                                minWidth: "220px",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#0056b3";
                                e.target.style.boxShadow = "0 6px 12px rgba(0, 86, 179, 0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#007bff";
                                e.target.style.boxShadow = "0 4px 8px rgba(0, 123, 255, 0.3)";
                            }}
                        >
                            Register as Customer
                        </Link>

                        <Link
                            to="/admin/register"
                            style={{
                                display: "inline-block",
                                padding: "15px 30px",
                                backgroundColor: "#28a745",
                                color: "#ffffff",
                                textDecoration: "none",
                                fontSize: "1rem",
                                fontWeight: "600",
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(40, 167, 69, 0.3)",
                                transition: "all 0.3s ease",
                                textAlign: "center",
                                minWidth: "220px",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#218838";
                                e.target.style.boxShadow = "0 6px 12px rgba(33, 136, 56, 0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#28a745";
                                e.target.style.boxShadow = "0 4px 8px rgba(40, 167, 69, 0.3)";
                            }}
                        >
                            Register as Admin
                        </Link>
                    </div>
                </div>
            </section>


            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🔐</div>
                            <h3 className="feature-title">Secure Authentication</h3>
                            <p className="feature-description">
                                Industry-standard security practices to keep your accounts safe and protected
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3 className="feature-title">Role-Based Access</h3>
                            <p className="feature-description">
                                Different access levels for customers and administrators with proper authorization
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">✉️</div>
                            <h3 className="feature-title">Email Verification</h3>
                            <p className="feature-description">Verify user identities through secure email verification process</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Get Started?</h2>
                        <p className="cta-description">
                            Join thousands of users who trust our authentication system for their applications
                        </p>
                        <Link to="/admin/login" className="btn btn-primary btn-lg">
                            Login Now
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
