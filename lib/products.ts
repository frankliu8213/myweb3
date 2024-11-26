import { useLanguage } from '@/contexts/LanguageContext';

export interface Product {
  id: number;
  titleKey: string;
  descriptionKey: string;
  price: number;
  rating: number;
  image: string;
  features: string[];
}

export function useTranslatedProducts() {
  const { t } = useLanguage();
  
  return [...products, ...featuredProducts].map(product => ({
    ...product,
    title: t(product.titleKey as any),
    description: t(product.descriptionKey as any)
  }));
}

export const products: Product[] = [
  {
    id: 1,
    titleKey: 'product1Title',
    descriptionKey: 'product1Desc',
    price: 299.99,
    rating: 4.8,
    image: "https://picsum.photos/seed/product1/800/800",
    features: [
      "Genuine Italian leather",
      "Durable metal hardware",
      "Multiple compartments",
      "Adjustable shoulder strap"
    ]
  },
  {
    id: 2,
    titleKey: 'product2Title',
    descriptionKey: 'product2Desc',
    price: 199.99,
    rating: 4.7,
    image: "https://picsum.photos/seed/product2/800/800",
    features: [
      "Active noise cancellation",
      "40-hour battery life",
      "Premium sound quality",
      "Comfortable fit"
    ]
  },
  {
    id: 3,
    titleKey: 'product3Title',
    descriptionKey: 'product3Desc',
    price: 399.99,
    rating: 4.9,
    image: "https://picsum.photos/seed/product3/800/800",
    features: [
      "Heart rate monitoring",
      "Built-in GPS",
      "Water resistant",
      "5-day battery life"
    ]
  }
];

export const featuredProductIds = [4, 5, 6, 7, 8, 9, 10, 11];

export const featuredProducts: Product[] = [
  {
    id: 4,
    titleKey: 'product4Title',
    descriptionKey: 'product4Desc',
    price: 159.99,
    rating: 4.6,
    image: "https://picsum.photos/seed/product4/800/800",
    features: [
      "UV400 protection",
      "Polarized lenses",
      "Durable frame",
      "Includes case"
    ]
  },
  {
    id: 5,
    titleKey: 'product5Title',
    descriptionKey: 'product5Desc',
    price: 899.99,
    rating: 4.9,
    image: "https://picsum.photos/seed/product5/800/800",
    features: [
      "24.2MP sensor",
      "4K video recording",
      "Weather-sealed body",
      "Dual card slots"
    ]
  },
  {
    id: 6,
    titleKey: 'product6Title',
    descriptionKey: 'product6Desc',
    price: 1299.99,
    rating: 4.8,
    image: "https://picsum.photos/seed/product6/800/800",
    features: [
      "Latest gen processor",
      "16GB RAM",
      "512GB SSD",
      "14-hour battery life"
    ]
  },
  {
    id: 7,
    titleKey: 'product7Title',
    descriptionKey: 'product7Desc',
    price: 129.99,
    rating: 4.7,
    image: "https://picsum.photos/seed/product7/800/800",
    features: [
      "360° sound",
      "Voice control",
      "Smart home compatible",
      "Multi-room audio"
    ]
  },
  {
    id: 8,
    titleKey: 'product8Title',
    descriptionKey: 'product8Desc',
    price: 499.99,
    rating: 4.9,
    image: "https://picsum.photos/seed/product8/800/800",
    features: [
      "Swiss movement",
      "Sapphire crystal",
      "Water resistant",
      "Leather strap"
    ]
  },
  {
    id: 9,
    titleKey: 'product9Title',
    descriptionKey: 'product9Desc',
    price: 449.99,
    rating: 4.8,
    image: "https://picsum.photos/seed/product9/800/800",
    features: [
      "4K gaming",
      "1TB storage",
      "Ray tracing",
      "Wireless controller"
    ]
  },
  {
    id: 10,
    titleKey: 'product10Title',
    descriptionKey: 'product10Desc',
    price: 799.99,
    rating: 4.7,
    image: "https://picsum.photos/seed/product10/800/800",
    features: [
      "4K camera",
      "30min flight time",
      "GPS navigation",
      "Obstacle avoidance"
    ]
  },
  {
    id: 11,
    titleKey: 'product11Title',
    descriptionKey: 'product11Desc',
    price: 299.99,
    rating: 4.6,
    image: "https://picsum.photos/seed/product11/800/800",
    features: [
      "15 bar pressure",
      "Milk frother",
      "Digital display",
      "Timer function"
    ]
  }
];

export function getProductById(id: number): Product | undefined {
  return [...products, ...featuredProducts].find(p => p.id === id);
}

export function getTranslatedFeaturedProducts() {
  const { t } = useLanguage();
  return featuredProducts.map(product => ({
    ...product,
    title: t(product.titleKey as any),
    description: t(product.descriptionKey as any)
  }));
} 