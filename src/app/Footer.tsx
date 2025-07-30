import Link from 'next/link';

// SVG icon for Facebook
const FacebookIcon = () => (
  <svg className="w-7 h-7 text-gray-300 hover:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#181e29] text-gray-300 pt-12 pb-4 px-6 md:px-8 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
        {/* Church Info */}
        <div className="pl-2">
          <h2 className="text-lg font-bold text-yellow-400 mb-3">Lighthouse Atlanta</h2>
          <p className="mb-4 text-sm">A welcoming community where faith, family, and fellowship come together. We&apos;re here to help you grow in your relationship with Jesus Christ.</p>
          <div className="flex items-start gap-2 mb-2">
            <span className="material-icons text-yellow-400 text-sm">location</span>
            <span className="text-sm">925 Highway 124, Braselton GA, 30517</span>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <span className="material-icons text-yellow-400 text-sm">phone</span>
            <span className="text-sm">(943) 264-9644</span>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <span className="material-icons text-yellow-400 text-sm">email</span>
            <span className="text-sm">info@lighthouseatlanta.com</span>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <span className="material-icons text-yellow-400 text-sm">schedule</span>
            <span className="text-sm">Sunday Service: 10:00 AM</span>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-base font-bold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-yellow-400 transition-colors text-sm">Service Times</Link></li>
            <li><Link href="/give" className="hover:text-yellow-400 transition-colors text-sm">Give Online</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition-colors text-sm">Contact</Link></li>
            <li><Link href="/sermons" className="hover:text-yellow-400 transition-colors text-sm">Watch Sermons</Link></li>
          </ul>
        </div>
        {/* Latest News */}
        <div>
          <h3 className="text-base font-bold text-yellow-400 mb-3">Latest News</h3>
          <ul className="space-y-2">
            <li>
              <span className="block font-semibold text-sm">Youth Conference 2025</span>
              <span className="text-xs text-gray-400">July 20, 2025</span>
            </li>
            <li>
              <span className="block font-semibold text-sm">Community Outreach</span>
              <span className="text-xs text-gray-400">August 5, 2025</span>
            </li>
          </ul>
        </div>
        {/* Connect With Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-base font-bold text-yellow-400 mb-3">Connect With Us</h3>
          <div className="flex gap-4 mt-1">
            <Link href="https://www.facebook.com/people/RCCG-Lighthouse-Atlanta/61567409593107/" target="_blank" aria-label="Facebook">
              <FacebookIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Lighthouse Atlanta. All rights reserved.
      </div>
    </footer>
  );
} 