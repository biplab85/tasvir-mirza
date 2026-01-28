# Tasvir Mirza - YouTuber Portfolio

A modern, cinematic one-page portfolio website for a YouTuber built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, SwiperJS, and Fancyapps.

## Features

- **Stunning Hero Section** - Animated background with floating orbs, gradient text effects, and interactive mouse parallax
- **Smooth Navigation** - Sticky header with smooth scroll to sections and active state highlighting
- **About Section** - Skills bars with scroll-triggered animations, floating experience badges
- **Featured Videos** - SwiperJS coverflow slider with hover effects and video thumbnails
- **Content Categories** - Animated cards with gradient borders and hover effects
- **Stats Section** - Animated counters with number formatting (K, M) and marquee text
- **Newsletter** - Interactive form with focus animations (frontend-only)
- **Media Gallery** - Fancybox lightbox for images and videos
- **Contact Form** - Styled form with floating labels and social links
- **Responsive Design** - Fully responsive across all devices
- **Modern Animations** - Framer Motion animations with scroll triggers

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Slider**: SwiperJS
- **Lightbox**: Fancyapps (Fancybox)
- **Fonts**: Fontshare (Clash Display, Cabinet Grotesk, Satoshi) + JetBrains Mono

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
tasvir-mirza/
├── public/
│   └── tasvir-mirza.jpg        # Profile image
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles & animations
│   │   ├── layout.tsx          # Root layout with fonts
│   │   └── page.tsx            # Main page component
│   └── components/
│       ├── Header.tsx          # Sticky navigation
│       ├── Hero.tsx            # Hero section
│       ├── About.tsx           # About section
│       ├── FeaturedVideos.tsx  # Video slider
│       ├── Categories.tsx      # Content categories
│       ├── Stats.tsx           # Statistics counters
│       ├── Newsletter.tsx      # Email subscription
│       ├── Gallery.tsx         # Media gallery
│       ├── Contact.tsx         # Contact form
│       └── Footer.tsx          # Site footer
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color palette:
- `void` - Main dark background
- `obsidian` - Secondary dark background
- `neon-pink` - Primary accent color
- `electric-blue` - Secondary accent
- `mint-glow` - Tertiary accent

### Content
Update content in individual components:
- Videos: `FeaturedVideos.tsx`
- Categories: `Categories.tsx`
- Stats: `Stats.tsx`
- Social Links: `Contact.tsx` and `Footer.tsx`

### Fonts
Fonts are loaded from Fontshare and Google Fonts in `layout.tsx`.

## License

MIT License - Feel free to use this template for your own portfolio.
