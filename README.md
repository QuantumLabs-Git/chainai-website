# Qore - Next.js AI SaaS Platform

A modern AI SaaS platform built with Next.js 14, TypeScript, and SCSS modules. This is a complete rewrite of the original HTML/jQuery template into a modern React-based application.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 SCSS Modules for component-scoped styling
- 📱 Fully responsive design
- 🎭 Smooth animations with GSAP
- 🔤 Custom typography with web fonts
- 🌙 Dark theme optimized
- 🚀 Performance optimized with lazy loading
- ♿ Accessibility focused

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Animations**: GSAP, Framer Motion
- **UI Components**: Custom built
- **Font Icons**: Custom icon font (icomoon)

## Project Structure

```
NextJs/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   ├── Header/         # Navigation header
│   │   ├── Footer/         # Site footer
│   │   ├── MobileMenu/     # Mobile navigation
│   │   ├── GoTop/          # Scroll to top button
│   │   ├── HackerText/     # Animated text effect
│   │   └── sections/       # Page sections
│   └── styles/
│       ├── globals.scss    # Global styles
│       ├── fonts.css       # Font declarations
│       └── _*.scss         # SCSS partials
├── public/
│   ├── fonts/             # Custom fonts
│   ├── icons/             # Icon font files
│   ├── images/            # Static images
│   └── videos/            # Background videos
└── package.json
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:2999](http://localhost:2999) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Components

### Layout Components
- **Header**: Sticky navigation with smooth scroll
- **Footer**: Site footer with links and branding
- **MobileMenu**: Off-canvas mobile navigation
- **GoTop**: Scroll-to-top button with progress indicator

### Section Components
- **HeroSection**: Landing hero with AI model switcher
- **FeaturesSection**: Product features showcase
- **BenefitsSection**: Platform benefits grid
- **HowToUseSection**: Step-by-step guide
- **PricingSection**: Pricing plans
- **TestimonialsSection**: User testimonials
- **FAQSection**: Frequently asked questions
- **CTASection**: Call-to-action with newsletter

### Utility Components
- **HackerText**: Matrix-style text animation effect

## Styling

The project uses SCSS modules for component-scoped styling with:
- CSS custom properties for theming
- Responsive mixins for breakpoints
- Utility classes for common patterns
- Animation keyframes and classes

## Performance

- Images lazy loaded with Next.js Image component
- Fonts preloaded and display swapped
- Components code-split automatically
- CSS modules for optimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.