import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ministries - Lighthouse Atlanta African Church | Youth, Prayer & Community Outreach',
  description: 'Explore our ministries at Lighthouse Atlanta African church in Atlanta, GA. Join our youth ministry, prayer ministry, and community outreach programs. RCCG church serving the African community.',
  keywords: 'African church ministries Atlanta, Lighthouse Atlanta ministries, RCCG church ministries Atlanta, African youth ministry Atlanta, prayer ministry Atlanta, community outreach Atlanta, African church programs',
  openGraph: {
    title: 'Ministries - Lighthouse Atlanta African Church',
    description: 'Explore our ministries including youth ministry, prayer ministry, and community outreach programs serving the African community in Atlanta.',
    images: ['/church photo 2.jpeg'],
  },
};

const ministries = [
  { name: 'Worship Team', desc: 'Leading our church in passionate worship.', img: '/logo4.jpeg' },
  { name: 'Children\'s Ministry', desc: 'Nurturing the next generation in faith.', img: '/logo4.jpeg' },
  { name: 'Outreach', desc: 'Serving our city and sharing God\'s love.', img: '/logo4.jpeg' },
  { name: 'Prayer Team', desc: 'Covering our church and community in prayer.', img: '/logo4.jpeg' },
  { name: 'Hospitality', desc: 'Welcoming everyone with warmth and care.', img: '/logo4.jpeg' },
  { name: 'Media', desc: 'Supporting worship and outreach with tech and creativity.', img: '/logo4.jpeg' },
];

export default function Ministries() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-32 md:py-40 text-white overflow-hidden mt-16 md:mt-20">
        <Image 
          src="/church photo 2.jpeg" 
          alt="Church background" 
          fill 
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <h1 className="relative z-10 text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl">
          Our Ministries
          <span className="block w-24 h-1 mx-auto mt-4 bg-yellow-400 rounded-full" />
        </h1>
        <p className="relative z-10 text-xl md:text-2xl max-w-2xl text-center mb-8">Find your place to serve, grow, and belong at Lighthouse Atlanta. Every ministry is a chance to shine God&apos;s light!</p>
      </section>
      
      {/* Ministries List */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          {ministries.map((min, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform border border-gray-200">
              <Image src={min.img} alt={min.name} width={80} height={80} className="mb-4 rounded-full shadow" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{min.name}</h3>
              <p className="text-gray-700">{min.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Join */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Get Involved?</h2>
        <p className="text-xl text-gray-700 mb-8">There&apos;s a place for you in our Lighthouse family. Discover your gifts and make a difference!</p>
        <Link href="/contact" className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-900 hover:text-yellow-400 transition-all text-lg">Contact Us to Join a Ministry</Link>
      </section>
    </main>
  );
} 