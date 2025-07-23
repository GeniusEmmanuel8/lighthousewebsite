# Lighthouse Atlanta Church Website

A modern, responsive church website built with Next.js, React, and Tailwind CSS.

## 🏗️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: 19.0.0
- **Deployment**: WordPress-ready static export

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional church website design
- **Fast Performance**: Optimized with Next.js static generation
- **SEO Friendly**: Built-in SEO optimization
- **Accessible**: WCAG compliant design
- **Cross-browser**: Compatible with all modern browsers

## 📁 Project Structure

```
next-lighthouse/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── about/          # About page components
│   │   ├── contact/        # Contact page components
│   │   ├── ministries/     # Ministries page
│   │   ├── sermons/        # Sermons page
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Header.tsx      # Header component
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   └── styles/             # Global styles
├── public/                 # Static assets
│   ├── images/            # Image files
│   └── videos/            # Video files
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── next.config.ts         # Next.js configuration
└── README.md             # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lighthouse-atlanta.git
   cd lighthouse-atlanta
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deployment

### WordPress Deployment

This project is configured for WordPress deployment using static export:

1. **Build static files**
   ```bash
   npm run build
   npm run export
   ```

2. **Upload to WordPress**
   - Upload the contents of the `out/` directory to your WordPress hosting
   - Configure your domain to point to the uploaded files
   - Update DNS settings if necessary

### Alternative Deployment Options

- **Vercel**: `vercel --prod`
- **Netlify**: Connect GitHub repository
- **GitHub Pages**: Use GitHub Actions workflow

## 📝 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CHURCH_NAME=Lighthouse Atlanta
```

## 🎨 Customization

### Colors & Branding

Update colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'church-blue': '#1e3a8a',
        'church-yellow': '#fbbf24',
      }
    }
  }
}
```

### Content Updates

- **Pages**: Edit files in `src/app/`
- **Images**: Replace files in `public/`
- **Styling**: Modify Tailwind classes or add custom CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for Lighthouse Atlanta Church
- Designed with accessibility in mind
- Optimized for performance and SEO

## 📞 Support

For support, email info@lighthouseatlanta.com or create an issue in this repository.

---

**Lighthouse Atlanta Church** - Spreading God's light in Atlanta and beyond.
