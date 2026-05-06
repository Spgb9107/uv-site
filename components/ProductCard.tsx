import { products, Product } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
            product.badge === 'BEST SELLER' ? 'bg-green-500 text-white' :
            product.badge === 'NEW' || product.isNew ? 'bg-primary-500 text-white' :
            product.badge === 'PRO GRADE' ? 'bg-accent-blue text-white' :
            'bg-primary-500 text-white'
          }`}>
            {product.badge}
          </span>
          {discount > 0 && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
              -{discount}% OFF
            </span>
          )}
        </div>
      )}

      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className={`flex items-center justify-center p-8 ${featured ? 'h-80 md:h-[28rem]' : 'h-64 md:h-72'}`}>
          <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain drop-shadow-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Quick Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="flex gap-2">
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary text-sm !py-2.5 !px-4"
            >
              Buy on Amazon
            </a>
            <Link href={`/products/${product.slug}`} className="btn-secondary text-sm !py-2.5 !px-4 !border-white/30 !text-white hover:!bg-white/10">
              Details
            </Link>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-5 md:p-6">
        {/* Category */}
        <span className="text-xs font-medium text-primary-500 uppercase tracking-wider">{product.category}</span>

        {/* Title */}
        <Link href={`/products/${product.slug}`}>
          <h3 className={`font-bold text-accent-dark mt-1 group-hover:text-primary-500 transition-colors line-clamp-2 ${featured ? 'text-lg md:text-xl' : 'text-base'}`}>
            {product.name}
          </h3>
        </Link>

        {/* Tagline */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-1">{product.tagline}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">{product.rating} ({product.reviewCount.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-3">
          <span className={`font-bold text-accent-dark ${featured ? 'text-2xl' : 'text-xl'}`}>${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Quick Specs (featured only) */}
        {featured && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-2">
              {product.specs.slice(0, 4).map((spec) => (
                <div key={spec.label} className="flex items-start gap-1.5 text-xs">
                  <svg className="w-3.5 h-3.5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><span className="text-gray-400">{spec.label}:</span> {spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
