import Image from 'next/image';
import Link from 'next/link';

export default function AboutContent() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-32 md:py-40 text-white overflow-hidden mt-16 md:mt-20">
        {/* Church Photo Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/church photo.jpeg" 
            alt="Lighthouse Atlanta Church" 
            fill 
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        <h1 className="relative z-20 text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl">
          Who We Are
          <span className="block w-24 h-1 mx-auto mt-4 bg-yellow-400 rounded-full" />
        </h1>
        <p className="relative z-20 text-xl md:text-2xl max-w-2xl text-center mb-8">Welcome to Lighthouse Atlanta! We are a vibrant, Christ-centered community passionate about loving God, loving people, and making disciples.</p>
      </section>
      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-church-navy mb-8">Our Vision & Mission</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our vision is adapted from the main vision of the RCCG
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all">
              <h3 className="text-4xl font-black text-church-navy mb-8 flex items-center">
                <span className="text-church-gold mr-4">•</span>
                Vision
              </h3>
              <p className="text-lg text-gray-700 mb-6">Our vision is adapted from the main vision of the RCCG:</p>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-gray-700">To make Heaven....</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-gray-700">To take as many people as possible with us....</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-gray-700">To have a member of RCCG in every family of all nations...</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-gray-700">To accomplish number 1 above, Holiness will be our lifestyle...</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-gray-700">To accomplish no. 2 and 3 above, we will plant Churches within 5 minutes driving distance in every city and town of developed countries.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-gold mr-3 mt-1">•</span>
                  <span className="text-gray-700">To pursue the above objectives until every nation in the World is reached for Jesus Christ our Lord!</span>
                </li>
              </ul>
            </div>
            {/* Mission */}
            <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all">
              <h3 className="text-4xl font-black text-church-navy mb-8 flex items-center">
                <span className="text-church-gold mr-4">•</span>
                Mission
              </h3>
              <p className="text-lg text-gray-700 mb-6">To be the Light of hope in a dark world, amplifying the joy of the Lord, bringing liberty to the captive, and a more purposeful life to all.</p>
              <div className="mt-8">
                <h4 className="text-2xl font-bold text-church-navy mb-4 flex items-center">
                  <span className="text-church-gold mr-3">•</span>
                  Mission Statement
                </h4>
                <p className="text-lg text-gray-700 mb-4">To be a light of hope in a dark world</p>
                <div className="mt-6">
                  <p className="text-lg font-semibold text-church-navy">Payoff Line:</p>
                  <p className="text-xl italic text-church-gold font-bold">"...Be the Light, Shine your light"</p>
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
            <p>To be the Light of hope in a dark world, amplifying the joy of the Lord, bringing liberty to the captive, and a more purposeful life to all.</p>
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
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Image src="/akin akinropo.jpeg" alt="Akin Akinropo" width={200} height={300} className="mx-auto mb-4 object-cover rounded-lg" />
            <h4 className="font-bold text-blue-900">Akin Akinropo</h4>
          </div>
          <div className="text-center">
            <Image src="/Dolapo Akinropo.jpeg" alt="Dolapo Akinropo" width={200} height={300} className="mx-auto mb-2 object-cover rounded-lg" />
            <h4 className="font-bold text-blue-900">Dolapo Akinropo</h4>
          </div>
          {[3,4].map((i) => (
            <div key={i} className="text-center">
              <Image src="/logo4.jpeg" alt={`Team member ${i}`} width={200} height={300} className="mx-auto mb-2 object-cover rounded-lg" />
              <h4 className="font-bold text-blue-900">Team Member {i}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 