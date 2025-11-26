# Mobile Carb Check

California's Premier Mobile CARB Compliance App. Instant VIN Checks & Smoke Testing for Heavy Duty Diesel vehicles.

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

This application is configured for easy deployment to Vercel.

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js configuration
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

## Domain Configuration

To connect your domain `carbcleantruckcheck.app` to Vercel:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add `carbcleantruckcheck.app` as a custom domain
4. Vercel will provide DNS records to configure
5. Add these DNS records in your domain registrar:
   - Type: A Record
   - Name: @ (or your domain)
   - Value: 76.76.21.21
   - Or use CNAME: cname.vercel-dns.com

6. For www subdomain:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
```

## 🚀 Features

- **VIN Compliance Check**: Instantly verify CARB compliance status
- **AI Chat Assistant**: Get answers to compliance questions powered by Google Gemini
- **Media Analysis**: Upload photos/videos for AI-powered inspection
- **User Profiles**: Track your check history
- **PWA Support**: Install as a mobile app on iOS and Android
- **Offline Mode**: Access history even without internet

## Tech Stack

- **Framework**: Vite + React
- **Language**: TypeScript
- **Styling**: Tailwind CSS (via CDN)
- **AI**: Google Gemini API
- **Deployment**: Vercel

## Project Structure

```
.
├── src/
│   ├── components/      # React components
│   ├── App.tsx         # Main app component
│   └── types.ts        # TypeScript types
├── index.tsx           # Entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment configuration
```

## 🔑 API Integration

This app uses Google Gemini AI. To enable AI features:

1. Get a Gemini API key from [Google AI Studio](https://aistudio.google.com)
2. Add it as `API_KEY` environment variable in Vercel
3. Redeploy the application

## 📞 Contact

- **Phone**: 844-685-8922
- **Email**: info@carbcleantruckcheck.app
- **Website**: https://carbcleantruckcheck.app

## 📄 License

Copyright 2026 Mobile Carb Check. All rights reserved.
