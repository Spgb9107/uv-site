import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-accent-dark via-gray-900 to-accent-dark pt-32 md:pt-36">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600 rounded-full blur-[200px] opacity-30" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/15 border border-primary-500/25 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-primary-300">New R01 Kit with AI Face Tracking</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight text-balance">
                Create Like a{' '}
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-300 bg-clip-text text-transparent">Pro</span>
                <br />
                With Your Phone
              </h1>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Professional vlogging kits for content creators. AI-powered face tracking, 
                studio-quality microphones, and pro lighting — all in one compact package.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <a href="/products" className="btn-primary text-base !px-10 !py-4 shadow-2xl shadow-primary-500/30">
                  Explore Products
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#products" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10 text-base !px-10 !py-4">
                  View Catalog
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Free Shipping
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  12-Month Warranty
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Secure Payment
                </span>
              </div>
            </div>

            {/* Hero Product Visual */}
            <div className="relative hidden lg:block animate-slide-up">
              <div className="relative z-10">
                {/* Main Product Image */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <img
                    src={products[0].image}
                    alt={products[0].name}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                  
                  {/* Floating Specs Card */}
                  <div className="absolute -right-4 -bottom-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-float">
                    <p className="text-xs font-medium text-primary-500 uppercase tracking-wider">{products[0].name}</p>
                    <p className="text-2xl font-black text-accent-dark mt-1">${products[0].price}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-3 h-3 ${i < Math.floor(products[0].rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">{products[0].reviewCount}+ reviews</span>
                    </div>
                  </div>

                  {/* Floating Feature Badge */}
                  <div className="absolute -left-4 top-1/4 bg-primary-500 text-white rounded-xl px-4 py-3 shadow-lg shadow-primary-500/30 animate-delay-200 animate-float">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Featured</p>
                        <p className="text-xs font-bold">AI Face Tracking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50K+', label: 'Happy Creators', icon: '😊' },
              { value: '4.5★', label: 'Average Rating', icon: '⭐' },
              { value: '120+', label: 'Countries Served', icon: '🌍' },
              { value: '24/7', label: 'Customer Support', icon: '💬' },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
                <p className="text-3xl font-black gradient-text">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCENARIOS / USE CASES ===== */}
      <section id="scenarios" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-dark tracking-tight">
              Built For Every Creator
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              From YouTube studios to outdoor adventures, our vlogging kits adapt to your creative workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                emoji: '🎬',
                title: 'Content Creation Studio',
                desc: 'Professional setup for YouTube, TikTok, and live streaming with studio-quality audio and lighting.',
                features: ['Shotgun Microphone', 'LED Video Light', 'Desktop Tripod', 'Remote Control'],
                color: 'from-blue-500 to-indigo-600',
              },
              {
                emoji: '🏕️',
                title: 'Outdoor & Travel Vlogging',
                desc: 'Lightweight, portable kits designed for on-the-go content creation anywhere in the world.',
                features: ['Compact Design', 'Retractable Tripod', 'Battery Powered', 'Carrying Case'],
                color: 'from-emerald-500 to-teal-600',
              },
              {
                emoji: '📱',
                title: 'Smartphone Filmmaking',
                desc: 'Transform your phone into a professional production rig with cinema-quality results.',
                features: ['Universal Phone Clamp', 'Vertical Shooting', 'Face Tracking', 'Wireless Mic'],
                color: 'from-primary-500 to-orange-600',
              },
            ].map((scenario) => (
              <div key={scenario.title} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover">
                <div className={`h-48 bg-gradient-to-br ${scenario.color} flex items-center justify-center`}>
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{scenario.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-accent-dark">{scenario.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">{scenario.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {scenario.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section id="products" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Our Products
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-dark tracking-tight">
                Vlogging Kits for Every Need
              </h2>
              <p className="mt-3 text-lg text-gray-500 max-w-xl">
                From beginner to professional — find the perfect kit that matches your creative ambitions.
              </p>
            </div>
            <a href="/products" className="btn-secondary whitespace-nowrap self-start md:self-auto">
              View All Products
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} featured={product.isBestSeller} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section id="features" className="section-padding bg-accent-dark text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/10 rounded-full blur-[120px]" />

        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-500/15 text-primary-400 border border-primary-500/25 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Why USKEYVISION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Engineered for Creators
            </h2>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Every detail is designed with one goal in mind: making your content stand out.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Studio Quality Audio',
                desc: 'Super-cardioid shotgun mics and wireless lavaliers with noise cancellation capture every word clearly.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Pro Lighting System',
                desc: 'Tri-color temperature LED lights (3000K-7000K) with adjustable brightness for any environment.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'AI Smart Features',
                desc: 'Intelligent face tracking, gesture control, and auto-switch technology — no app required.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Global Compatibility',
                desc: 'Works with iPhone, Android, cameras, and PCs. Universal cables included for every device.',
              },
            ].map((feature) => (
              <div key={feature.title} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-500/15 rounded-xl flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-white rotate-45" />
        </div>
        
        <div className="container-max text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ready to Elevate Your Content?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Join 50,000+ creators who trust USKEYVISION for their video production needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/products" className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-0.5">
              Shop Now
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="https://www.amazon.com/stores/USKEYVISION/page/4F07745A-3ACD-4721-B7EA-0658F0E6BD05" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white/40 hover:bg-white/10 transition-all">
              Visit Amazon Store
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
