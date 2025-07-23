"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import React from 'react';

// Hero Slideshow Component
function BannerSlideshow() {
  // Slides: first is video, then images
  const slides = [
    { type: 'video', src: '/WhatsApp%20Video%202025-07-11%20at%2016.45.47.mp4' },
    { type: 'image', src: '/landscapebanner.jpeg' },
    { type: 'image', src: '/landscapebanner2.jpeg' },
    { type: 'video', src: '/WhatsApp%20Video%202025-07-11%20at%2016.45.47.mp4' }, // new video slide
  ];
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!animating) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [index, animating]);

  // Swipe/drag handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        setAnimating(true);
        setTimeout(() => {
          setIndex((i) => (i + 1) % slides.length);
          setAnimating(false);
        }, 1000);
      } else if (diff < -50) {
        setAnimating(true);
        setTimeout(() => {
          setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
          setAnimating(false);
        }, 1000);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };
  // Mouse drag for desktop
  const mouseDownX = useRef<number | null>(null);
  const mouseUpX = useRef<number | null>(null);
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { mouseDownX.current = e.clientX; };
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    mouseUpX.current = e.clientX;
    if (mouseDownX.current !== null && mouseUpX.current !== null) {
      const diff = mouseDownX.current - mouseUpX.current;
      if (diff > 50) {
        setAnimating(true);
        setTimeout(() => {
          setIndex((i) => (i + 1) % slides.length);
          setAnimating(false);
        }, 1000);
      } else if (diff < -50) {
        setAnimating(true);
        setTimeout(() => {
          setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
          setAnimating(false);
        }, 1000);
      }
    }
    mouseDownX.current = null;
    mouseUpX.current = null;
  };

  const goToSlide = (newIndex: number) => {
    if (newIndex !== index && !animating) {
      setAnimating(true);
      setIndex(newIndex);
      setTimeout(() => {
        setAnimating(false);
      }, 800);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative select-none bg-black">
      <div
        className="w-full h-full flex items-center justify-center relative mx-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{ cursor: 'grab', height: '100%' }}
      >
        {/* Slide Content */}
        {slides[index].type === 'video' ? (
          <video
            key={slides[index].src}
            src={slides[index].src}
            className={`w-full h-full object-cover mx-auto transition-all duration-1000 ease-out ${animating ? 'opacity-50 scale-98' : 'opacity-100 scale-100'}`}
            autoPlay
            muted
            loop
            playsInline
            style={{ zIndex: 1, background: 'black' }}
          />
        ) : (
          <img
            key={slides[index].src}
            src={slides[index].src}
            alt={`Banner ${index + 1}`}
            className={`w-full h-full object-cover mx-auto transition-all duration-1000 ease-out ${animating ? 'opacity-50 scale-98' : 'opacity-100 scale-100'}`}
            style={{ zIndex: 1, background: 'black' }}
          />
        )}
        {/* Overlay content for first slide (example: join online) */}
        {index === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black bg-opacity-40">
            <h1 className="text-white text-4xl md:text-5xl font-black mb-8 text-center drop-shadow-lg">JOIN OUR SERVICES ONLINE</h1>
            <a
              href="https://www.youtube.com/@RCCGTheLighthouse"
            target="_blank"
            rel="noopener noreferrer"
              className="flex items-center bg-black bg-opacity-80 text-white px-8 py-4 rounded-lg text-xl font-bold border-2 border-white hover:bg-opacity-100 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6.5A2.5 2.5 0 016.5 4h7A2.5 2.5 0 0116 6.5v11A2.5 2.5 0 0113.5 20h-7A2.5 2.5 0 014 17.5v-11z" />
              </svg>
              JOIN HERE
            </a>
          </div>
        )}
        {/* Dots navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-white scale-110' : 'bg-gray-400 hover:bg-gray-300'} border border-gray-300`}
              aria-label={`Go to slide ${i + 1}`}
              style={{ outline: 'none' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Birthdays Carousel Component - Show 3 pictures, scroll by 1
function BirthdaysCarousel() {
  const birthdays = [
    { img: '/birthday photo1.jpeg', name: 'Birthday Member 1' },
    { img: '/birthday photo2.jpeg', name: 'Birthday Member 2' },
    { img: '/birthday photo3.jpeg', name: 'Birthday Member 3' },
    { img: '/birthday photo 4.jpeg', name: 'Birthday Member 4' },
    { img: '/birthday photo1.jpeg', name: 'Birthday Member 5' },
    { img: '/birthday photo2.jpeg', name: 'Birthday Member 6' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!animating) {
        setAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % (birthdays.length - 2));
          setAnimating(false);
        }, 500);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, animating, birthdays.length]);

  const goToSlide = (newIndex: number) => {
    if (newIndex !== currentIndex && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Images Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 33.333}%)`,
          width: `${(birthdays.length - 2) * 33.333}%`
        }}
      >
        {birthdays.map((birthday, index) => (
          <div key={index} className="w-1/3 flex-shrink-0 px-4">
          <Image
              src={birthday.img} 
              alt={birthday.name}
              width={300}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: birthdays.length - 2 }, (_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex 
                ? 'bg-church-gold scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen">
        <BannerSlideshow />
      </section>

      {/* Service Times Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">Join Us This Sunday</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">Experience the power of worship and community in a welcoming environment</p>
          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Sunday Service</h3>
              <p className="text-4xl font-black text-yellow-400 mb-4">10:00 AM</p>
              <p className="text-lg text-gray-600">925 Highway 124, Braselton GA, 30517</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Tuesday Service</h3>
              <p className="text-4xl font-black text-yellow-400 mb-4">7:00 PM</p>
              <p className="text-lg text-gray-600">925 Highway 124, Braselton GA, 30517</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">About Our Church Community</h2>
              <p className="text-lg text-gray-700 mb-6">
                Lighthouse Atlanta is a vibrant church in Atlanta, GA, serving our community. 
                We are part of the Redeemed Christian Church of God (RCCG) family, bringing authentic worship 
                and powerful preaching to Atlanta.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our church is a place where people can find community, spiritual growth, and a connection 
                to their faith. We welcome everyone to experience the joy of worship 
                and the power of God&apos;s Word.
              </p>
              <Link href="/about" className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-all">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
          <Image
                src="/church photo.jpeg" 
                alt="Lighthouse Atlanta Church Community" 
                width={600} 
                height={400} 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 text-center">Latest Sermons</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Experience powerful preaching by Pastor Olumide Okeowo. Watch our latest sermons and be encouraged by God&apos;s Word.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {sermons.map((sermon, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  <Image src={sermon.img} alt={sermon.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-blue-900 mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 mb-2">{sermon.speaker}</p>
                  <p className="text-sm text-gray-500 mb-4">{sermon.date}</p>
                  <a 
                    href={sermon.videoUrl} 
          target="_blank"
          rel="noopener noreferrer"
                    className="bg-yellow-400 text-[#181e29] px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all inline-block"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/sermons" className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-all">
              View All Sermons
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 text-center">Our Ministries</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Get involved in our various ministries and find your place to serve, grow, and belong in our church community.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{ministry.title}</h3>
                <p className="text-gray-600">{ministry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthdays Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 text-center">Birthday Celebrations</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Celebrating our church family members and their special days. Join us in wishing them a blessed birthday!
          </p>
          <BirthdaysCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Join Our Lighthouse Atlanta Family</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the warmth of community, the power of authentic worship, and the life-changing message of Jesus Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-[#181e29] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl">
              Plan Your Visit
            </Link>
            <Link href="/about" className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl">
              Learn More About Us
            </Link>
          </div>
    </div>
      </section>

    </main>
  );
}

const sermons = [
  { title: 'The Power of Patience', speaker: 'Pastor Olumide Okeowo', date: 'July 7, 2025', img: '/logo4.jpeg', videoUrl: 'https://www.youtube.com/watch?v=WXUnood2fvM' },
  { title: 'Activating the Power of Joy', speaker: 'Pastor Olumide Okeowo', date: 'June 30, 2025', img: '/logo4.jpeg', videoUrl: 'https://www.youtube.com/watch?v=nDUzq65WRbo' },
  { title: 'The Power of Knowledge', speaker: 'Pastor Olumide Okeowo', date: 'June 23, 2025', img: '/logo4.jpeg', videoUrl: 'https://www.youtube.com/watch?v=flCfYwNRs4c' },
];

const ministries = [
  { title: 'Youth Ministry', description: 'Empowering young people with faith, leadership, and community connection.', icon: '🌟' },
  { title: 'Prayer Ministry', description: 'Join our prayer warriors in interceding for our community and the world.', icon: '💫' },
  { title: 'Community Outreach', description: 'Serving the Atlanta community through various outreach programs and initiatives.', icon: '✨' },
];
