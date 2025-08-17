'use client';

import React, { useState } from 'react';
import './contact.css';

interface EmailFormData {
  name: string;
  email: string;
  message: string;
}

interface SMSFormData {
  name: string;
  phone: string;
  message: string;
}

interface FormStatus {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
  success: string | null;
}

type ContactMethod = 'email' | 'sms';

export default function ContactContent() {
  const [contactMethod, setContactMethod] = useState<ContactMethod>('email');
  
  const [emailFormData, setEmailFormData] = useState<EmailFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [smsFormData, setSmsFormData] = useState<SMSFormData>({
    name: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
    success: null
  });

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: null }));
    }
  };

  const handleSmsInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSmsFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: null }));
    }
  };

  const validateEmailForm = (): boolean => {
    if (!emailFormData.name.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'Name is required' }));
      return false;
    }
    if (!emailFormData.email.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'Email is required' }));
      return false;
    }
    if (!emailFormData.email.includes('@')) {
      setFormStatus(prev => ({ ...prev, error: 'Please enter a valid email address' }));
      return false;
    }
    if (!emailFormData.message.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'Message is required' }));
      return false;
    }
    return true;
  };

  const validateSmsForm = (): boolean => {
    if (!smsFormData.name.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'Name is required' }));
      return false;
    }
    if (!smsFormData.phone.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'Phone number is required' }));
      return false;
    }
    // Better phone number validation - remove all non-digits and check length
    const phoneDigits = smsFormData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setFormStatus(prev => ({ ...prev, error: 'Please enter a valid phone number (at least 10 digits)' }));
      return false;
    }
    if (phoneDigits.length > 15) {
      setFormStatus(prev => ({ ...prev, error: 'Phone number is too long' }));
      return false;
    }
    if (!smsFormData.message.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'Message is required' }));
      return false;
    }
    return true;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmailForm()) {
      return;
    }

    setFormStatus(prev => ({ 
      ...prev, 
      isSubmitting: true, 
      error: null,
      success: null 
    }));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailFormData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus(prev => ({
          ...prev,
          isSubmitted: true,
          success: result.message,
          isSubmitting: false
        }));
        
        setEmailFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setFormStatus(prev => ({
          ...prev,
          error: result.error || 'Something went wrong. Please try again or email us at info@lighthouseatlanta.com',
          isSubmitting: false
        }));
      }
    } catch (error) {
      setFormStatus(prev => ({
        ...prev,
        error: 'Network error. Please check your connection and try again or email us at info@lighthouseatlanta.com',
        isSubmitting: false
      }));
    }
  };

  const handleSmsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateSmsForm()) {
      return;
    }

    setFormStatus(prev => ({ 
      ...prev, 
      isSubmitting: true, 
      error: null,
      success: null 
    }));

    try {
      const response = await fetch('/api/contact/sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(smsFormData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus(prev => ({
          ...prev,
          isSubmitted: true,
          success: result.message,
          isSubmitting: false
        }));
        
        setSmsFormData({
          name: '',
          phone: '',
          message: ''
        });
      } else {
        setFormStatus(prev => ({
          ...prev,
          error: result.error || 'Something went wrong. Please try again or call us at (943) 264-9644',
          isSubmitting: false
        }));
      }
    } catch (error) {
      setFormStatus(prev => ({
        ...prev,
        error: 'Network error. Please check your connection and try again or call us at (943) 264-9644',
        isSubmitting: false
      }));
    }
  };

  const resetForm = () => {
    setFormStatus({
      isSubmitting: false,
      isSubmitted: false,
      error: null,
      success: null
    });
  };

  const switchContactMethod = (method: ContactMethod) => {
    setContactMethod(method);
    resetForm();
  };

  return (
    <main className="bg-white min-h-screen font-sans pt-32 pb-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black text-blue-900 mb-4 drop-shadow-lg contact-hero-title">Contact Us</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6 contact-hero-subtitle">We&apos;d love to connect, pray with you, and help you find your place in our Lighthouse family. Reach out below or visit us in person!</p>
      </section>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Form Card */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
          <p className="text-gray-600 mb-6 text-center">
            Choose your preferred way to contact us. Email is best for detailed messages, while SMS is great for quick questions.
          </p>
          
          {/* Contact Method Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => switchContactMethod('email')}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
                contactMethod === 'email'
                  ? 'bg-yellow-400 text-blue-900 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => switchContactMethod('sms')}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
                contactMethod === 'sms'
                  ? 'bg-yellow-400 text-blue-900 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Text Message
            </button>
          </div>
          
          {/* Success Message */}
          {formStatus.success && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg contact-success-message">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">{formStatus.success}</span>
                </div>
                <button
                  onClick={resetForm}
                  className="text-green-600 hover:text-green-800 font-semibold hover:underline transition-all"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          )}

          {/* Error Message */}
          {formStatus.error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg contact-error-message">
              {formStatus.error}
            </div>
          )}

          {!formStatus.isSubmitted && (
            <>
              {/* Email Form */}
              {contactMethod === 'email' && (
                <form onSubmit={handleEmailSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1" htmlFor="email-name">
                      Name *
                    </label>
                    <input 
                      id="email-name" 
                      name="name" 
                      type="text" 
                      value={emailFormData.name}
                      onChange={handleEmailInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none contact-form-input" 
                      placeholder="Your Name"
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1" htmlFor="email-email">
                      Email *
                    </label>
                    <input 
                      id="email-email" 
                      name="email" 
                      type="email" 
                      value={emailFormData.email}
                      onChange={handleEmailInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none contact-form-input" 
                      placeholder="you@email.com"
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1" htmlFor="email-message">
                      Message *
                    </label>
                    <textarea 
                      id="email-message" 
                      name="message" 
                      rows={4} 
                      value={emailFormData.message}
                      onChange={handleEmailInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none contact-form-textarea" 
                      placeholder="How can we pray for you or help?"
                      disabled={formStatus.isSubmitting}
                      maxLength={500}
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {emailFormData.message.length}/500 characters
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus.isSubmitting}
                    className={`w-full font-bold py-3 rounded-lg shadow-lg transition-all text-lg contact-submit-btn ${
                      formStatus.isSubmitting
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        : 'bg-yellow-400 text-blue-900 hover:bg-blue-900 hover:text-yellow-400'
                    }`}
                  >
                    {formStatus.isSubmitting ? 'Sending...' : 'Send Email'}
                  </button>
                </form>
              )}

              {/* SMS Form */}
              {contactMethod === 'sms' && (
                <form onSubmit={handleSmsSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1" htmlFor="sms-name">
                      Name *
                    </label>
                    <input 
                      id="sms-name" 
                      name="name" 
                      type="text" 
                      value={smsFormData.name}
                      onChange={handleSmsInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none contact-form-input" 
                      placeholder="Your Name"
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1" htmlFor="sms-phone">
                      Phone Number *
                    </label>
                    <input 
                      id="sms-phone" 
                      name="phone" 
                      type="tel" 
                      value={smsFormData.phone}
                      onChange={handleSmsInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none contact-form-input" 
                      placeholder="(123) 456-7890"
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1" htmlFor="sms-message">
                      Message *
                    </label>
                    <textarea 
                      id="sms-message" 
                      name="message" 
                      rows={4} 
                      value={smsFormData.message}
                      onChange={handleSmsInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none contact-form-textarea" 
                      placeholder="How can we pray for you or help?"
                      disabled={formStatus.isSubmitting}
                      maxLength={160}
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {smsFormData.message.length}/160 characters (SMS limit)
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus.isSubmitting}
                    className={`w-full font-bold py-3 rounded-lg shadow-lg transition-all text-lg contact-submit-btn ${
                      formStatus.isSubmitting
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        : 'bg-yellow-400 text-blue-900 hover:bg-blue-900 hover:text-yellow-400'
                    }`}
                  >
                    {formStatus.isSubmitting ? 'Sending...' : 'Send Text Message'}
                  </button>
                </form>
              )}
            </>
          )}
        </div>

        {/* Contact Info & Map */}
        <div className="flex flex-col gap-8">
          <div className="bg-blue-900/80 rounded-3xl p-8 text-white shadow-xl flex flex-col gap-4 contact-info-card">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Our Location & Contact</h3>
            <div className="flex items-center gap-3">
              <span className="material-icons text-yellow-400">location</span>
              <span>925 Highway 124, Braselton GA, 30517</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-yellow-400">phone</span>
              <span>(943) 264-9644</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-yellow-400">email</span>
              <span>info@rccgthelighthouse.org</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-yellow-400">schedule</span>
              <span>Sunday Service: 10:00 AM</span>
            </div>
          </div>
          
          {/* Embedded Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 contact-map-container">
            <iframe
              title="Lighthouse Atlanta Location"
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