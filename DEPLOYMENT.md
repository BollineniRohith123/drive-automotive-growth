# Production Deployment Guide - Uma Consultancy Website

## Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Copy `.env.example` to `.env.local` and fill in production values
- [ ] Update `VITE_SITE_URL` with your actual domain
- [ ] Configure contact information variables
- [ ] Set up WhatsApp Business number and name
- [ ] Set up analytics tracking IDs (optional)

### 2. Content Updates
- [ ] Replace placeholder domain in `index.html` with actual domain
- [ ] Update `public/sitemap.xml` with actual domain
- [ ] Update `robots.txt` with actual domain
- [ ] Add actual Open Graph image (`og-image.jpg`)
- [ ] Update social media links in schema.org data

### 3. Build and Test
```bash
# Install dependencies
npm install

# Type check
npm run type-check

# Lint and fix issues
npm run lint:fix

# Build for production
npm run build:prod

# Preview production build locally
npm run preview
```

### 4. Performance Optimization
- [ ] Images are optimized and properly sized
- [ ] Fonts are preloaded
- [ ] Critical CSS is inlined
- [ ] Bundle size is analyzed

## Deployment Options

### Option 1: Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build:prod`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Enable form handling for contact form
6. Set up custom domain and SSL

### Option 2: Vercel
1. Connect repository to Vercel
2. Build command: `npm run build:prod`
3. Output directory: `dist`
4. Add environment variables
5. Configure custom domain

### Option 3: Traditional Hosting
1. Run `npm run build:prod`
2. Upload `dist` folder contents to web server
3. Configure server for SPA routing
4. Set up SSL certificate
5. Configure caching headers

## Post-Deployment Tasks

### 1. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain ownership
- [ ] Set up Google Analytics (if configured)
- [ ] Test structured data with Google's Rich Results Test

### 2. Performance Monitoring
- [ ] Test with Google PageSpeed Insights
- [ ] Check Core Web Vitals
- [ ] Test on multiple devices and browsers
- [ ] Verify all forms work correctly

### 3. Security
- [ ] Enable HTTPS
- [ ] Configure security headers
- [ ] Test contact form spam protection
- [ ] Set up monitoring for uptime

## Environment Variables Reference

```env
# Required
VITE_SITE_URL=https://your-domain.com
VITE_SITE_NAME=Uma Consultancy
VITE_CONTACT_EMAIL=info@umaconsultancy.co
VITE_CONTACT_PHONE=+919491398821

# WhatsApp Integration
VITE_WHATSAPP_NUMBER=919491398821
VITE_WHATSAPP_BUSINESS_NAME=Uma Consultancy

# Optional
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed
- Check for TypeScript errors
- Verify environment variables are set

### Routing Issues
- Ensure `_redirects` file is in place for SPA routing
- Configure server-side redirects if needed

### Performance Issues
- Optimize images
- Enable compression
- Configure caching headers
- Use CDN for static assets

## Maintenance

### Regular Tasks
- [ ] Update dependencies monthly
- [ ] Monitor site performance
- [ ] Check for broken links
- [ ] Update content as needed
- [ ] Backup site regularly

### Security Updates
- [ ] Keep dependencies updated
- [ ] Monitor for security vulnerabilities
- [ ] Review and update contact form handling