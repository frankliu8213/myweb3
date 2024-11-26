'use client'

import Image from 'next/image';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Modal } from '../ui/Modal';
import Link from 'next/link';
import { useTranslatedProducts, type Product } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product & { title: string; description: string } | null>(null);
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const allTranslatedProducts = useTranslatedProducts();
  const translatedProducts = allTranslatedProducts.slice(0, 3);

  const handleAddToCart = (e: React.MouseEvent, product: Product & { title: string; description: string }) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <section id="products" className="scroll-mt-16">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">{t('ourProducts')}</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-8">
        {translatedProducts.map((product) => (
          <Link 
            key={product.id}
            href={`/products/${product.id}`}
            className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative aspect-[2/1] sm:aspect-[2/1]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProduct(product);
                  }}
                  className="bg-white text-black px-4 sm:px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 text-sm sm:text-base"
                >
                  <Search className="w-4 h-4" />
                  {t('quickView')}
                </button>
              </div>
            </div>
            <div className="p-3 sm:p-4 flex flex-col gap-1 sm:gap-2">
              <h3 className="font-semibold text-base sm:text-lg line-clamp-1">{product.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">${product.price}</p>
              <button 
                onClick={(e) => handleAddToCart(e, product)}
                className="mt-1 sm:mt-2 bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                {t('addToCart')}
              </button>
            </div>
          </Link>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.title || ''}
      >
        {selectedProduct && (
          <div className="space-y-4">
            <div className="relative aspect-square">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <p className="font-medium">${selectedProduct.price}</p>
              <p className="text-sm text-gray-600">{selectedProduct.description}</p>
              <button 
                onClick={() => {
                  addToCart(selectedProduct, 1);
                  setSelectedProduct(null);
                }}
                className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800"
              >
                {t('addToCart')}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
} 