import React from 'react';
import Image from 'next/image';

const ministries = [
  { name: 'Worship Team', desc: 'Leading our church in passionate worship.', img: '/logo4.jpeg' },
  { name: 'Children’s Ministry', desc: 'Nurturing the next generation in faith.', img: '/logo4.jpeg' },
  { name: 'Outreach', desc: 'Serving our city and sharing God’s love.', img: '/logo4.jpeg' },
  { name: 'Prayer Team', desc: 'Covering our church and community in prayer.', img: '/logo4.jpeg' },
  { name: 'Hospitality', desc: 'Welcoming everyone with warmth and care.', img: '/logo4.jpeg' },
  { name: 'Media', desc: 'Supporting worship and outreach with tech and creativity.', img: '/logo4.jpeg' },
];

export default function Ministries() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 bg-gradient-to-br from-church-navy to-church-gold text-white">
        <h1 className="text-5xl md:text-7xl font-black mb-4">Our Ministries</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center mb-8">Find your place to serve, grow, and belong at Lighthouse Church.</p>
      </section>
      {/* Ministries Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {ministries.map((min, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
              <Image src={min.img} alt={min.name} width={80} height={80} className="mb-4 rounded-full" />
              <h3 className="text-2xl font-bold text-church-navy mb-2">{min.name}</h3>
              <p className="text-gray-700">{min.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Call to Join */}
      <section className="py-16 px-4 bg-church-navy text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
        <p className="text-xl mb-8">We’d love to help you find your place to serve and grow. Reach out to learn more about joining a ministry team!</p>
        <a href="/contact" className="inline-block bg-church-gold text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-white hover:text-church-navy transition">Contact Us</a>
      </section>
    </main>
  );
} 