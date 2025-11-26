# 🚀 Squarespace Integration Guide for Mobile Carb Check

## Overview
This guide will help you embed the Mobile Carb Check app from Vercel into your Squarespace website at **carbcleantruckcheck.app**.

---

## Step 1: Deploy to Vercel

### 1.1 Initial Deployment
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository: `bgillis99-pixel/FINALVINDIESEL`
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 1.2 Add Environment Variables
1. In your Vercel project, go to **Settings** → **Environment Variables**
2. Add the following:
   - **Key**: `API_KEY`
   - **Value**: Your Google AI Studio API key (get from [ai.google.dev](https://ai.google.dev/))
   - **Environment**: All (Production, Preview, Development)

### 1.3 Deploy
Click **"Deploy"** and wait for the build to complete. You'll get a Vercel URL like:
```
https://finalvindiesel.vercel.app
```
or
```
https://your-custom-name.vercel.app
```

---

## Step 2: Configure Custom Domain on Vercel

### 2.1 Add Domain
1. In Vercel project dashboard, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `app.carbcleantruckcheck.app` (recommended subdomain)
   - OR use: `carbcleantruckcheck.app` (apex domain)

### 2.2 Configure DNS
Vercel will provide DNS records. Add these to your domain registrar:

**Option A: Using subdomain (RECOMMENDED)**
```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
```

**Option B: Using apex domain**
```
Type: A
Name: @
Value: 76.76.21.21
```

### 2.3 Verify
Wait 5-10 minutes for DNS propagation. Vercel will automatically provision SSL certificate.

---

## Step 3: Embed in Squarespace

### 3.1 Full Page Embed (Recommended)

This makes the entire page your app.

1. In Squarespace, go to **Pages**
2. Click **"+"** → **"Page"** → **"Blank Page"**
3. Name it "Check Your VIN" or "CARB Compliance"
4. Click **"+"** → **"Code"**
5. Paste this code:

```html
<style>
  /* Hide Squarespace header/footer for full app experience */
  #header, #footer {
    display: none !important;
  }

  /* Make iframe fill entire viewport */
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #app-frame {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: none;
  }
</style>

<iframe
  id="app-frame"
  src="https://app.carbcleantruckcheck.app"
  title="Mobile Carb Check"
  allow="camera; microphone; geolocation"
  loading="eager"
></iframe>

<script>
  // Send resize events to iframe for responsive behavior
  window.addEventListener('resize', function() {
    document.getElementById('app-frame').style.height = window.innerHeight + 'px';
  });
</script>
```

### 3.2 Widget Embed (Alternative)

For embedding as a section within a page:

1. Go to the page where you want to embed
2. Click **"+"** → **"Code"**
3. Paste this code:

```html
<style>
  .carb-widget {
    max-width: 800px;
    margin: 2rem auto;
    box-shadow: 0 4px 20px rgba(0,51,102,0.15);
    border-radius: 12px;
    overflow: hidden;
  }

  .carb-widget iframe {
    width: 100%;
    height: 800px;
    border: none;
    display: block;
  }

  @media (max-width: 768px) {
    .carb-widget {
      margin: 1rem;
      border-radius: 8px;
    }

    .carb-widget iframe {
      height: 600px;
    }
  }
</style>

<div class="carb-widget">
  <iframe
    src="https://app.carbcleantruckcheck.app"
    title="Mobile Carb Check"
    allow="camera; microphone; geolocation"
    loading="lazy"
  ></iframe>
</div>
```

### 3.3 Button/Link Integration

Add a call-to-action button that opens the app:

```html
<style>
  .cta-button {
    display: inline-block;
    background: linear-gradient(135deg, #00C853 0%, #00A344 100%);
    color: white;
    padding: 16px 32px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    box-shadow: 0 4px 12px rgba(0,200,83,0.3);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,200,83,0.4);
  }
</style>

<a href="https://app.carbcleantruckcheck.app"
   class="cta-button"
   target="_blank">
  🚛 Check Your VIN Now
</a>
```

---

## Step 4: Mobile PWA Setup

### 4.1 Add to Home Screen Banner

Encourage users to install the PWA:

```html
<style>
  .pwa-banner {
    background: linear-gradient(135deg, #003366 0%, #004488 100%);
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 12px;
    margin: 20px 0;
  }

  .pwa-banner h3 {
    margin: 0 0 10px 0;
    color: #00C853;
  }

  .install-btn {
    background: #00C853;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
  }
</style>

<div class="pwa-banner">
  <h3>📱 Install Mobile App</h3>
  <p>Add Mobile Carb Check to your home screen for quick access!</p>
  <button class="install-btn" onclick="window.open('https://app.carbcleantruckcheck.app', '_blank')">
    Open App
  </button>
  <p style="font-size: 12px; margin-top: 10px;">
    On iOS: Tap Share → "Add to Home Screen"<br>
    On Android: Tap menu → "Install App"
  </p>
</div>
```

---

## Step 5: SEO & Performance

### 5.1 Page Settings in Squarespace

For your app page, set:
- **SEO Title**: "Mobile CARB Check - VIN Compliance Checker"
- **SEO Description**: "Instantly check your heavy-duty diesel vehicle's CARB compliance status. Free VIN lookup and mobile smoke testing service across California."
- **URL Slug**: `/check-vin` or `/app`

### 5.2 Add Schema Markup

In Squarespace **Settings** → **Advanced** → **Code Injection** → **Footer**:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Mobile Carb Check",
  "url": "https://carbcleantruckcheck.app",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Mobile CARB compliance checker for heavy-duty diesel vehicles in California",
  "provider": {
    "@type": "Organization",
    "name": "Mobile Carb Check",
    "telephone": "844-685-8922",
    "email": "info@carbcleantruckcheck.app"
  }
}
</script>
```

---

## Step 6: Testing Checklist

### ✅ Pre-Launch Checklist

- [ ] Vercel deployment is live and accessible
- [ ] Custom domain configured and SSL active
- [ ] Environment variables (API_KEY) set in Vercel
- [ ] iframe embedding works on Squarespace preview
- [ ] Mobile responsive on iOS and Android
- [ ] PWA installation works (Add to Home Screen)
- [ ] Camera/photo upload works in iframe
- [ ] AI Chat assistant responds correctly
- [ ] VIN checker returns results
- [ ] Forms submit successfully
- [ ] Contact info (844-685-8922) displayed correctly

### Test URLs
1. Direct Vercel URL: `https://finalvindiesel.vercel.app`
2. Custom domain: `https://app.carbcleantruckcheck.app`
3. Squarespace page: `https://carbcleantruckcheck.app/check-vin`

---

## Troubleshooting

### Issue: iframe not loading
**Solution**: Check CSP headers in vercel.json - ensure Squarespace domain is allowed

### Issue: Camera not working
**Solution**: Add `allow="camera; microphone"` to iframe tag

### Issue: App not responsive
**Solution**: Ensure iframe has `width: 100%` and proper height settings

### Issue: SSL certificate errors
**Solution**: Wait 10-15 minutes after DNS changes for SSL provisioning

### Issue: API_KEY not working
**Solution**:
1. Check Environment Variables in Vercel Settings
2. Redeploy after adding/changing variables
3. Verify key is valid at [ai.google.dev](https://ai.google.dev/)

---

## Support

**Need help?**
- 📞 Phone: 844-685-8922
- 📧 Email: info@carbcleantruckcheck.app
- 💻 GitHub: https://github.com/bgillis99-pixel/FINALVINDIESEL

---

## Quick Reference

### Vercel URLs
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs

### Google AI Studio
- Console: https://ai.google.dev/
- Get API Key: https://aistudio.google.com/app/apikey

### Squarespace
- Admin: https://carbcleantruckcheck.app/config
- Help: https://support.squarespace.com/

---

**Last Updated**: 2025-11-26
**Version**: 1.0.0
