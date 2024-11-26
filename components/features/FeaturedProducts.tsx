'use client'

import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getTranslatedFeaturedProducts } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

export function FeaturedProducts() {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const translatedFeaturedProducts = getTranslatedFeaturedProducts();
  
  const firstRow = translatedFeaturedProducts.slice(0, 4);
  const secondRow = translatedFeaturedProducts.slice(4, 8);

  const handleAddToCart = (e: React.MouseEvent, product: typeof translatedFeaturedProducts[0]) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{t('featuredProducts')}</h2>
        <Link 
          href="/products"
          className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors"
        >
          {t('viewAllProducts')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-12">
        {/* 第一行产品 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
          {firstRow.map((product) => (
            <Link 
              key={product.id}
              href={`/products/${product.id}`}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
                <p className="font-bold">${product.price}</p>
                <button 
                  onClick={(e) => handleAddToCart(e, product)}
                  className="mt-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  {t('addToCart')}
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* 第二行产品 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
          {secondRow.map((product) => (
            <Link 
              key={product.id}
              href={`/products/${product.id}`}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
                <p className="font-bold">${product.price}</p>
                <button 
                  onClick={(e) => handleAddToCart(e, product)}
                  className="mt-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  {t('addToCart')}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/products"
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          {t('viewAllProducts')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
} 