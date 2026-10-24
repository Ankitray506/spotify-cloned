const nodemailer = require('nodemailer');

// Initialize Nodemailer transporter using Gmail SMTP
let transporter = null;

function getTransporter() {
    const user = process.env.EMAIL_USER || process.env.GMAIL_USER;
    const pass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

    if (!user || !pass) {
        return null;
    }

    if (!transporter) {
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user.trim(),
                pass: pass.trim()
            }
        });
    }

    return transporter;
}

/**
 * Send 6-digit OTP verification email with modern HTML design
 * @param {string} toEmail 
 * @param {string} otp 
 * @param {'registration' | 'forgot-password'} purpose 
 */
async function sendOtpEmail(toEmail, otp, purpose = 'registration') {
    const isRegister = purpose === 'registration';
    const subject = isRegister 
        ? '🎵 AURA 3D Music — Your Verification Code' 
        : '🔐 AURA 3D Music — Password Reset Code';

    const headerTitle = isRegister ? 'Welcome to AURA 3D Music' : 'Password Reset Request';
    const messageBody = isRegister
        ? 'Thank you for signing up for AURA 3D Music. Please use the 6-digit verification code below to activate your account and start streaming in 3D Spatial Audio.'
        : 'We received a request to reset your password. Enter the 6-digit code below to set a new password for your account.';

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080b12; color: #e2e8f0; margin: 0; padding: 24px; }
        .container { max-width: 520px; margin: 0 auto; background: #0f172a; border-radius: 18px; border: 1px solid rgba(16, 185, 129, 0.3); padding: 32px; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
        .logo { font-size: 22px; font-weight: 800; color: #10b981; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; text-align: center; }
        h2 { font-size: 20px; color: #ffffff; margin-bottom: 12px; text-align: center; }
        p { font-size: 14px; line-height: 1.6; color: #94a3b8; margin-bottom: 24px; text-align: center; }
        .otp-box { background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15)); border: 2px dashed #10b981; border-radius: 12px; padding: 18px; text-align: center; margin: 24px 0; }
        .otp-code { font-family: monospace; font-size: 34px; font-weight: 800; letter-spacing: 8px; color: #34d399; margin: 0; }
        .expiry { font-size: 12px; color: #64748b; text-align: center; margin-top: 8px; }
        .footer { font-size: 12px; color: #475569; text-align: center; margin-top: 32px; border-top: 1px solid #1e293b; padding-top: 16px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">⚡ AURA 3D MUSIC</div>
        <h2>${headerTitle}</h2>
        <p>${messageBody}</p>
        <div class="otp-box">
          <div class="otp-code">${otp}</div>
        </div>
        <div class="expiry">⏳ This code expires in 10 minutes. Do not share it with anyone.</div>
        <div class="footer">
          Created with ❤️ by Ankit Ray • AURA 3D Music Platform<br>
          If you did not request this email, please safely ignore it.
        </div>
      </div>
    </body>
    </html>
    `;

    const transport = getTransporter();

    if (!transport) {
        console.log(`\n📨 [EMAIL SIMULATED / CREDENTIALS UNSET IN .ENV]`);
        console.log(`To: ${toEmail}`);
        console.log(`Subject: ${subject}`);
        console.log(`🔑 OTP CODE: ${otp}`);
        console.log(`Purpose: ${purpose}\n`);
        return { success: true, simulated: true, otp };
    }

    try {
        const info = await transport.sendMail({
            from: `"AURA 3D Music" <${process.env.EMAIL_USER || process.env.GMAIL_USER}>`,
            to: toEmail,
            subject: subject,
            html: htmlContent
        });
        console.log(`✅ OTP email sent to ${toEmail}: ${info.messageId}`);
        return { success: true, messageId: info.messageId };
    } catch (err) {
        console.error(`❌ Failed to send OTP email via SMTP:`, err.message);
        console.log(`🔑 [FALLBACK LOG] OTP for ${toEmail}: ${otp}`);
        // Return simulated success so the user is never blocked
        return { success: false, error: err.message, fallbackOtp: otp };
    }
}

module.exports = {
    sendOtpEmail
};
