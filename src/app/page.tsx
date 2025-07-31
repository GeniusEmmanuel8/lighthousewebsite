'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      type: 'video',
      src: '/WhatsApp Video 2025-07-11 at 16.45.47.mp4',
      alt: 'Church Service Video'
    },
    {
      type: 'youtube',
      title: 'Watch Our Services Online',
      description: 'Can\'t make it in person? Join us virtually and experience the same powerful worship and teaching.',
      youtubeUrl: 'https://www.youtube.com/@RedeemedChristianChurchofGod'
    },
    {
      type: 'image',
      src: '/slideshow3.jpeg',
      alt: 'Church Community'
    },
    {
      type: 'image',
      src: '/slideshow2.jpeg',
      alt: 'Church Worship'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // 8 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <main className="bg-white min-h-screen">
      {/* Slideshow Section */}
      <section className="relative h-[calc(100vh-80px)] overflow-hidden mt-20">
        {currentSlideData.type === 'video' && (
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            src={currentSlideData.src}
            autoPlay 
            loop 
            muted 
            playsInline
          />
        )}
        
        {currentSlideData.type === 'image' && (
          <Image 
            src={currentSlideData.src}
            alt={currentSlideData.alt}
            fill
            className="object-cover"
            priority
          />
        )}
        
        {currentSlideData.type === 'youtube' && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-black mb-8">
                {currentSlideData.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {currentSlideData.description}
              </p>
              <a 
                href={currentSlideData.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
              >
                Watch Services Online
              </a>
            </div>
          </div>
        )}

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-blue-900 mb-8">Join Us This Sunday</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience powerful worship, inspiring teaching, and a welcoming community
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">Sunday Service</h3>
              <p className="text-4xl font-black text-yellow-500 mb-4">10:00 AM</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Main worship service with contemporary music, inspiring message, and children's ministry</p>
              <a href="/contact" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                Plan Your Visit
              </a>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">Location</h3>
              <p className="text-lg text-gray-700 mb-2">925 Highway 124</p>
              <p className="text-gray-600 mb-8">Braselton, GA 30517</p>
              <a href="/contact" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-blue-900 mb-8">Welcome to Our Church Family</h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Lighthouse Atlanta, we believe in creating a warm, welcoming environment where everyone can feel at home. 
              Whether you're new to faith or have been walking with Christ for years, you'll find a place to belong here.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-10 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <span className="text-yellow-400 mr-4">•</span>
                What to Expect
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span>Contemporary worship music</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span>Relevant, Bible-based teaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span>Friendly, welcoming community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span>Children's ministry available</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-10 text-blue-900 shadow-xl">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <span className="text-blue-900 mr-4">•</span>
                Our Mission
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                To be the Light of hope in a dark world, amplifying the joy of the Lord, 
                bringing liberty to the captive, and a more purposeful life to all.
              </p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-blue-900 mb-2">Payoff Line:</p>
                <p className="text-2xl italic font-bold text-blue-900">"...Be the Light, Shine your light"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-blue-900 mb-8">Our Ministries</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how you can get involved and grow in your faith
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Worship Team", description: "Join our dynamic worship team and help create an atmosphere of praise" },
              { name: "Children's Ministry", description: "Nurture the next generation with fun, faith-based activities and teaching" },
              { name: "Community Outreach", description: "Serve our community and share God's love in practical ways" }
            ].map((ministry, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Image src="/logo4.jpeg" alt={ministry.name} width={48} height={48} className="rounded-full" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{ministry.name}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{ministry.description}</p>
                <a href="/ministries" className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/ministries" className="bg-blue-900 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore All Ministries
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-6xl md:text-7xl font-black text-blue-900 mb-8">Ready to Visit?</h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We'd love to meet you! Join us this Sunday and experience the warmth of our church family.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="/contact" 
              className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Plan Your Visit
            </a>
            <a 
              href="/about" 
              className="bg-blue-900 text-yellow-400 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
