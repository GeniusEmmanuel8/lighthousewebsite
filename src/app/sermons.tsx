import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const sermons = [
  { title: 'The Light of the World', speaker: 'Pastor Olumide Okeowo', date: 'July 7, 2025', img: '/logo4.jpeg' },
  { title: 'Walking in Faith', speaker: 'Pastor Olumide Okeowo', date: 'June 30, 2025', img: '/logo4.jpeg' },
  { title: 'Hope in the Storm', speaker: 'Pastor Olumide Okeowo', date: 'June 23, 2025', img: '/logo4.jpeg' },
];

export default function Sermons() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 bg-gradient-to-br from-church-navy to-church-gold text-white">
        <h1 className="text-5xl md:text-7xl font-black mb-4">Sermons</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center mb-8">Catch up on recent messages and be encouraged by God’s Word.</p>
      </section>
      {/* Sermons List */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          {sermons.map((sermon, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
              <Image src={sermon.img} alt={sermon.title} width={80} height={80} className="mb-4 rounded-full" />
              <h3 className="text-xl font-bold text-church-navy mb-2">{sermon.title}</h3>
              <p className="text-gray-700 mb-1">{sermon.speaker}</p>
              <p className="text-gray-500 text-sm">{sermon.date}</p>
              <a href="#" className="mt-4 inline-block bg-church-gold text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-church-navy transition">Watch</a>
            </div>
          ))}
        </div>
      </section>
      {/* Call to Watch/Listen */}
      <section className="py-16 px-4 bg-church-navy text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want More?</h2>
        <p className="text-xl mb-8">Browse our full sermon archive or join us live this Sunday!</p>
        <Link href="/" className="inline-block bg-church-gold text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-white hover:text-church-navy transition">Back to Home</Link>
      </section>
    </main>
  );
} 