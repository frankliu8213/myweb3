'use client'

import { ShoppingCart, User, Globe, ChevronDown, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '../ui/Modal';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/translations';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'zh', name: '中文' },
] as const;

export function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();
  const { currentLanguage, setLanguage, t } = useLanguage();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 text-sm hover:text-gray-600"
              >
                <Globe className="w-4 h-4" />
                <span>{t('language')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-1 min-w-[160px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        currentLanguage === lang.code ? 'bg-gray-50' : ''
                      }`}
                      onClick={() => {
                        setLanguage(lang.code as Language);
                        setIsLanguageOpen(false);
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsUpgradeOpen(true)}
                className="text-sm font-medium px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              >
                {t('upgradeToPro')}
              </button>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 购物车模态框 */}
      <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} title={t('cart')}>
        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center gap-4 pb-4 border-b">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.product.title}</h3>
                  <p className="text-sm text-gray-500">${item.product.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-black"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="p-1 text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4">
              <div>
                <p className="text-sm text-gray-500">{t('total')}</p>
                <p className="font-medium">${totalPrice.toFixed(2)}</p>
              </div>
              <Link
                href="/checkout"
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
              >
                {t('checkout')}
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">{t('emptyCart')}</p>
          </div>
        )}
      </Modal>

      {/* 登录/注册模态框 */}
      <Modal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} title={t('signIn')}>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t('emailInput')}</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('passwordInput')}</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800"
          >
            {t('signIn')}
          </button>
          <p className="text-sm text-center">
            {t('dontHaveAccount')}{' '}
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => {/* 切换到注册表单 */}}
            >
              {t('signUp')}
            </button>
          </p>
        </form>
      </Modal>

      {/* 升级会员模态框 */}
      <Modal isOpen={isUpgradeOpen} onClose={() => setIsUpgradeOpen(false)} title={t('upgradeToPro')}>
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">{t('proBenefits')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-black rounded-full" />
                <span>{t('unlimitedAccess')}</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-black rounded-full" />
                <span>{t('prioritySupport')}</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-black rounded-full" />
                <span>{t('exclusiveDiscounts')}</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border rounded-lg">
              <div>
                <p className="font-medium">{t('monthly')}</p>
                <p className="text-sm text-gray-500">{t('perMonth')}</p>
              </div>
              <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                {t('choose')}
              </button>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-lg">
              <div>
                <p className="font-medium">{t('yearly')}</p>
                <p className="text-sm text-gray-500">{t('perYear')}</p>
              </div>
              <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                {t('choose')}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
} 