'use client'

import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{t('stayUpdated')}</h2>
        <p className="text-gray-600 mb-6">
          {t('newsletterDesc')}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('enterEmail')}
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/5"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            {t('subscribe')}
            <Send className="w-4 h-4" />
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-green-600">{t('subscribeSuccess')}</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600">{t('subscribeError')}</p>
        )}
      </div>
    </section>
  );
} 