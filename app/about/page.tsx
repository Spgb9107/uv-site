import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="pt-32 md:pt-36 pb-20 bg-gradient-to-br from-accent-dark via-gray-900 to-accent-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-400/5 rounded-full blur-[120px]" />
        
        <div className="container-max relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary-500/15 text-primary-400 border border-primary-500/25 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Empowering Creators<br />Worldwide
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            USKEYVISION is an innovative mobile photography company based in Shenzhen, China. 
            We design and manufacture professional-grade vlogging equipment that makes content creation accessible to everyone.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <span className="text-sm font-bold text-primary-500 uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl font-bold mt-2 text-accent-dark">Democratizing Professional Video</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Founded with a simple belief: everyone deserves access to professional-quality video production tools. 
                Our vlogging kits eliminate the complexity and cost barriers that have traditionally kept studio-quality 
                production out of reach for independent creators.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Every product we create is designed around real creator workflows — from YouTubers building their channels 
                in their bedrooms, to TikTok influencers creating on the go, to live streamers broadcasting daily shows. 
                We listen, iterate, and deliver gear that truly serves the creative community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-3xl p-8 flex items-center justify-center min-h-[350px]">
              <div className="text-center">
                <span className="text-8xl">🎯</span>
                <p className="mt-4 font-bold text-accent-dark text-lg">Quality • Innovation • Accessibility</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-accent-dark mb-12">What Drives Us</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: '💡',
                  title: 'Innovation First',
                  desc: 'We pioneer new technologies like AI face tracking, gesture control, and auto-switch phone clamps that make filming effortless.',
                },
                {
                  icon: '✨',
                  title: 'Quality Without Compromise',
                  desc: 'From our all-metal V-Master series to our precision-engineered microphones, every product meets rigorous quality standards.',
                },
                {
                  icon: '🤝',
                  title: 'Creator Community',
                  desc: 'We build products alongside our community of 50,000+ creators worldwide, incorporating feedback into every product iteration.',
                },
              ].map((value) => (
                <div key={value.title} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300">
                  <span className="text-5xl block mb-4">{value.icon}</span>
                  <h3 className="text-xl font-bold text-accent-dark">{value.title}</h3>
                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-accent-dark rounded-3xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-12">USKEYVISION by Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '2018', label: 'Year Founded' },
                { value: '50K+', label: 'Happy Customers' },
                { value: '120+', label: 'Countries Shipped' },
                { value: '5+', label: 'Product Lines' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-black gradient-text">{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team / Location */}
          <div className="mt-24 text-center">
            <span className="text-sm font-bold text-primary-500 uppercase tracking-wider">Based in</span>
            <h2 className="text-3xl font-bold mt-2 text-accent-dark">Shenzhen, China</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Located in the heart of the world&apos;s electronics manufacturing hub, USKEYVISION leverages Shenzhen&apos;s 
              unparalleled supply chain ecosystem and talent pool to bring innovative products from concept to reality at unprecedented speed.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-primary-50 rounded-full text-primary-700 font-semibold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              uskeyvision@uskeyvision.com
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl font-bold">Ready to Create?</h2>
          <p className="mt-3 text-white/80 text-lg">Explore our full range of professional vlogging kits.</p>
          <a href="/products" className="inline-flex items-center btn-primary !bg-white !text-primary-600 !px-10 !py-4 mt-8 shadow-xl">
            Shop Now
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
