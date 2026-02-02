# Deployment Guide

## Deploying to Vercel

This website is optimized for Vercel deployment. Follow these steps:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **That's it!** Your site will be live in minutes.

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project

### Environment Variables

No environment variables are required for this project. All content is static.

### Build Settings

Vercel will automatically detect:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Performance

The site is optimized for:
- ✅ Fast page loads
- ✅ SEO optimization
- ✅ Mobile responsiveness
- ✅ Image optimization (when images are added)

### Troubleshooting

**Build fails?**
- Ensure all dependencies are in `package.json`
- Check Node.js version (should be 18+)
- Review build logs in Vercel dashboard

**Page not found?**
- Verify all routes are in the `app/` directory
- Check that dynamic routes use `[id]` syntax correctly

**Styling issues?**
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`

## Local Development

Before deploying, test locally:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to preview your site.

## Production Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Contact form is functional (if backend is added)
- [ ] All links work
- [ ] Mobile responsive design verified
- [ ] SEO metadata is correct
- [ ] Performance is optimized
