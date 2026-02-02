# Shipyard Excellence Academy Website

A modern, responsive website for Shipyard Excellence Academy built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion for engaging user experience
- **SEO Optimized**: Built-in SEO with Next.js metadata
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessible**: Follows accessibility best practices

## 📋 Pages

1. **Home Page** - Hero section, Who We Are, Vision/Purpose/Impact, Training Areas, Consultancy, Contact Summary
2. **About Us** - Academy introduction, training approach, eligibility
3. **Training Programs** - Overview of all available training programs
4. **Consultancy & Trade Testing** - Services for testing and assessment
5. **Careers** - Career opportunities and industry support
6. **Contact Us** - Contact information and enquiry form

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (optimized)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚢 Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── careers/        # Careers page
│   ├── consultancy/   # Consultancy page
│   ├── contact/         # Contact page
│   ├── training-programs/ # Training programs page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── home/           # Home page components
│   ├── Button.tsx      # Reusable button component
│   ├── Footer.tsx      # Footer component
│   ├── Navbar.tsx      # Navigation component
│   └── Section.tsx     # Section wrapper component
├── public/             # Static assets
└── ...config files
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- Primary colors: Used for main actions and highlights
- Navy colors: Used for text and backgrounds

### Content
All content is in the component files. Update text directly in:
- `components/home/*.tsx` for home page sections
- `app/*/page.tsx` for individual pages

## 📝 Contact Information

- **Email**: mohan@shipyardexcellenceacademy.com
- **Mobile**: +91 6374510399
- **Office**: +91 7598769352

## 📄 License

This project is proprietary and confidential.
