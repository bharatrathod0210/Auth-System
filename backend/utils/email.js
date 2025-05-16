import nodemailer from "nodemailer"

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Send verification email
export const sendVerificationEmail = async (email, verificationCode) => {
  try {
    // For development, log the verification code
    if (process.env.NODE_ENV === "development") {
      console.log(`Verification code for ${email}: ${verificationCode}`)
    }

    // In production, send actual email
    if (process.env.NODE_ENV === "production") {
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Email Verification",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 5px;">
            <h1 style="color: #4a6cf7; text-align: center;">Verify Your Email</h1>
            <p style="font-size: 16px; line-height: 1.5;">Thank you for registering! Please use the verification code below to complete your registration:</p>
            <div style="background-color: #f3f4f6; padding: 15px; text-align: center; border-radius: 5px; margin: 20px 0;">
              <h2 style="font-size: 24px; letter-spacing: 5px; color: #1f2937;">${verificationCode}</h2>
            </div>
            <p style="font-size: 16px; line-height: 1.5;">This code will expire in 1 hour.</p>
            <p style="font-size: 16px; line-height: 1.5;">If you did not request this verification, please ignore this email.</p>
          </div>
        `,
      }

      await transporter.sendMail(mailOptions)
    }

    return true
  } catch (error) {
    console.error("Email sending error:", error)
    return false
  }
}
