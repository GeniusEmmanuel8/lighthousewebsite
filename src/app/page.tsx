import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-32 md:py-40 text-white overflow-hidden mt-16 md:mt-20">
        <Image 
          src="/church photo.jpeg" 
          alt="Lighthouse Atlanta Church" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
            Welcome to Lighthouse Atlanta
            <span className="block w-24 h-1 mx-auto mt-4 bg-yellow-400 rounded-full" />
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            A welcoming community where faith, family, and fellowship come together. 
            We're here to help you grow in your relationship with Jesus Christ.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="/about" 
              className="bg-yellow-400 text-[#181e29] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#181e29] transition-all"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-8">Join Us This Sunday</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Sunday Service</h3>
              <p className="text-3xl font-bold text-yellow-500 mb-2">10:00 AM</p>
              <p className="text-gray-600">Main Worship Service</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Location</h3>
              <p className="text-lg text-gray-700 mb-2">925 Highway 124</p>
              <p className="text-gray-600">Braselton, GA 30517</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Contact</h3>
              <p className="text-lg text-gray-700 mb-2">(943) 264-9644</p>
              <p className="text-gray-600">info@lighthouseatlanta.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-8">Welcome to Our Church Family</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            At Lighthouse Atlanta, we believe in creating a warm, welcoming environment where everyone can feel at home. 
            Whether you're new to faith or have been walking with Christ for years, you'll find a place to belong here.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <span>Contemporary worship music</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <span>Relevant, Bible-based teaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <span>Friendly, welcoming community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <span>Children's ministry available</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To be the Light of hope in a dark world, amplifying the joy of the Lord, 
                bringing liberty to the captive, and a more purposeful life to all.
              </p>
              <p className="text-gray-700">
                <strong>Payoff Line:</strong> "...Be the Light, Shine your light"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Visit?</h2>
          <p className="text-xl mb-8">
            We'd love to meet you! Join us this Sunday and experience the warmth of our church family.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-yellow-400 text-[#181e29] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl"
            >
              Plan Your Visit
            </a>
            <a 
              href="/about" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#181e29] transition-all"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
