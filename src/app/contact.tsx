import React from 'react';

export default function Contact() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 bg-gradient-to-br from-church-navy to-church-gold text-white">
        <h1 className="text-5xl md:text-7xl font-black mb-4">Contact Us</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center mb-8">We’d love to hear from you! Reach out with questions, prayer requests, or to get connected.</p>
      </section>
      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white rounded-2xl shadow-lg p-8 flex flex-col space-y-4">
            <input type="text" placeholder="Name" className="border rounded px-4 py-2" />
            <input type="email" placeholder="Email" className="border rounded px-4 py-2" />
            <textarea placeholder="Message" className="border rounded px-4 py-2 min-h-[120px]" />
            <button type="submit" className="bg-church-gold text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-church-navy transition">Send Message</button>
          </form>
          {/* Info Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-church-navy mb-4">Our Info</h2>
            <p className="mb-2">123 Lighthouse Ave, Tampa, FL</p>
            <p className="mb-2">info@lighthousechurch.com</p>
            <p className="mb-2">(555) 123-4567</p>
            <a href="#" className="mt-4 inline-block bg-church-gold text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-church-navy transition">Get Directions</a>
          </div>
        </div>
      </section>
    </main>
  );
} 