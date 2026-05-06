'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mldgeqzz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="pt-32 md:pt-36 pb-20 bg-gradient-to-br from-accent-dark via-gray-900 to-accent-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="container-max relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary-500/15 text-primary-400 border border-primary-500/25 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Have questions about our products, need support, or want to discuss a partnership? 
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding -mt-0">
        <div className="container-max max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-accent-dark">Contact Information</h2>
                <p className="text-sm text-gray-500 mt-1">Reach out to us through any of these channels.</p>
              </div>

              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Email',
                  lines: ['uskeyvision@uskeyvision.com', 'support@uskeyvision.com'],
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Location',
                  lines: ['Shenzhen, Guangdong', 'China'],
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Business Hours',
                  lines: ['Mon - Fri: 9AM - 6PM (CST)', 'Response within 24 hours'],
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent-dark">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-gray-500 mt-0.5">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-accent-dark mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { name: 'YouTube', href: 'https://www.youtube.com/uskeyvision' },
                    { name: 'Instagram', href: 'https://www.instagram.com/uskeyvision/' },
                    { name: 'TikTok', href: 'https://www.tiktok.com/@uskeyvision.global' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Amazon Store */}
              <div className="p-5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
                <p className="text-sm font-semibold text-orange-800">🛒 Shop on Amazon</p>
                <p className="text-xs text-orange-600 mt-1">Visit our official Amazon store for the best deals and Prime shipping.</p>
                <a 
                  href="https://www.amazon.com/stores/USKEYVISION/page/4F07745A-3ACD-4721-B7EA-0658F0E6BD05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold text-orange-600 mt-2 hover:underline"
                >
                  Visit Store →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form 
                action="https://formspree.io/f/mldgeqzz"
                method="POST"
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6"
              >
                <input type="hidden" name="_subject" value="USKEYVISION Contact Form Submission" />
                <input type="hidden" name="_next" value="https://uskeyvision.com/contact?success=1" />
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <select id="subject" name="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-white">
                    <option>General Inquiry</option>
                    <option>Product Support</option>
                    <option>Warranty Claim</option>
                    <option>Partnership / B2B</option>
                    <option>Press & Media</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm resize-y" placeholder="Tell us how we can help..." />
                </div>

                <button type="submit" className="btn-primary w-full !py-4 text-base">
                  Send Message
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
