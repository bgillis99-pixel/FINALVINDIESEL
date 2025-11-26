# 🏎️ VIN-DIESEL - Mobile CARB Compliance

**Mobile CARB Compliance Application**
Version: 0.1.0 (Alpha) | Phase: Mobile Web

## Overview

VIN-DIESEL is a mobile-first CARB compliance application designed to help with regulatory compliance tracking and management.

## Deployment Status

- **Repository**: `bgillis99-pixel/VIN-Diesel---Mobile-CARB`
- **Branch**: `claude/vin-diesel-setup-019h3xff9zaUDiNfj1xd2nct`
- **Platform**: Vercel
- **Framework**: Vite (Mobile Web)

## 🚀 Vercel Deployment Instructions

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/new
2. **Import Git Repository**:
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose: `bgillis99-pixel/VIN-Diesel---Mobile-CARB`
3. **Configure Project**:
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy Branch**:
   - Production Branch: `main` or `claude/vin-diesel-setup-019h3xff9zaUDiNfj1xd2nct`
5. **Click "Deploy"**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 3: Automatic Deployment (GitHub Integration)

Once connected to Vercel:
- Every push to the branch automatically deploys
- Pull requests create preview deployments
- Vercel bot comments on PRs with preview URLs

## 📱 Development Roadmap

- ✅ **Phase 1**: Mobile Web Version (Current)
- 🔄 **Phase 2**: Android App
- 🔄 **Phase 3**: iOS App

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Project Structure

```
FINALVINDIESEL/
├── public/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   └── style.css       # Mobile-first styles
│   ├── js/
│   │   └── app.js          # Application logic
│   ├── manifest.json       # PWA manifest
│   └── service-worker.js   # Service worker for offline support
├── vercel.json             # Vercel configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🔧 Configuration Files

### `vercel.json`
Configured for automatic deployment with security headers and framework detection.

### `package.json`
Includes build scripts and dependencies for Vite-based deployment.

## 📊 Features

- **Mobile-First Design**: Optimized for mobile devices
- **PWA Support**: Installable as a Progressive Web App
- **Offline Capable**: Service worker for offline functionality
- **Responsive**: Adapts to all screen sizes
- **Performance Optimized**: Fast load times and smooth interactions

## 🔗 Links

- **GitHub**: https://github.com/bgillis99-pixel/VIN-Diesel---Mobile-CARB
- **Vercel**: (Will be generated after deployment)

## 📝 Next Steps

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables (if needed)
4. Deploy and test

## 🤝 Contributing

This project is in active development. Contributions welcome!

## 📄 License

MIT License

---

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
