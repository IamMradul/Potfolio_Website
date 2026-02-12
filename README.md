# Mradul Gupta - Portfolio Website

A modern, fully responsive portfolio website showcasing backend development expertise, AI/ML projects, and full-stack engineering skills.

**Live Demo**: [https://mradul-mg.vercel.app](https://mradul-mg.vercel.app)

---

## ✨ Features

### Portfolio Sections
- **Hero Section** - Engaging introduction with animated profile image and CTA buttons
- **About Me** - Professional summary, motivations, and key highlights
- **Work Experience** - Timeline-based work experience with technical details
- **Featured Projects** - Showcase of top projects with technologies and links
- **Skills & Technologies** - Comprehensive skill categories with badges
- **Education & Achievements** - Academic background and notable accomplishments
- **Publications & Patents** - Research publications and filed patents
- **Extracurriculars** - Community involvement and creative pursuits
- **Contact Section** - Contact information and message form

### Design & UX
- ✅ **Fully Responsive** - Mobile-first design (320px+, tablets, desktops)
- ✅ **Dark/Light Mode** - Theme toggle for user preference
- ✅ **Particle Background** - Animated background with tsParticles
- ✅ **Smooth Animations** - Framer Motion animations for smooth transitions
- ✅ **Accessible** - WCAG compliant with proper semantic HTML
- ✅ **Fast** - Optimized performance with Vite and lazy loading
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter cards

---

## 🛠 Tech Stack

### Frontend
- **Vite** - Lightning-fast build tool and dev server
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components

### Libraries & Tools
- **Framer Motion** - Animation library for smooth interactions
- **React Router** - Client-side routing
- **tsParticles** - Particle animation effects
- **Lucide React** - Beautiful icon library
- **React Query** - Data fetching and caching
- **Sonner & Toaster** - Toast notifications

### Development
- **ESLint** - Code linting
- **Vitest** - Unit testing framework
- **Bun** - Fast JavaScript runtime

---

## 📱 Responsive Design

The website is fully responsive and tested across:
- **Mobile** (320px - 639px) - iPhone SE, Android phones
- **Tablet** (640px - 1023px) - iPad, tablets
- **Desktop** (1024px+) - Laptops, desktop screens

**Tested Breakpoints**: 320px, 375px, 768px, 1024px, 1440px

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or bun package manager

### Installation

```sh
# Clone the repository
git clone https://github.com/IamMradul/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

The website will be available at `http://localhost:8081/`

---

## 📝 Available Scripts

```sh
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint

# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── portfolio/
│   │   ├── Hero.tsx              # Hero section with intro
│   │   ├── About.tsx             # About me section
│   │   ├── Experience.tsx        # Work experience timeline
│   │   ├── Projects.tsx          # Featured projects grid
│   │   ├── Skills.tsx            # Skills & technologies
│   │   ├── Education.tsx         # Education & achievements
│   │   ├── Publications.tsx      # Papers & patents
│   │   ├── Extracurriculars.tsx # Activities & interests
│   │   ├── Contact.tsx           # Contact section & form
│   │   ├── DockNavigation.tsx   # Social media dock
│   │   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   │   └── Footer.tsx            # Footer component
│   └── ui/                       # shadcn/ui components
│       ├── card.tsx
│       ├── button.tsx
│       ├── badge.tsx
│       └── ...
├── hooks/
│   ├── useScrollAnimation.ts     # Scroll-triggered animations
│   └── use-toast.ts              # Toast notifications
├── lib/
│   └── utils.ts                  # Utility functions
├── pages/
│   ├── Index.tsx                 # Main portfolio page
│   └── NotFound.tsx              # 404 page
├── App.tsx                       # App component with routes
├── App.css                       # Global app styles
├── index.css                     # Tailwind & global styles
└── main.tsx                      # Entry point
```

---

## 🎨 Customization

### Updating Content
Edit component files in `src/components/portfolio/` to update portfolio content.

### Styling
- **Colors**: Modify CSS variables in `src/index.css` (`:root` section)
- **Fonts**: Update font import in `src/index.css`
- **Tailwind**: Configure in `tailwind.config.js`

### Adding New Sections
1. Create component in `src/components/portfolio/`
2. Import and add to `src/pages/Index.tsx`
3. Add responsive classes for mobile compatibility

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```sh
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```sh
# Build the project
npm run build

# Deploy the dist/ folder to Netlify
```

### Deploy to GitHub Pages
Configure `vite.config.ts` with base path and deploy using GitHub Actions.

---

## ✅ Testing

### Responsive Design Testing
1. Open DevTools (`F12`)
2. Click device toolbar icon (or `Ctrl+Shift+M`)
3. Test at these viewports:
   - 375px (iPhone)
   - 768px (iPad/Tablet)
   - 1440px (Desktop)

### Performance Testing
- Use Lighthouse in Chrome DevTools
- Check Core Web Vitals
- Monitor load time on slow networks

---

## 📄 License

This project is personal portfolio and is available for viewing and reference.

---

## 👤 Author

**Mradul Gupta**
- 🌐 Portfolio: [https://mradul-mg.vercel.app](https://mradul-mg.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/mradul-gupta26](https://www.linkedin.com/in/mradul-gupta26)
- 💻 GitHub: [github.com/IamMradul](https://github.com/IamMradul)
- 📧 Email: mradulg306@gmail.com

---

## 🤝 Contributing

This is a personal portfolio. For feedback or suggestions, feel free to reach out via email.

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 📊 Performance

- ⚡ **Build Time**: ~2.4 seconds
- 📦 **Bundle Size**: ~477KB (gzipped: 150KB)
- 🎯 **Lighthouse Score**: 90+
- 📱 **Mobile Optimized**: Yes
- ♿ **Accessibility**: WCAG AA

---

## 🔧 Development Tips

### Code Quality
- Run `npm run lint` before committing
- Write TypeScript for type safety
- Use semantic HTML elements

### Performance
- Lazy load images and components
- Minimize animations on mobile
- Use proper image formats (WebP, AVIF)

### Accessibility
- Use proper heading hierarchy
- Add alt text to images
- Ensure color contrast ratios
- Test with keyboard navigation

---

**Last Updated**: February 2026  
**Status**: ✅ Fully Responsive & Production Ready
