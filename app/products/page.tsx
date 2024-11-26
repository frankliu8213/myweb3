'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Search } from 'lucide-react';
import { useTranslatedProducts } from '@/lib/products';
import { Modal } from '@/components/ui/Modal';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function ProductsPage() {
  const translatedProducts = useTranslatedProducts();
  const [selectedProduct, setSelectedProduct] = useState<typeof translatedProducts[0] | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">All Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {translatedProducts.map((product) => (
            <Link 
              key={product.id}
              href={`/products/${product.id}`}
              className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[3/4]">
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
                    className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100"
                  >
                    <Search className="w-4 h-4" />
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
                <p className="font-bold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

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
              <button className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </Modal>
      <Footer />
    </div>
  );
} 