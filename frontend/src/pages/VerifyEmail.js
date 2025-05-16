"use client"

import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const VerifyEmail = () => {
  const navigate = useNavigate()
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [email, setEmail] = useState("")
  const [resendDisabled, setResendDisabled] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const inputRefs = useRef([])

  useEffect(() => {
    // Get email from localStorage
    const userEmail = localStorage.getItem("userEmail")
    if (!userEmail) {
      navigate("/customer/register")
      return
    }

    setEmail(userEmail)

    // Focus on first input
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [navigate])

  useEffect(() => {
    let timer
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false)
    }

    return () => clearTimeout(timer)
  }, [countdown, resendDisabled])

  const handleInputChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return

    const newVerificationCode = [...verificationCode]
    newVerificationCode[index] = value
    setVerificationCode(newVerificationCode)

    // Auto-focus next input
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (!verificationCode[index] && index > 0) {
        const newVerificationCode = [...verificationCode]
        newVerificationCode[index - 1] = ""
        setVerificationCode(newVerificationCode)
        inputRefs.current[index - 1].focus()
      }
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text")

    // Check if pasted data is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const newVerificationCode = pastedData.split("")
      setVerificationCode(newVerificationCode)

      // Focus on last input
      if (inputRefs.current[5]) {
        inputRefs.current[5].focus()
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const code = verificationCode.join("")

    if (code.length !== 6) {
      setServerError("Please enter the complete 6-digit verification code")
      return
    }

    setIsLoading(true)
    setServerError("")
    setSuccessMessage("")

    try {
      const response = await axios.post(`http://localhost:5000/api/auth/verify-email`, {
        email,
        verificationCode: code,
      })

      if (response.data.success) {
        setSuccessMessage("Email verified successfully!")
        setTimeout(() => {
          navigate("/admin/login")
        }, 2000)
      }
    } catch (error) {
      console.error("Verification error:", error)
      setServerError(error.response?.data?.message || "Verification failed. Please check your code and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setIsLoading(true)
    setServerError("")
    setSuccessMessage("")

    try {
      const response = await axios.post(`http://localhost:5000/api/auth/resend-verification`, {
        email,
      })

      if (response.data.success) {
        setSuccessMessage("Verification code resent successfully!")
        setResendDisabled(true)
        setCountdown(60) // 60 seconds cooldown
      }
    } catch (error) {
      console.error("Resend code error:", error)
      setServerError(error.response?.data?.message || "Failed to resend verification code. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Verify Your Email</h1>
            <p>
              We've sent a verification code to <strong>{email}</strong>
            </p>
          </div>

          {serverError && <div className="alert alert-danger">{serverError}</div>}

          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          <form onSubmit={handleSubmit}>
            <div className="verification-code-container">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="verification-code-input"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify Email"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p>
              Didn't receive the code?{" "}
              {resendDisabled ? (
                <span>
                  Resend in <strong>{countdown}s</strong>
                </span>
              ) : (
                <button
                  onClick={handleResendCode}
                  className="link"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                  disabled={isLoading || resendDisabled}
                >
                  Resend Code
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail
