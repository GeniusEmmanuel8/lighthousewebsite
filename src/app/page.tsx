import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-40">
        {/* Video background */}
        <video className="absolute inset-0 w-full h-full object-cover z-0" src="/WhatsApp Video 2025-07-11 at 16.45.47.mp4" autoPlay loop muted playsInline />
        <div className="container mx-auto text-center relative z-10 mt-[28rem] md:mt-[32rem] mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white drop-shadow-2xl">Welcome <span className="bg-gradient-to-r from-church-gold to-church-navy bg-clip-text text-transparent">Home</span></h1>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <button className="bg-yellow-400 text-blue-900 text-xl px-12 py-6 rounded-full font-semibold drop-shadow-xl transition-all duration-300 hover:bg-blue-900 hover:text-yellow-400">Join Us This Sunday</button>
            <button className="bg-white text-church-navy text-xl px-12 py-6 rounded-full font-semibold drop-shadow-xl hover:bg-blue-900 hover:text-yellow-400 transition-all duration-300">Watch Live Stream</button>
          </div>
        </div>
      </section>
      {/* Service Times Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-church-navy mb-8">Service Times</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join us for worship, fellowship, and the Word of God
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-church-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-church-navy" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>
              </div>
              <h3 className="text-3xl font-bold text-church-navy mb-6">Sunday Morning</h3>
              <p className="text-4xl font-black text-church-gold mb-4">10:00 AM</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Main worship service with contemporary music, inspiring message, and children's ministry</p>
              <button className="bg-church-gold text-church-navy px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300">Plan Your Visit</button>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-church-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-church-navy" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/></svg>
              </div>
              <h3 className="text-3xl font-bold text-church-navy mb-6">Wednesday Bible Study</h3>
              <p className="text-4xl font-black text-church-gold mb-4">7:00 PM</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Dive deeper into God's Word with our midweek Bible study and prayer time</p>
              <button className="bg-church-gold text-church-navy px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300">Join Bible Study</button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Our Mission Section */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">Welcome to Lighthouse Church</h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">We are a vibrant, Christ-centered community passionate about loving God, loving people, and making disciples. Our mission is to shine God’s light in our city and beyond.</p>
        <Link href="/about" className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-900 hover:text-yellow-400 transition-all text-lg">Learn More About Us</Link>
      </section>

      {/* Ministries Preview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">Ministries</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Worship Team", "Children’s Ministry", "Outreach"].map((min, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <Image src="/logo4.jpeg" alt={min} width={80} height={80} className="mb-4 rounded-full" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{min}</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/ministries" className="inline-block bg-blue-900 text-yellow-400 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-blue-900 transition-all text-lg">See All Ministries</Link>
          </div>
        </div>
      </section>

      {/* Latest Sermons Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">Latest Sermons</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <Image src="/logo4.jpeg" alt={`Sermon ${i}`} width={80} height={80} className="mb-4 rounded-full" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">Sermon Title {i}</h3>
                <p className="text-gray-700 mb-1">Pastor Name</p>
                <p className="text-gray-500 text-sm mb-4">July {10 + i}, 2025</p>
                <Link href="/sermons" className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-900 hover:text-yellow-400 transition">Watch</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/sermons" className="inline-block bg-blue-900 text-yellow-400 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-blue-900 transition-all text-lg">Browse All Sermons</Link>
          </div>
        </div>
      </section>

      {/* Events / News Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">Upcoming Events & News</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Youth Conference 2025</h3>
              <p className="text-gray-700 mb-2">Join us for a powerful time of worship, teaching, and fun for all ages!</p>
              <p className="text-gray-500 text-sm mb-4">July 20, 2025</p>
              <Link href="/contact" className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-900 hover:text-yellow-400 transition">Learn More</Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Community Outreach</h3>
              <p className="text-gray-700 mb-2">Be a part of serving our city and sharing God’s love in practical ways.</p>
              <p className="text-gray-500 text-sm mb-4">August 5, 2025</p>
              <Link href="/contact" className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-900 hover:text-yellow-400 transition">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Newsletter Section */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Stay Connected</h2>
        <p className="text-xl text-gray-700 mb-8">Sign up for our newsletter to receive updates, encouragement, and event info.</p>
        <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 justify-center">
          <input type="email" placeholder="Your email address" className="flex-1 rounded-full border border-gray-300 px-6 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
          <button type="submit" className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-900 hover:text-yellow-400 transition-all text-lg">Subscribe</button>
        </form>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">What People Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
                <Image src="/logo4.jpeg" alt={`Testimonial ${i}`} width={64} height={64} className="mb-4 rounded-full" />
                <blockquote className="italic text-gray-700 mb-4">“Lighthouse Church has changed my life and helped me grow closer to God.”</blockquote>
                <p className="font-bold text-blue-900">Member {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
