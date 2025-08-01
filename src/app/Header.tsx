'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-1 md:py-2 px-4 md:px-12">
        {/* Logo and Name */}
        <div className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Image src="/Logo.jpeg" alt="Lighthouse Atlanta Logo" width={80} height={80} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain rounded-full shadow-md" />
            <span className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold text-gray-800 drop-shadow-sm hidden sm:block">RCCG Lighthouse, Atlanta</span>
          </Link>
        </div>
        
        {/* Desktop Nav Links */}
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
        
        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-white text-[#181e29] border border-[#e5e7eb] px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition-all">Plan a Visit</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-1 p-2"
        >
          <span className={`block w-6 h-0.5 bg-[#181e29] transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#181e29] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#181e29] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  pathname === link.href
                    ? 'block text-yellow-400 font-bold text-lg py-2'
                    : 'block text-[#181e29] hover:text-yellow-400 font-medium text-lg py-2 transition-all'
                }
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full bg-yellow-400 text-[#181e29] px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-300 transition-all">
                Plan a Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 