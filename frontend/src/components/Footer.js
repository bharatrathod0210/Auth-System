import { Link } from "react-router-dom"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="copyright">&copy; {currentYear} Auth System. All rights reserved.</div>
                <ul className="footer-links">
                    <li>
                        <Link to="/" className="footer-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="footer-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="footer-link">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="footer-link">
                            Terms of Service
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
