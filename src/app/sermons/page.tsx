import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sermons - Lighthouse Atlanta Church | Pastor Olumide Okeowo Preaching',
  description: 'Watch powerful sermons by Pastor Olumide Okeowo at Lighthouse Atlanta church in Atlanta, GA. Experience authentic preaching and be encouraged by God\'s Word. RCCG church sermons.',
  keywords: 'church sermons Atlanta, Pastor Olumide Okeowo sermons, Lighthouse Atlanta sermons, RCCG church sermons Atlanta, preaching Atlanta, pastor Atlanta, Christian sermons Atlanta',
  openGraph: {
    title: 'Sermons - Lighthouse Atlanta Church',
    description: 'Watch powerful sermons by Pastor Olumide Okeowo. Experience authentic preaching and be encouraged by God\'s Word.',
    images: ['/sermon pic.jpeg'],
  },
};

const sermons = [
  { title: 'The Light of the World', speaker: 'Pastor Olumide Okeowo', date: 'July 7, 2025', img: '/logo4.jpeg' },
  { title: 'Walking in Faith', speaker: 'Pastor Olumide Okeowo', date: 'June 30, 2025', img: '/logo4.jpeg' },
  { title: 'Hope in the Storm', speaker: 'Pastor Olumide Okeowo', date: 'June 23, 2025', img: '/logo4.jpeg' },
];

export default function Sermons() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-40 md:py-48 text-white overflow-hidden mt-16 md:mt-20">
        <Image 
          src="/sermon pic.jpeg" 
          alt="Lighthouse Atlanta Sermons - Pastor Olumide Okeowo Preaching" 
          fill 
          className="object-cover object-top z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <h1 className="relative z-10 text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl">
          Sermons
          <span className="block w-24 h-1 mx-auto mt-4 bg-yellow-400 rounded-full" />
        </h1>
        <p className="relative z-10 text-xl md:text-2xl max-w-2xl text-center mb-8">
          Catch up on recent messages and be encouraged by God&apos;s Word. Experience powerful preaching by Pastor Olumide Okeowo.
        </p>
      </section>

      {/* Sermons Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 text-center">Latest Church Sermons</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Experience authentic preaching and powerful messages from Pastor Olumide Okeowo. Be encouraged by God&apos;s Word.
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">More Sermons Available</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our YouTube channel for more powerful sermons and worship experiences.
          </p>
          <a 
            href="https://www.youtube.com/@RedeemedChristianChurchofGod" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-yellow-400 text-[#181e29] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl inline-block"
          >
            Click Here
          </a>
        </div>
      </section>
    </main>
  );
} 