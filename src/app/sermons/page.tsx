import Image from 'next/image';

const sermons = [
  { title: 'The Light of the World', speaker: 'Pastor John Doe', date: 'July 7, 2025', img: '/logo4.jpeg' },
  { title: 'Faith Over Fear', speaker: 'Pastor Jane Smith', date: 'June 30, 2025', img: '/logo4.jpeg' },
  { title: 'Hope in the Storm', speaker: 'Pastor John Doe', date: 'June 23, 2025', img: '/logo4.jpeg' },
];

export default function Sermons() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 bg-gradient-to-br from-blue-900 via-indigo-700 to-yellow-500 text-white overflow-hidden">
        <div className="absolute inset-0 animate-gradient-x bg-gradient-to-r from-blue-900 via-yellow-500 to-indigo-700 opacity-30 blur-2xl z-0" />
        <h1 className="relative z-10 text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl">
          Sermons
          <span className="block w-24 h-1 mx-auto mt-4 bg-yellow-400 rounded-full" />
        </h1>
        <p className="relative z-10 text-xl md:text-2xl max-w-2xl text-center mb-8">Catch up on recent messages and be encouraged by God’s Word. Let faith arise!</p>
      </section>
      {/* Sermons List */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          {sermons.map((sermon, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform border border-gray-200">
              <Image src={sermon.img} alt={sermon.title} width={80} height={80} className="mb-4 rounded-full shadow" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">{sermon.title}</h3>
              <p className="text-gray-700 mb-1">{sermon.speaker}</p>
              <p className="text-gray-500 text-sm mb-4">{sermon.date}</p>
              <a href="#" className="mt-4 inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-900 hover:text-yellow-400 transition">Watch</a>
            </div>
          ))}
        </div>
      </section>
      {/* Call to Watch/Listen */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Want More?</h2>
        <p className="text-xl text-gray-700 mb-8">Browse our full sermon archive or join us live this Sunday!</p>
        <a href="/" className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-900 hover:text-yellow-400 transition-all text-lg">Back to Home</a>
      </section>
    </main>
  );
} 