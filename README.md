# Rijit Ghosh - Premium Portfolio Website

A world-class, ultra-modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a premium dark theme with glassmorphism, smooth animations, and fully editable content via JSON configuration files.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide Icons** - Beautiful icon library
- **React** - UI library

## ✨ Features

- **Ultra Modern Dark Theme** - Premium startup-style UI like Vercel, Linear, Apple
- **Glassmorphism Design** - Subtle glass effects with blur
- **Smooth Animations** - Framer Motion powered transitions
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Editable Content** - All content managed via JSON files
- **GitHub Integration** - Auto-fetch repositories and stats
- **Particle Effects** - Dynamic background particles
- **Mouse Glow Effect** - Interactive cursor glow
- **Scroll Progress** - Visual scroll indicator
- **Animated Grid** - Futuristic grid pattern background
- **Typing Animation** - Dynamic title rotation
- **Timeline Experience** - Beautiful career timeline
- **Project Cards** - Hover-animated project showcases
- **Contact Form** - Glassmorphism contact section

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── content/                 # Editable content files
│   │   ├── config.json         # Site configuration
│   │   ├── socials.json        # Social media links
│   │   ├── skills.json         # Skills and technologies
│   │   ├── experience.json     # Work experience
│   │   ├── projects.json       # Project showcases
│   │   └── certifications.json # Certifications
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── effects/       # Special effects
│   │   │   ├── particles.tsx
│   │   │   ├── mouse-glow.tsx
│   │   │   ├── scroll-progress.tsx
│   │   │   └── animated-grid.tsx
│   │   ├── sections/      # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── github.tsx
│   │   │   ├── certifications.tsx
│   │   │   └── contact.tsx
│   │   ├── ui/            # UI components
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── navbar.tsx     # Navigation
│   │   └── footer.tsx     # Footer
│   └── lib/
│       └── utils.ts       # Utility functions
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🛠️ Installation

1. **Navigate to the portfolio directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### Editing Content (No Code Required)

All content is stored in the `/content` folder as JSON files. You can edit these files without touching any code:

#### 1. Update Basic Information (`content/config.json`)
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "description": "Your description",
  "resumeUrl": "/resume.pdf",
  "theme": {
    "primary": "#8b5cf6",
    "secondary": "#3b82f6"
  }
}
```

#### 2. Update Social Links (`content/socials.json`)
```json
{
  "linkedin": "https://linkedin.com/in/your-profile",
  "github": "https://github.com/your-username",
  "email": "your@email.com"
}
```

#### 3. Add/Update Skills (`content/skills.json`)
```json
{
  "languages": [
    {
      "name": "Python",
      "icon": "Code",
      "level": 90
    }
  ],
  "frameworks": [...],
  "tools": [...],
  "core": [...]
}
```

#### 4. Add Experience (`content/experience.json`)
```json
{
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "period": "2024",
      "description": "Job description",
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

#### 5. Add Projects (`content/projects.json`)
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "image": "/projects/image.jpg",
      "github": "https://github.com/...",
      "demo": "https://demo-url.com",
      "tags": ["Tag1", "Tag2"],
      "featured": true
    }
  ]
}
```

#### 6. Add Certifications (`content/certifications.json`)
```json
{
  "certifications": [
    {
      "title": "Certification Name",
      "issuer": "Issuer",
      "date": "2024",
      "credential": "Credential details"
    }
  ]
}
```

### Changing Colors

Edit the theme colors in `content/config.json`:
- `primary`: Main accent color (default: purple)
- `secondary`: Secondary accent color (default: blue)

You can also modify the Tailwind config in `tailwind.config.ts` for more advanced customization.

### Adding Icons

The project uses Lucide icons. To find icon names:
1. Visit [lucide.dev/icons](https://lucide.dev/icons)
2. Find the icon you want
3. Use the icon name in your JSON files (e.g., "Code", "Github", "Linkedin")

### Adding Project Images

1. Create a `public/projects` folder
2. Add your project images
3. Update the `image` path in `content/projects.json`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** Your portfolio will be live at `your-project.vercel.app`

### Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

### Deploy to Other Platforms

The project is compatible with any platform that supports Next.js:
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## 📝 Adding New Sections

To add a new section:

1. **Create a new component in `src/components/sections/`:**
   ```tsx
   // src/components/sections/new-section.tsx
   "use client";
   
   import { motion } from "framer-motion";
   
   export default function NewSection() {
     return (
       <section id="new-section" className="py-20 px-4">
         {/* Your content */}
       </section>
     );
   }
   ```

2. **Import and add to `src/app/page.tsx`:**
   ```tsx
   import NewSection from "@/components/sections/new-section";
   
   // Add to the component tree
   <NewSection />
   ```

3. **Add navigation link in `src/components/navbar.tsx`:**
   ```tsx
   { name: "New Section", href: "#new-section" }
   ```

## 🔧 Advanced Customization

### Modify Animations

Edit animation settings in `tailwind.config.ts`:
```typescript
animation: {
  'gradient': 'gradient 8s linear infinite',
  'float': 'float 6s ease-in-out infinite',
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

### Change Fonts

1. Import a new font in `src/app/layout.tsx`:
   ```tsx
   import { YourFont } from "next/font/google";
   const yourFont = YourFont({ subsets: ["latin"] });
   ```

2. Apply to the body:
   ```tsx
   <body className={yourFont.className}>{children}</body>
   ```

### Add Custom CSS

Add custom styles in `src/app/globals.css`:
```css
.your-custom-class {
  /* Your styles */
}
```

## 📊 GitHub API Integration

The GitHub section automatically fetches repositories from your GitHub profile. To customize:

1. Update your GitHub username in `content/socials.json`
2. The API will fetch your 6 most recently updated repositories
3. To show more repositories, modify the `per_page` parameter in `src/components/sections/github.tsx`

## 🎯 Performance Optimization

The project is optimized for performance:
- Image optimization with Next.js Image component
- Code splitting with Next.js
- Lazy loading for components
- Optimized animations with Framer Motion
- Minimal bundle size

## 🌐 SEO Optimization

The project includes SEO best practices:
- Dynamic metadata in `src/app/layout.tsx`
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags for social sharing

## 📱 Responsive Design

The portfolio is fully responsive:
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions
- Optimized for all screen sizes

## 🐛 Troubleshooting

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build
# Check for errors in the output
```

### GitHub API rate limit
The GitHub API has a rate limit. If you see errors, wait a few minutes and refresh.

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💡 Tips

- Keep your JSON files valid JSON (use a JSON validator)
- Use high-quality images for projects (recommended size: 1200x630px)
- Test your portfolio on different devices before deploying
- Keep your GitHub profile updated for the GitHub section
- Add your resume PDF to the `public` folder

## 📞 Support

If you need help, feel free to reach out:
- Email: rijitghosh53@gmail.com
- LinkedIn: https://linkedin.com/in/rijit-ghosh-528b96348
- GitHub: https://github.com/RijitGhosh

---

**Built with ❤️ by Rijit Ghosh**
