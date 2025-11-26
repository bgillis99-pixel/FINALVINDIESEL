# 🚛 Mobile Carb Check - CARB Compliance App

**California's Premier Mobile CARB Compliance Application**
Version: 1.0.0 | Status: Production Ready | Live: [carbcleantruckcheck.app](https://carbcleantruckcheck.app)

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
- 🔗 **Squarespace Integration Ready**
- 📞 **Mobile Service**: 844-685-8922

## 🚀 Deployment & Integration

### 📋 Complete Setup Guide

**For detailed Squarespace + Vercel integration instructions, see [SQUARESPACE_INTEGRATION.md](./SQUARESPACE_INTEGRATION.md)**

### Quick Deploy to Vercel

#### Method 1: One-Click Deploy
1. Click the **"Deploy with Vercel"** button above
2. Connect your GitHub account
3. Configure environment variables (see below)
4. Click **Deploy**

#### Method 2: Manual Deploy
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import repository: `bgillis99-pixel/FINALVINDIESEL`
3. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Add environment variables (see below)
5. Click **Deploy**

### 🔑 Environment Variables

Add these in Vercel **Settings → Environment Variables**:

| Variable | Value | Where to Get |
|----------|-------|--------------|
| `API_KEY` | Your Google AI API Key | [ai.google.dev](https://ai.google.dev/) |

**Note**: After adding/changing environment variables, you must redeploy!

### 🌐 Custom Domain Setup

#### Connect carbcleantruckcheck.app
1. In Vercel: **Settings → Domains**
2. Add domain: `app.carbcleantruckcheck.app` (recommended)
3. Configure DNS at your registrar:
   ```
   Type: CNAME
   Name: app
   Value: cname.vercel-dns.com
   ```
4. Wait 5-10 minutes for SSL provisioning

### 🔗 Squarespace Integration

#### Quick Embed (Full Page)
```html
<iframe
  src="https://app.carbcleantruckcheck.app"
  style="width:100%; height:100vh; border:none;"
  title="Mobile Carb Check"
  allow="camera; microphone; geolocation"
></iframe>
```

#### Widget Embed
```html
<div style="max-width: 800px; margin: 2rem auto; box-shadow: 0 4px 20px rgba(0,51,102,0.15); border-radius: 12px; overflow: hidden;">
  <iframe
    src="https://app.carbcleantruckcheck.app"
    style="width:100%; height:800px; border:none;"
    title="Mobile Carb Check"
    allow="camera; microphone; geolocation"
  ></iframe>
</div>
```

**Full integration guide with screenshots and troubleshooting**: [SQUARESPACE_INTEGRATION.md](./SQUARESPACE_INTEGRATION.md)

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

## ✅ Pre-Launch Checklist

Use this checklist before going live on carbcleantruckcheck.app:

### Vercel Setup
- [ ] Repository deployed to Vercel
- [ ] Build completing successfully
- [ ] Environment variable `API_KEY` configured
- [ ] Custom domain `app.carbcleantruckcheck.app` added
- [ ] DNS configured and SSL certificate active
- [ ] Production URL accessible: https://app.carbcleantruckcheck.app

### Squarespace Integration
- [ ] Code block added to Squarespace page
- [ ] iframe loading correctly in preview
- [ ] Mobile responsive on iOS Safari
- [ ] Mobile responsive on Android Chrome
- [ ] Camera permission prompts working
- [ ] All features functional within iframe

### App Testing
- [ ] VIN checker returns results
- [ ] AI Chat assistant responds
- [ ] Photo/video upload works
- [ ] Profile view saves data
- [ ] PWA installation works (Add to Home Screen)
- [ ] Offline mode functions correctly
- [ ] Contact info displays: 844-685-8922

### SEO & Analytics
- [ ] Meta tags configured
- [ ] Schema.org markup added
- [ ] Google Analytics (if needed)
- [ ] Sitemap submitted

## 🛠️ Tech Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS (CDN)
- **AI**: Google Gemini API
- **Deployment**: Vercel
- **PWA**: Service Workers + Manifest

## 📄 License

MIT License © 2025 Mobile Carb Check

**Built with React + Vite + Tailwind + Google Gemini**
**Powered by Vercel**
© 2025 VIN-DIESEL
