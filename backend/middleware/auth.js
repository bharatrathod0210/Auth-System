import jwt from "jsonwebtoken"

export const authenticateToken = (req, res, next) => {
  // Get token from header
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    })
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    console.error("Token verification error:", error)
    res.status(403).json({
      success: false,
      message: "Invalid token",
    })
  }
}

export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admin role required.",
    })
  }

  next()
}
