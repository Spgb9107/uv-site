import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="pt-32 md:pt-36 pb-20 bg-gradient-to-br from-accent-dark via-gray-900 to-accent-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-400/5 rounded-full blur-[120px]" />
        
        <div className="container-max relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary-500/15 text-primary-400 border border-primary-500/25 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            Support
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            How Can We<br />Help You?
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Get answers to common questions, download product manuals, and contact our support team.
          </p>
        </div>
      </section>

      {/* Support Content */}
      <section className="section-padding">
        <div className="container-max max-w-5xl">
          {/* Help Topics */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-accent-dark mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  ),
                  title: 'Product Setup',
                  desc: 'Learn how to set up and configure your USKEYVISION vlogging kit for optimal performance.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  title: 'Warranty Info',
                  desc: 'All USKEYVISION products come with a 12-month warranty covering manufacturing defects.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m0 0v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v3.916m12.003 0c.39-.098.78-.202 1.168-.29V14.25a1.5 1.5 0 00-1.5-1.5h-1.5v5.25m0 0c.197.087.39.193.578.29V14.25a1.5 1.5 0 00-1.5-1.5H12v6.75m0 0c-.197.087-.39.193-.578.29V21m0 0H3.375c-.621 0-1.125-.504-1.125-1.125v-1.5" />
                    </svg>
                  ),
                  title: 'Shipping Policy',
                  desc: 'Free shipping on orders over $50. Standard delivery takes 5-10 business days.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  ),
                  title: 'Returns & Refunds',
                  desc: '30-day hassle-free returns. Contact us for return authorization and prepaid shipping labels.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.996v3.5c0 1.025-.745 1.639-1.45 1.996a2.647 2.647 0 01-.67.442c-1.171 1.025-1.171 2.687 0 3.712 1.17 1.025 3.07 1.025 4.242 0 1.172-1.025 1.172-2.687 0-3.712-.203-.179-.43-.326-.67-.442-.745-.361-1.45-.999-1.45-1.996v-3.5c0-1.025.745-1.639 1.45-1.996a2.647 2.647 0 01.67-.442z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  ),
                  title: 'Troubleshooting',
                  desc: 'Having issues? Check our troubleshooting guides for quick solutions to common problems.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  title: 'Contact Support',
                  desc: 'Our support team is available via email at support@uskeyvision.com.'
                },
              ].map((topic) => (
                <div key={topic.title} className="p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                    {topic.icon}
                  </div>
                  <h3 className="text-lg font-bold text-accent-dark mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-3xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-accent-dark mb-2 text-center">Contact Us</h2>
              <p className="text-gray-500 text-center mb-8">Have a question? We&apos;ll get back to you within 24 hours.</p>
              
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Number (optional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="e.g., UV-2024-123456"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary justify-center py-4"
                >
                  Send Message
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
