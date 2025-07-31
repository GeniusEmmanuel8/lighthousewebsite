'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo and Name */}
        <div className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Image src="/Logo.jpeg" alt="Lighthouse Atlanta Logo" width={64} height={64} className="h-16 w-16 object-contain rounded-full shadow-md" />
          </Link>
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? 'text-yellow-400 font-bold underline underline-offset-4 decoration-yellow-400 transition-all'
                  : 'text-[#181e29] hover:text-yellow-400 font-medium transition-all'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-[#181e29] border border-[#e5e7eb] px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition-all">Plan a Visit</button>
        </div>
      </nav>
    </header>
  );
} 