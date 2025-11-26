# 🚛 Mobile Carb Check - CARB Compliance App

**California's Premier Mobile CARB Compliance Application**
Version: 0.1.0 (Alpha) | Phase: Mobile Web

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bgillis99-pixel/FINALVINDIESEL)

## 📱 Overview

Mobile Carb Check is a Progressive Web App (PWA) for heavy-duty diesel vehicle operators to comply with California Air Resources Board (CARB) regulations.

**Target Vehicles:**
- Heavy-Duty Diesel Trucks >14,000 lbs GVWR
- Diesel Motorhomes and RVs
- Agricultural Equipment with diesel engines
- **NO GASOLINE VEHICLES**

## ✨ Features

- ✅ **Instant VIN Compliance Checks**
- 🤖 **AI Chat Assistant** (Google Gemini)
- 📸 **Media Analysis Tools**
- 👤 **User Profiles & History**
- 📱 **PWA Installation**
- 🌐 **Offline Support**
- 📞 **Mobile Service**: 844-685-8922

## 🚀 Deployment & Integration

### Vercel Deployment

#### Quick Deploy
1. Click "Deploy with Vercel" button above, OR
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import: `bgillis99-pixel/FINALVINDIESEL`
4. Configure:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add Environment Variable: `API_KEY` (Google AI Studio)
6. Deploy!

### Squarespace Integration

#### Full Page Embed
```html
<iframe
  src="https://your-vercel-app.vercel.app"
  style="width:100%; height:100vh; border:none;"
  title="Mobile Carb Check"
></iframe>
```

#### Widget Embed
```html
<div style="max-width: 600px; margin: 0 auto;">
  <iframe
    src="https://your-vercel-app.vercel.app"
    style="width:100%; height:800px; border:2px solid #003366; border-radius:12px;"
  ></iframe>
</div>
```

### Google AI Studio Setup

1. Get API key: [ai.google.dev](https://ai.google.dev/)
2. In Vercel: Settings → Environment Variables
3. Add: `API_KEY` = `your_google_api_key`
4. Redeploy

## 🛠️ Local Development

```bash
git clone https://github.com/bgillis99-pixel/FINALVINDIESEL.git
cd FINALVINDIESEL
npm install
cp .env.example .env  # Add your API_KEY
npm run dev
```

## 📂 Project Structure

```
FINALVINDIESEL/
├── src/
│   ├── components/
│   │   ├── VinChecker.tsx
│   │   ├── ChatAssistant.tsx
│   │   ├── MediaTools.tsx
│   │   ├── ProfileView.tsx
│   │   └── AdminView.tsx
│   ├── types.ts
│   └── App.tsx
├── public/manifest.json
├── index.html
├── vite.config.ts
└── package.json
```

## 📱 PWA Features

- Installable on all platforms
- Offline-capable
- Push notifications (coming soon)
- Share Target support

## 📞 Support

- **Phone**: 844-685-8922
- **Email**: info@carbcleantruckcheck.app
- **Website**: https://carbcleantruckcheck.app
- **Service**: All of California

## 📈 Roadmap

- ✅ Phase 1: Mobile Web (Current)
- 🔄 Phase 2: Enhanced Features (Q1 2026)
- 🔄 Phase 3: Native Apps (Q2 2026)

## 📄 License

MIT License © 2025 Mobile Carb Check

**Built with React + Vite + Tailwind + Google Gemini**
**Powered by Vite + Vercel**
© 2025 VIN-DIESEL
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
