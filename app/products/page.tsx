'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Page Hero */}
      <section className="pt-32 md:pt-36 pb-16 bg-accent-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="container-max relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <a href="/" className="hover:text-primary-400 transition-colors">Home</a>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Products</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            All Products
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-xl">
            Professional vlogging kits and accessories for content creators. 
            Find the perfect gear for your creative journey.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-28 md:top-32 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container-max py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  cat.id === activeCategory
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-500'
                }`}
              >
                <span>{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-500 font-medium">No products found in this category.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="mt-3 text-primary-500 font-semibold hover:underline"
              >
                View All Products
              </button>
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div className="mt-16 text-center p-8 bg-primary-50 rounded-2xl border border-primary-100">
              <p className="text-primary-700 font-medium">
                Looking for more? Visit our{' '}
                <a href="https://www.amazon.com/stores/USKEYVISION/page/4F07745A-3ACD-4721-B7EA-0658F0E6BD05" 
                   target="_blank" rel="noopener noreferrer" 
                   className="underline font-bold hover:text-primary-800">
                  Amazon Store
                </a>{' '}
                for the complete catalog.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
