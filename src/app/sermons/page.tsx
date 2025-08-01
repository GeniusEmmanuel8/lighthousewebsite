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
  { 
    title: 'The Power of Patience', 
    speaker: 'Pastor Olumide Okeowo', 
    date: 'January 2025', 
    img: '/logo4.jpeg',
    videoUrl: 'https://www.youtube.com/watch?v=WXUnood2fvM&t=11s'
  },
  { 
    title: 'Activating the Power of Joy', 
    speaker: 'Pastor Olumide Okeowo', 
    date: 'January 2025', 
    img: '/logo4.jpeg',
    videoUrl: 'https://www.youtube.com/watch?v=nDUzq65WRbo&t=3s'
  },
  { 
    title: 'The Power of Knowledge', 
    speaker: 'Pastor Olumide Okeowo', 
    date: 'January 2025', 
    img: '/logo4.jpeg',
    videoUrl: 'https://www.youtube.com/watch?v=flCfYwNRs4c&t=42s'
  },
];

export default function Sermons() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-16 sm:py-24 md:py-40 lg:py-48 text-white overflow-hidden mt-16 md:mt-20">
        <Image 
          src="/sermon pic.jpeg" 
          alt="Lighthouse Atlanta Sermons - Pastor Olumide Okeowo Preaching" 
          fill 
          className="object-cover object-top z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-3 sm:mb-4 drop-shadow-2xl px-4 text-center">
          Sermons
          <span className="block w-16 sm:w-20 md:w-24 h-1 mx-auto mt-2 sm:mt-3 md:mt-4 bg-yellow-400 rounded-full" />
        </h1>
        <p className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl text-center mb-6 sm:mb-8 px-4">
          Catch up on recent messages and be encouraged by God&apos;s Word. Experience powerful preaching by Pastor Olumide Okeowo.
        </p>
      </section>

      {/* Sermons Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-900 mb-3 sm:mb-4 text-center">Latest Church Sermons</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Experience authentic preaching and powerful messages from Pastor Olumide Okeowo. Be encouraged by God&apos;s Word.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {sermons.map((sermon, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-40 sm:h-48 bg-gray-200">
                  <Image src={sermon.img} alt={sermon.title} fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-base sm:text-lg text-blue-900 mb-2">{sermon.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">{sermon.speaker}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{sermon.date}</p>
                  <a 
                    href={sermon.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-[#181e29] px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all inline-block text-sm sm:text-base"
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-900 mb-4 sm:mb-6">More Sermons Available</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Visit our YouTube channel for more powerful sermons and worship experiences.
          </p>
          <a 
            href="https://www.youtube.com/@RCCGTheLighthouse" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-yellow-400 text-[#181e29] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl inline-block"
          >
            Click Here
          </a>
        </div>
      </section>
    </main>
  );
} 