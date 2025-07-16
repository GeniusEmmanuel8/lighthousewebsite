import React from 'react';

export default function ContactContent() {
  return (
    <main className="bg-white min-h-screen font-sans pt-32 pb-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black text-blue-900 mb-4 drop-shadow-lg">Contact Us</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6">We'd love to connect, pray with you, and help you find your place in our Lighthouse family. Reach out below or visit us in person!</p>
      </section>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Form Card */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
              <input id="name" name="name" type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none" placeholder="How can we pray for you or help?"></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-lg shadow-lg hover:bg-blue-900 hover:text-yellow-400 transition-all text-lg">Send Message</button>
          </form>
        </div>
        {/* Contact Info & Map */}
        <div className="flex flex-col gap-8">
          <div className="bg-blue-900/80 rounded-3xl p-8 text-white shadow-xl flex flex-col gap-4">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Our Location & Contact</h3>
            <div className="flex items-center gap-3">
              <span className="material-icons text-yellow-400">location_on</span>
              <span>925 Highway 124, Braselton GA, 30517</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-yellow-400">phone</span>
              <span>(943) 264-9644</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-yellow-400">email</span>
              <span>info@lighthousechurch.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-yellow-400">schedule</span>
              <span>Sunday Service: 10:00 AM</span>
            </div>
          </div>
          {/* Embedded Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Lighthouse Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.964963964019!2d-83.8198576847936!3d34.1206571805736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a2e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2s925%20Highway%20124%2C%20Braselton%2C%20GA%2030517!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
} 