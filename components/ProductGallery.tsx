'use client';

import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  name: string;
  badge?: string;
  isNew?: boolean;
  discount?: number;
}

export default function ProductGallery({ images, name, badge, isNew, discount }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  if (!images.length) return null;

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
        {/* Badges */}
        {(badge || (discount && discount > 0)) && (
          <div className="absolute top-6 left-6 z-10 flex gap-2">
            {badge && (
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wider ${
                  badge === 'BEST SELLER'
                    ? 'bg-green-500 text-white'
                    : isNew
                    ? 'bg-primary-500 text-white'
                    : 'bg-primary-500 text-white'
                }`}
              >
                {badge}
              </span>
            )}
            {discount && discount > 0 && (
              <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-red-500 text-white">
                -{discount}%
              </span>
            )}
          </div>
        )}

        {/* Main Image Element */}
        <img
          src={selectedImage}
          alt={name}
          className="max-w-full max-h-[450px] object-contain drop-shadow-xl"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder.svg';
            e.currentTarget.onerror = null;
          }}
        />
      </div>

      {/* Thumbnail Strip - only show when multiple images */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={`${img}-${i}`}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all ${
                selectedImage === img
                  ? 'border-primary-500 ring-2 ring-primary-500/30'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
              aria-label={`View image ${i + 1} of ${name}`}
            >
              <img
                src={img}
                alt={`${name} view ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
