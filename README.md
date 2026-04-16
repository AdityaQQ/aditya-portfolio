# Aditya Upadhyay — Portfolio

Premium developer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
app/
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Animated hero with code card
│   │   ├── About.tsx         # Bio + focus areas
│   │   ├── Skills.tsx        # Tech stack grid
│   │   ├── Projects.tsx      # Featured projects (PrepFlow, MentorBridge)
│   │   ├── Experience.tsx    # EY Internship + open-to-work
│   │   ├── Education.tsx     # KIIT B.Tech CS/AI
│   │   ├── Certifications.tsx # Google AI, ML, Python certs
│   │   ├── GitHub.tsx        # Contribution graph (react-github-calendar)
│   │   └── Contact.tsx       # Social links + CTA
│   ├── ui/
│   │   └── SectionWrapper.tsx # Shared animation wrapper
│   ├── Navbar.tsx            # Sticky blur navbar
│   └── Footer.tsx
├── globals.css               # Dark theme + glass utility classes
├── layout.tsx                # Root layout + metadata
└── page.tsx                  # Main page composition

public/
└── resume.pdf                # ← Add your actual resume here
```

## ✨ Features

- **Dark glassmorphism theme** with gradient accents
- **Framer Motion** animations — staggered entry, scroll-triggered, hover effects
- **GitHub Contribution Graph** via `react-github-calendar`
- **Sticky navbar** with blur, active section tracking, smooth scroll
- **Resume download** button
- **EY Internship** section + open-to-work status badge
- **Fully responsive** — mobile, tablet, desktop
- **Production ready** — metadata, OG tags, SEO optimized

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for all animations
- **TypeScript** throughout
- **react-github-calendar** for contribution graph
- **lucide-react** for icons
- **Inter + JetBrains Mono** fonts

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for production
```bash
npm run build
npm start
```

## 📝 Customization

1. **Add Resume**: Drop your `resume.pdf` into the `/public` folder
2. **Update Email**: Change `aditya@kiit.ac.in` in `Contact.tsx`
3. **Add Projects**: Edit the `projects` array in `Projects.tsx`
4. **Profile Image**: Add `avatar.jpg` to `/public` and update `Hero.tsx`
