import Link from 'next/link';

// SVG icons for social media
const TwitterIcon = () => (
  <svg className="w-7 h-7 text-gray-300 hover:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 12 9.54c0 .35.04.7.11 1.03-3.72-.19-7.02-1.97-9.22-4.68a4.48 4.48 0 0 0-.6 2.26c0 1.56.8 2.94 2.02 3.75-.74-.02-1.44-.23-2.05-.57v.06c0 2.18 1.55 4 3.6 4.42-.38.1-.78.16-1.2.16-.29 0-.57-.03-.84-.08.57 1.77 2.23 3.06 4.2 3.1A8.98 8.98 0 0 1 2 19.54c-.65 0-1.29-.04-1.92-.11A12.7 12.7 0 0 0 7.29 21c8.39 0 12.98-6.95 12.98-12.98 0-.2 0-.39-.01-.59.89-.64 1.66-1.44 2.2-2.35z" /></svg>
);
const InstagramIcon = () => (
  <svg className="w-7 h-7 text-gray-300 hover:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" /></svg>
);
const FacebookIcon = () => (
  <svg className="w-7 h-7 text-gray-300 hover:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#181e29] text-gray-300 pt-16 pb-6 px-4 md:px-0 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
        {/* Church Info */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Lighthouse Atlanta</h2>
          <p className="mb-6">A welcoming community where faith, family, and fellowship come together. We're here to help you grow in your relationship with Jesus Christ.</p>
          <div className="flex items-start gap-2 mb-2">
            <span className="material-icons text-yellow-400">location_on</span>
            <span>925 Highway 124, Braselton GA, 30517</span>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <span className="material-icons text-yellow-400">phone</span>
            <span>(943) 264-9644</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="material-icons text-yellow-400">email</span>
            <span>info@lighthouseatlanta.com</span>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-yellow-400 transition-colors">Service Times</Link></li>
            <li><Link href="/give" className="hover:text-yellow-400 transition-colors">Give Online</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
            <li><Link href="/sermons" className="hover:text-yellow-400 transition-colors">Watch Sermons</Link></li>
          </ul>
        </div>
        {/* Latest News */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Latest News</h3>
          <ul className="space-y-3">
            <li>
              <span className="block font-semibold">Youth Conference 2025</span>
              <span className="text-sm text-gray-400">July 20, 2025</span>
            </li>
            <li>
              <span className="block font-semibold">Community Outreach</span>
              <span className="text-sm text-gray-400">August 5, 2025</span>
            </li>
          </ul>
        </div>
        {/* Connect With Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Connect With Us</h3>
          <div className="flex gap-6 mt-2">
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter"><TwitterIcon /></Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram"><InstagramIcon /></Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook"><FacebookIcon /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Lighthouse Atlanta. All rights reserved.
      </div>
    </footer>
  );
} 