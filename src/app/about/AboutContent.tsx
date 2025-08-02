'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AboutContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: '/church photo.jpeg',
      alt: 'Lighthouse Atlanta Church'
    },
    {
      src: '/White Pastors Visitation Website.JPG',
      alt: 'Pastors Visitation'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20 text-white overflow-hidden mt-16 md:mt-20 h-screen">
        {/* Church Photo Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={currentSlideData.src}
            alt={currentSlideData.alt}
            fill 
            className="object-cover transition-all duration-1000 ease-in-out"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black mb-3 sm:mb-4 drop-shadow-2xl">
            Who We Are
            <span className="block w-16 sm:w-20 md:w-24 h-1 mx-auto mt-2 sm:mt-3 md:mt-4 bg-yellow-400 rounded-full" />
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
            Welcome to Lighthouse Atlanta! We are a vibrant, Christ-centered community passionate about loving God, loving people, and making disciples.
          </p>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-church-navy mb-4 md:mb-8">Our Vision & Mission</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Our vision is adapted from the main vision of the RCCG
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-church-navy mb-6 md:mb-8 flex items-center">
                <span className="text-church-gold mr-3 md:mr-4">•</span>
                Vision
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">Our vision is adapted from the main vision of the RCCG:</p>
              <ul className="space-y-3 md:space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-sm md:text-base text-gray-700">To make Heaven....</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-sm md:text-base text-gray-700">To take as many people as possible with us....</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-sm md:text-base text-gray-700">To have a member of RCCG in every family of all nations...</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-sm md:text-base text-gray-700">To accomplish number 1 above, Holiness will be our lifestyle...</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-sm md:text-base text-gray-700">To accomplish no. 2 and 3 above, we will plant Churches within 5 minutes driving distance in every city and town of developed countries.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-sm md:text-base text-gray-700">To pursue the above objectives until every nation in the World is reached for Jesus Christ our Lord!</span>
                </li>
              </ul>
            </div>
            {/* Mission */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-church-navy mb-6 md:mb-8 flex items-center">
                <span className="text-church-gold mr-3 md:mr-4">•</span>
                Mission
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">To be a light of hope in a dark world, amplifying the joy of the Lord, bringing freedom to the captive, and inspiring a purposeful life for all.</p>
              <div className="mt-6 md:mt-8">
                <h4 className="text-xl md:text-2xl font-bold text-church-navy mb-3 md:mb-4 flex items-center">
                  <span className="text-church-gold mr-3">•</span>
                  Mission Statement
                </h4>
                <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">Bringing hope, joy, freedom, and purpose to a world in need through the light of Christ.</p>
                <div className="mt-4 md:mt-6">
                  <p className="text-base md:text-lg font-semibold text-church-navy mb-2">Payoff Line:</p>
                  <p className="text-lg md:text-xl italic text-church-gold font-bold">"...Be the Light, Shine your light"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Heart & Rhythms */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-blue-900/90 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Our Heart</h3>
            <p>We are a people on mission, multiplying disciples, and living out the love of Christ in every sphere of life.</p>
          </div>
          <div className="bg-yellow-500/90 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Our Rhythms</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Gathering for worship and community</li>
              <li>Growing through discipleship and prayer</li>
              <li>Going to serve and reach our city</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Our Pillars */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Pillars</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h4 className="text-xl font-bold mb-2">Worship</h4>
            <p>We exist to glorify God in all we do, both in gathered worship and daily life.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h4 className="text-xl font-bold mb-2">Mission</h4>
            <p>To be a light of hope in a dark world, amplifying the joy of the Lord, bringing freedom to the captive, and inspiring a purposeful life for all.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h4 className="text-xl font-bold mb-2">Community</h4>
            <p>We grow together in authentic relationships, supporting and encouraging one another.</p>
          </div>
        </div>
      </section>
      {/* What We Believe */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">What We Believe</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-blue-900/90 rounded-xl p-6 text-white text-center">
            <h4 className="text-lg font-bold mb-2">God</h4>
            <p>We believe in one God—Father, Son, and Holy Spirit—who is loving, holy, and just.</p>
          </div>
          <div className="bg-yellow-500/90 rounded-xl p-6 text-white text-center">
            <h4 className="text-lg font-bold mb-2">The Bible</h4>
            <p>The Bible is God's inspired Word, our guide for faith and life.</p>
          </div>
          <div className="bg-blue-900/90 rounded-xl p-6 text-white text-center">
            <h4 className="text-lg font-bold mb-2">Salvation</h4>
            <p>Salvation is a gift of grace through faith in Jesus Christ alone.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/Our Statement of Faith.docx" target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-900 transition">Read Full Statement of Faith</span>
          </a>
        </div>
      </section>
      {/* Pastor's Word */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <Image src="/logo4.jpeg" alt="Pastor" width={96} height={96} className="mx-auto rounded-full mb-4" />
          <blockquote className="text-2xl italic text-blue-900 mb-4">
            "Beloved, we declare by faith that 2025 is our Year of His Power. We trust the Lord to stir up and activate His mighty power already at work within you—bringing you into spiritual maturity and aligning you fully with His divine purpose for your life. May you rise into the fullness of all that God has destined you to be, in Jesus' mighty Name."
          </blockquote>
          <p className="text-sm text-gray-600 mb-2">Ephesians 3:18–20 (NKJV)</p>
          <p className="font-bold text-yellow-600">Pastor Olumide Okeowo</p>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto">
          {/* Pastors at the top */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="text-center">
              <div className="w-40 h-52 md:w-48 md:h-64 mx-auto mb-4 overflow-hidden rounded-lg">
                <Image src="/pastorolumideokeowo2.jpeg" alt="Olumide Okeowo" width={192} height={256} className="w-full h-full object-cover object-top" />
              </div>
              <h4 className="font-bold text-blue-900 text-lg md:text-xl">Olumide Okeowo</h4>
              <p className="text-sm text-gray-600">Senior Pastor</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-52 md:w-48 md:h-64 mx-auto mb-4 overflow-hidden rounded-lg">
                <Image src="/Daamy Headshot.jpg" alt="Damilola Okeowo" width={192} height={256} className="w-full h-full object-cover object-top" />
              </div>
              <h4 className="font-bold text-blue-900 text-lg md:text-xl">Damilola Okeowo</h4>
              <p className="text-sm text-gray-600">Pastor (Mrs)</p>
            </div>
          </div>
          
          {/* Team members below in grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {/* Ajibola */}
            <div className="text-center">
              <div className="w-32 h-40 md:w-48 md:h-64 mx-auto mb-4 overflow-hidden rounded-lg">
                <Image src="/Pst Ajibola Website.JPG" alt="Ajibola Olorungbon" width={192} height={256} className="w-full h-full object-cover object-top" />
              </div>
              <h4 className="font-bold text-blue-900 text-sm md:text-base">Ajibola Olorungbon</h4>
              <p className="text-xs md:text-sm text-gray-600">Assistant Pastor</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-40 md:w-48 md:h-64 mx-auto mb-4 overflow-hidden rounded-lg">
                <Image src="/Dolapo Akinropo Website.jpg" alt="Dolapo Akinropo" width={192} height={256} className="w-full h-full object-cover object-top" />
              </div>
              <h4 className="font-bold text-blue-900 text-sm md:text-base">Dolapo Akinropo</h4>
              <p className="text-xs md:text-sm text-gray-600">Minister</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-40 md:w-48 md:h-64 mx-auto mb-4 overflow-hidden rounded-lg">
                <Image src="/Akin akinropo Website.jpg" alt="Akin Akinropo" width={192} height={256} className="w-full h-full object-cover object-top" />
              </div>
              <h4 className="font-bold text-blue-900 text-sm md:text-base">Akin Akinropo</h4>
              <p className="text-xs md:text-sm text-gray-600">Minister</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-40 md:w-48 md:h-64 mx-auto mb-4 overflow-hidden rounded-lg">
                <Image src="/Pastor Isaac Akingbade Website.JPG" alt="Isaac Akingbade" width={192} height={256} className="w-full h-full object-cover object-center" />
              </div>
              <h4 className="font-bold text-blue-900 text-sm md:text-base">Isaac Akingbade</h4>
              <p className="text-xs md:text-sm text-gray-600">Minister</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 