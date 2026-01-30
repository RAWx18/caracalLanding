export const getEarlyAccessEmailHtml = (firstName: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #000000;
      color: #ffffff;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .header {
      border-bottom: 1px solid #1a1a1a;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .logo {
      font-family: monospace;
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 2px;
      color: #cdff3e;
    }
    .content {
      line-height: 1.6;
    }
    .title {
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: -0.02em;
    }
    .footer {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #1a1a1a;
      font-size: 12px;
      color: #666666;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #cdff3e;
      color: #000000;
      text-decoration: none;
      font-weight: bold;
      font-size: 14px;
      margin-top: 20px;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">GARUDEXLABS.COM</div>
    </div>
    <div class="content">
      <h1 class="title">ACCESS GRANTED (PENDING)</h1>
      <p>Hello ${firstName},</p>
      <p>Thank you for your interest in Caracal. Your request for early access has been received and is currently under review by our security team.</p>
      <p>Caracal is the infrastructure layer for trusted AI agents, providing identity, permissions, and transparency for the agentic era.</p>
      <p>We will notify you as soon as your environment is ready.</p>
      <a href="https://caracal.ai" class="button">Visit Dashboard</a>
    </div>
    <div class="footer">
      &copy; 2026 GARUDEXLABS.COM / IDENTITY FOR AGENTS / ALL RIGHTS RESERVED
    </div>
  </div>
</body>
</html>
`;
