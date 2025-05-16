"use client"

import { Outlet, NavLink, Link } from "react-router-dom"
import { useState } from "react"
import Footer from "./Footer"

const Layout = ({ isAuthenticated, onLogout }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <div className="app-container">
            <header className="header">
                <Link to="/" className="logo">
                    {/* <img src="/logo.png" alt="Auth" /> */}
                    <span>Auth System</span>
                </Link>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? "✕" : "☰"}
                </button>

                <nav>
                    <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Home
                            </NavLink>
                        </li>
                        {!isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <NavLink
                                        to="/customer/register"
                                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                    >
                                        Customer Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/admin/register"
                                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                    >
                                        Admin Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin/login" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                        Login
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button
                                        onClick={onLogout}
                                        className="nav-link"
                                        style={{ background: "none", border: "none", cursor: "pointer" }}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>

            <main className="main-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout
