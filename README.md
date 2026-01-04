# Pear Tree Well Website

A React/Vite application for Pear Tree Well mineral water company.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure email settings:
   - Copy `.env.example` to `.env` (if running locally)
   - Update the SMTP settings in `.replit` file for Replit deployment
   - For Gmail SMTP:
     - SMTP_HOST: smtp.gmail.com
     - SMTP_PORT: 587
     - SMTP_SECURE: false
     - SMTP_USER: websiteenquirypeartreewell@gmail.com
     - SMTP_PASS: your-app-password (not your regular password)
     - CONTACT_EMAIL: bmwtansley@gmail.com

3. For Gmail app passwords:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an app password for "Mail"
   - Use this app password as SMTP_PASS

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Contact Form

The contact form sends emails to the configured CONTACT_EMAIL address using SMTP. Make sure to configure the SMTP settings properly for email delivery to work.