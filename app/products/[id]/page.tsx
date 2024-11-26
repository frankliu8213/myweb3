'use client'

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, Heart, Minus, Plus, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProductById, useTranslatedProducts } from '@/lib/products';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductDetail() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const [quantity, setQuantity] = useState(1);
  
  const { t } = useLanguage();
  const translatedProducts = useTranslatedProducts();
  const product = translatedProducts.find(p => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            {t('backToProducts')}
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* 产品图片 */}
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* 产品信息 */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <p className="text-2xl font-medium mt-2">${product.price}</p>
              </div>

              <p className="text-gray-600">{product.description}</p>

              <div className="space-y-4">
                <h3 className="font-medium">{t('keyFeatures')}</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 py-4 border-y">
                <div className="flex items-center border rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  {t('addToCart')}
                </button>

                <button className="p-3 border rounded-full hover:bg-gray-50">
                  <Heart className="w-5 h-5" />
                </button>

                <button className="p-3 border rounded-full hover:bg-gray-50">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg" />
                  <div>
                    <h4 className="font-medium">{t('freeShipping')}</h4>
                    <p className="text-sm text-gray-500">{t('freeShippingDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg" />
                  <div>
                    <h4 className="font-medium">{t('daysReturn')}</h4>
                    <p className="text-sm text-gray-500">{t('daysReturnDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 