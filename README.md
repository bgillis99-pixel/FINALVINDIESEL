# Carb Clean Truck Check

A Next.js application for truck compliance and cleanliness verification.

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

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

```
.
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment configuration
```
