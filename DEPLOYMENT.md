# 🚀 Quick Deployment Guide

## 5-Minute Setup for carbcleantruckcheck.app

### Step 1: Deploy to Vercel (2 min)

1. **Go to**: [vercel.com/new](https://vercel.com/new)
2. **Import**: `bgillis99-pixel/FINALVINDIESEL`
3. **Configure**:
   - Framework: `Vite`
   - Build: `npm run build`
   - Output: `dist`
4. **Add Environment Variable**:
   - Name: `API_KEY`
   - Value: [Get from Google AI Studio](https://ai.google.dev/)
5. **Click**: Deploy

✅ Your app is live at: `https://[project-name].vercel.app`

---

### Step 2: Connect Custom Domain (2 min)

1. **In Vercel**: Settings → Domains
2. **Add**: `app.carbcleantruckcheck.app`
3. **Go to your DNS provider** and add:
   ```
   Type: CNAME
   Name: app
   Value: cname.vercel-dns.com
   ```
4. **Wait**: 5-10 minutes for SSL

✅ Your app is live at: `https://app.carbcleantruckcheck.app`

---

### Step 3: Embed in Squarespace (1 min)

1. **In Squarespace**: Add a Page → Code Block
2. **Paste**:
   ```html
   <iframe
     src="https://app.carbcleantruckcheck.app"
     style="width:100%; height:100vh; border:none;"
     allow="camera; microphone; geolocation"
   ></iframe>
   ```
3. **Save & Publish**

✅ Your app is embedded on carbcleantruckcheck.app

---

## Important URLs

| What | URL |
|------|-----|
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **Get API Key** | https://ai.google.dev/ |
| **Live App** | https://app.carbcleantruckcheck.app |
| **Squarespace** | https://carbcleantruckcheck.app/config |

---

## Troubleshooting

### iframe not loading?
- Check: CSP headers in vercel.json
- Solution: Redeploy after updating vercel.json

### API_KEY not working?
- Check: Environment Variables in Vercel Settings
- Solution: Redeploy after adding/changing

### SSL certificate error?
- Wait: 10-15 minutes after DNS changes
- Check: DNS propagation at dnschecker.org

### Camera not working in iframe?
- Check: `allow="camera"` attribute in iframe
- Check: HTTPS is enabled (required for camera)

---

## Need Help?

📞 **Call**: 844-685-8922
📧 **Email**: info@carbcleantruckcheck.app
📖 **Full Guide**: See [SQUARESPACE_INTEGRATION.md](./SQUARESPACE_INTEGRATION.md)

---

**Ready to launch?** Follow the 3 steps above and you'll be live in 5 minutes! 🎉
