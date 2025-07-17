import Image from 'next/image';
import Link from 'next/link';

export default function AboutContent() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 bg-gradient-to-br from-blue-900 via-indigo-700 to-yellow-500 text-white overflow-hidden">
        <div className="absolute inset-0 animate-gradient-x bg-gradient-to-r from-blue-900 via-yellow-500 to-indigo-700 opacity-30 blur-2xl z-0" />
        <h1 className="relative z-10 text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl">
          Who We Are
          <span className="block w-24 h-1 mx-auto mt-4 bg-yellow-400 rounded-full" />
        </h1>
        <p className="relative z-10 text-xl md:text-2xl max-w-2xl text-center mb-8">Welcome to Lighthouse Atlanta! We are a vibrant, Christ-centered community passionate about loving God, loving people, and making disciples.</p>
      </section>
      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Mission</h2>
        <p className="text-xl max-w-3xl mx-auto text-gray-700">To lead people into a growing relationship with Jesus Christ and to shine His light in our city and beyond.</p>
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
            <p>We are sent to love, serve, and share the hope of Jesus with our neighbors and the nations.</p>
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
            <p>The Bible is God’s inspired Word, our guide for faith and life.</p>
          </div>
          <div className="bg-blue-900/90 rounded-xl p-6 text-white text-center">
            <h4 className="text-lg font-bold mb-2">Salvation</h4>
            <p>Salvation is a gift of grace through faith in Jesus Christ alone.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="#"><span className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-900 transition">Read Full Statement of Faith</span></Link>
        </div>
      </section>
      {/* Pastor's Word */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <Image src="/logo4.jpeg" alt="Pastor" width={96} height={96} className="mx-auto rounded-full mb-4" />
          <blockquote className="text-2xl italic text-blue-900 mb-4">“We are called to be a lighthouse—shining God’s love and truth in a world that needs hope.”</blockquote>
          <p className="font-bold text-yellow-600">Pastor John Doe</p>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Meet Our Team</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-6 text-center shadow">
              <Image src="/logo4.jpeg" alt={`Team member ${i}`} width={80} height={80} className="mx-auto rounded-full mb-2" />
              <h4 className="font-bold text-blue-900">Team Member {i}</h4>
              <p className="text-gray-600">Role</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 