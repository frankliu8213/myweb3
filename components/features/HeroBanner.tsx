'use client'

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroBanner() {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] w-full">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Hero image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-4">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-center">
          {t('heroDescription')}
        </p>
        <button
          onClick={scrollToProducts}
          className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          {t('shopNow')}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
} 