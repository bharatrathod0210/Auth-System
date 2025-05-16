"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [stats, setStats] = useState({
    totalUsers: 0,
    verifiedUsers: 0,
    admins: 0,
    customers: 0,
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/admin/login")
      return
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.data.success) {
          setUser(response.data.user)

          // Mock stats data (in a real app, this would come from the API)
          setStats({
            totalUsers: 124,
            verifiedUsers: 98,
            admins: 12,
            customers: 112,
          })
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
        setError("Failed to load user data. Please try logging in again.")
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setTimeout(() => {
          navigate("/admin/login")
        }, 2000)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [navigate])

  if (isLoading) {
    return (
      <div className="container">
        <div className="text-center" style={{ padding: "5rem 0" }}>
          <h2>Loading...</h2>
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "3px solid rgba(79, 70, 229, 0.3)",
                borderTop: "3px solid var(--primary-color)",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            ></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger" style={{ marginTop: "2rem" }}>
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">
            Welcome, {user?.firstName} {user?.lastName}
          </h1>
          <button onClick={onLogout} className="btn btn-primary">
            Logout
          </button>
        </div>

        <div className="row" style={{ display: "flex", flexWrap: "wrap", margin: "0 -1rem" }}>
          <div className="col" style={{ flex: "1 1 100%", padding: "0 1rem", marginBottom: "2rem" }}>
            <div className="dashboard-card">
              <h2>Your Profile</h2>
              <div style={{ marginTop: "1.5rem" }}>
                <div className="profile-item">
                  <div className="profile-label">Name:</div>
                  <div className="profile-value">
                    {user?.firstName} {user?.lastName}
                  </div>
                </div>
                <div className="profile-item">
                  <div className="profile-label">Email:</div>
                  <div className="profile-value">{user?.email}</div>
                </div>
                <div className="profile-item">
                  <div className="profile-label">Role:</div>
                  <div className="profile-value">
                    <span className={`badge ${user?.role === "admin" ? "badge-admin" : "badge-customer"}`}>
                      {user?.role}
                    </span>
                  </div>
                </div>
                <div className="profile-item">
                  <div className="profile-label">Email Verified:</div>
                  <div className="profile-value">
                    <span className={`badge ${user?.isVerified ? "badge-success" : "badge-warning"}`}>
                      {user?.isVerified ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {user?.role === "admin" && (
          <div className="row" style={{ display: "flex", flexWrap: "wrap", margin: "0 -1rem" }}>
            <div
              className="col"
              style={{ flex: "1 1 50%", padding: "0 1rem", marginBottom: "2rem", minWidth: "300px" }}
            >
              <div className="dashboard-card">
                <h2>System Statistics</h2>
                <div style={{ marginTop: "1.5rem" }}>
                  <div className="profile-item">
                    <div className="profile-label">Total Users:</div>
                    <div className="profile-value">{stats.totalUsers}</div>
                  </div>
                  <div className="profile-item">
                    <div className="profile-label">Verified Users:</div>
                    <div className="profile-value">{stats.verifiedUsers}</div>
                  </div>
                  <div className="profile-item">
                    <div className="profile-label">Admins:</div>
                    <div className="profile-value">{stats.admins}</div>
                  </div>
                  <div className="profile-item">
                    <div className="profile-label">Customers:</div>
                    <div className="profile-value">{stats.customers}</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col"
              style={{ flex: "1 1 50%", padding: "0 1rem", marginBottom: "2rem", minWidth: "300px" }}
            >
              <div className="dashboard-card">
                <h2>Quick Actions</h2>
                <div style={{ marginTop: "1.5rem" }}>
                  <button className="btn btn-primary" style={{ marginRight: "1rem", marginBottom: "1rem" }}>
                    View All Users
                  </button>
                  <button className="btn btn-secondary" style={{ marginRight: "1rem", marginBottom: "1rem" }}>
                    System Settings
                  </button>
                  <button className="btn btn-secondary" style={{ marginBottom: "1rem" }}>
                    Generate Reports
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
