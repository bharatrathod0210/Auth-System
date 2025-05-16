import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container">
      <div style={{ textAlign: "center", padding: "5rem 0" }}>
        <h1 style={{ fontSize: "5rem", marginBottom: "1rem", fontWeight: "700" }}>404</h1>
        <h2>Page Not Found</h2>
        <p style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
