import express from "express"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { sendVerificationEmail } from "../utils/email.js"

const router = express.Router()

// Register customer
router.post("/register/customer", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      })
    }

    // Generate verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    const verificationCodeExpires = new Date(Date.now() + 3600000) // 1 hour

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role: "customer",
      verificationCode,
      verificationCodeExpires,
    })

    await newUser.save()

    // Send verification email
    await sendVerificationEmail(email, verificationCode)

    res.status(201).json({
      success: true,
      message: "Customer registered successfully. Please check your email for verification code.",
    })
  } catch (error) {
    console.error("Registration error:", error)
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    })
  }
})

// Register admin
router.post("/register/admin", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      })
    }

    // Generate verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    const verificationCodeExpires = new Date(Date.now() + 3600000) // 1 hour

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role: "admin",
      verificationCode,
      verificationCodeExpires,
    })

    await newUser.save()

    // Send verification email
    await sendVerificationEmail(email, verificationCode)

    res.status(201).json({
      success: true,
      message: "Admin registered successfully. Please check your email for verification code.",
    })
  } catch (error) {
    console.error("Registration error:", error)
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    })
  }
})

// Verify email
router.post("/verify-email", async (req, res) => {
  try {
    const { email, verificationCode } = req.body

    // Find user by email
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    // Check if user is already verified
    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Email is already verified",
      })
    }

    // Check if verification code is valid
    if (user.verificationCode !== verificationCode) {
      return res.status(400).json({
        success: false,
        message: "Invalid verification code",
      })
    }

    // Check if verification code is expired
    if (user.verificationCodeExpires < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Verification code has expired",
      })
    }

    // Update user
    user.isVerified = true
    user.verificationCode = undefined
    user.verificationCodeExpires = undefined
    await user.save()

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    })
  } catch (error) {
    console.error("Verification error:", error)
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    })
  }
})

// Resend verification code
router.post("/resend-verification", async (req, res) => {
  try {
    const { email } = req.body

    // Find user by email
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    // Check if user is already verified
    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Email is already verified",
      })
    }

    // Generate new verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    const verificationCodeExpires = new Date(Date.now() + 3600000) // 1 hour

    // Update user
    user.verificationCode = verificationCode
    user.verificationCodeExpires = verificationCodeExpires
    await user.save()

    // Send verification email
    await sendVerificationEmail(email, verificationCode)

    res.status(200).json({
      success: true,
      message: "Verification code resent successfully",
    })
  } catch (error) {
    console.error("Resend verification error:", error)
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    })
  }
})

// Admin login
router.post("/login/admin", async (req, res) => {
  try {
    const { email, password } = req.body

    // Find user by email
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    // Check if user is an admin
    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Role customer is not allowed to login",
      })
    }

    // Check if user is verified
    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in",
      })
    }

    // Check password
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      })
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" })

    // Return user data without password
    const userData = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: userData,
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    })
  }
})

export default router
