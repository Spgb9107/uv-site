import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, getProductBySlug } from '@/data/products';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-max py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <a href="/" className="hover:text-primary-500 transition-colors">Home</a>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <a href="/products" className="hover:text-primary-500 transition-colors">Products</a>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-accent-dark font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="section-padding pt-12 md:pt-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                {product.badge && (
                  <div className="absolute top-6 left-6 z-10 flex gap-2">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wider ${
                      product.badge === 'BEST SELLER' ? 'bg-green-500 text-white' :
                      product.isNew ? 'bg-primary-500 text-white' : 'bg-primary-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                    {discount > 0 && (
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-red-500 text-white">-{discount}%</span>
                    )}
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-[450px] object-contain drop-shadow-xl"
                />
              </div>
              
              {/* Thumbnail Strip */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[product.image, ...product.images].map((img, i) => (
                  <button
                    key={i}
                    className={`w-20 h-20 rounded-xl border-2 ${i === 0 ? 'border-primary-500' : 'border-transparent'} overflow-hidden flex-shrink-0 hover:border-primary-300 transition-colors`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Category */}
              <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">{product.category}</span>
              
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-accent-dark mt-2 leading-tight">{product.name}</h1>
              
              {/* Tagline */}
              <p className="text-lg text-gray-500 mt-2">{product.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-accent-dark">{product.rating}</span>
                <span className="text-gray-500">({product.reviewCount.toLocaleString()} reviews)</span>
              </div>

              {/* Price */}
              <div className="mt-6 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-accent-dark">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                      <span className="px-2.5 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-bold">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex gap-3 mt-5">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center"
                  >
                    Buy on Amazon
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <button className="btn-secondary !border-gray-200 !px-4" aria-label="Add to wishlist">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Trust Info */}
                <div className="grid grid-cols-3 gap-3 mt-5 text-center text-xs">
                  <div className="py-2"><span className="block font-bold text-accent-dark">Free Shipping</span><span className="text-gray-400">$50+ orders</span></div>
                  <div className="py-2"><span className="block font-bold text-accent-dark">12-Month Warranty</span><span className="text-gray-400">Full coverage</span></div>
                  <div className="py-2"><span className="block font-bold text-accent-dark">Fast Delivery</span><span className="text-gray-400">Prime eligible</span></div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-accent-dark mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Key Features */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-accent-dark mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="w-6 h-6 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-accent-dark mb-4">Specifications</h2>
                <div className="rounded-xl border border-gray-200 overflow-hidden">
                  {product.specs.map((spec, i) => (
                    <div key={spec.label} className={`flex px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <span className="w-40 flex-shrink-0 font-medium text-gray-500">{spec.label}</span>
                      <span className="text-accent-dark font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's in the Box */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-accent-dark mb-4">What&apos;s in the Box</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.includedItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600 py-1.5">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-accent-dark mb-8">You May Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.map((rp) => (
              <ProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
