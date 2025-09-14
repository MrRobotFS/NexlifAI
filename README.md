# nexlifAI Landing Page

A modern, responsive landing page built with Next.js 14 and Tailwind CSS featuring dark/light theme support and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional UI inspired by leading tech companies
- **Dark/Light Mode**: Complete theme switching with system preference detection
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Components**: Accordion, hover effects, and dynamic elements
- **Optimized Performance**: Built with Next.js 14 App Router for optimal loading
- **SEO Ready**: Complete meta tags and semantic HTML structure

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **TypeScript**: Full type safety
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
nexlifai-landing/
├── app/
│   ├── _components/
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── brand-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   └── cta-section.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── accordion.tsx
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Design Features

### Color Palette
- **Dark Mode**: Charcoal background (#0D0D10) with purple-to-blue gradients
- **Light Mode**: Clean white/off-white (#F9FAFB) with same accent colors
- **Accents**: Purple (#8A2BE2) and Blue (#00BFFF) gradient combinations

### Sections
1. **Navigation**: Sticky navbar with theme toggle and responsive mobile menu
2. **Hero**: Full-screen section with animated background and compelling CTA
3. **Brands**: Trusted by section with logo carousel and stats
4. **Services**: Interactive accordion showcasing three core services
5. **CTA**: Call-to-action section with contact information and features
6. **Footer**: Complete footer with links, social media, and company info

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nexlifai-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Theme Colors
Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  accent: {
    purple: '#8A2BE2', // Your brand purple
    blue: '#00BFFF',   // Your brand blue
  },
  // ... other colors
}
```

### Content
- Update company information in each component
- Modify services in `services-section.tsx`
- Change contact details in `cta-section.tsx`
- Update social links in `footer.tsx`

### Animations
All animations use Framer Motion. Customize in individual components or globally in `globals.css`.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## 🔧 Performance Optimizations

- Next.js Image optimization
- Automatic font optimization
- CSS-in-JS with Tailwind
- Tree-shaking for smaller bundles
- Lazy loading for sections

## 📧 Contact

For questions about this project, reach out to hello@nexlifai.com

## 📄 License

© 2025 nexlifAI, Inc. All rights reserved.