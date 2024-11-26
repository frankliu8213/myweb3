export type Language = 'en' | 'es' | 'zh';

export type TranslationKey =
  // 通用
  | 'language'
  | 'upgradeToPro'
  | 'addToCart'
  | 'quickView'
  | 'viewAllProducts'
  
  // 产品相关
  | 'ourProducts'
  | 'featuredProducts'
  | 'backToProducts'
  | 'productDetails'
  | 'keyFeatures'
  | 'quantity'
  | 'price'
  | 'description'
  
  // 购物车相关
  | 'cart'
  | 'checkout'
  | 'emptyCart'
  | 'total'
  | 'remove'
  
  // 认证相关
  | 'signIn'
  | 'signUp'
  | 'emailInput'
  | 'passwordInput'
  | 'dontHaveAccount'
  
  // 会员相关
  | 'proBenefits'
  | 'unlimitedAccess'
  | 'prioritySupport'
  | 'exclusiveDiscounts'
  | 'monthly'
  | 'yearly'
  | 'perMonth'
  | 'perYear'
  | 'choose'
  
  // 页脚相关
  | 'companyDescription'
  | 'quickLinks'
  | 'customerService'
  | 'contactInfo'
  | 'aboutUs'
  | 'blog'
  | 'careers'
  | 'contactUs'
  | 'shippingPolicy'
  | 'returnsExchanges'
  | 'faq'
  | 'addressText'
  | 'phoneText'
  | 'emailText'
  | 'copyright'
  | 'privacyPolicy'
  | 'termsOfService'
  | 'sitemap'
  
  // 运输和退货
  | 'freeShipping'
  | 'freeShippingDesc'
  | 'daysReturn'
  | 'daysReturnDesc'
  
  // Hero 部分
  | 'heroTitle'
  | 'heroDescription'
  | 'shopNow'
  
  // 产品相关（新增）
  | 'product1Title'
  | 'product1Desc'
  | 'product2Title'
  | 'product2Desc'
  // ... 其他产品
  | 'product3Title' | 'product3Desc'
  | 'product4Title' | 'product4Desc'
  | 'product5Title' | 'product5Desc'
  | 'product6Title' | 'product6Desc'
  | 'product7Title' | 'product7Desc'
  | 'product8Title' | 'product8Desc'
  | 'product9Title' | 'product9Desc'
  | 'product10Title' | 'product10Desc'
  | 'product11Title' | 'product11Desc'
  | 'stayUpdated'
  | 'newsletterDesc'
  | 'enterEmail'
  | 'subscribe'
  | 'subscribeSuccess'
  | 'subscribeError';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // 通用
    language: 'Language',
    upgradeToPro: 'Upgrade to Pro',
    addToCart: 'Add to Cart',
    quickView: 'Quick View',
    viewAllProducts: 'View All Products',
    
    // 产品相关
    ourProducts: 'Our Products',
    featuredProducts: 'Featured Products',
    backToProducts: 'Back to Products',
    productDetails: 'Product Details',
    keyFeatures: 'Key Features',
    quantity: 'Quantity',
    price: 'Price',
    description: 'Description',
    
    // 购物车相关
    cart: 'Shopping Cart',
    checkout: 'Checkout',
    emptyCart: 'Your cart is empty',
    total: 'Total',
    remove: 'Remove',
    
    // 认证相关
    signIn: 'Sign In',
    signUp: 'Sign Up',
    emailInput: 'Email',
    passwordInput: 'Password',
    dontHaveAccount: "Don't have an account?",
    
    // 会员相关
    proBenefits: 'Pro Benefits',
    unlimitedAccess: 'Unlimited access to all products',
    prioritySupport: 'Priority customer support',
    exclusiveDiscounts: 'Exclusive member discounts',
    monthly: 'Monthly',
    yearly: 'Yearly',
    perMonth: '$9.99/month',
    perYear: '$99.99/year',
    choose: 'Choose',
    
    // 页脚相关
    companyDescription: 'We provide high-quality products and exceptional customer service.',
    quickLinks: 'Quick Links',
    customerService: 'Customer Service',
    contactInfo: 'Contact Info',
    aboutUs: 'About Us',
    blog: 'Blog',
    careers: 'Careers',
    contactUs: 'Contact Us',
    shippingPolicy: 'Shipping Policy',
    returnsExchanges: 'Returns & Exchanges',
    faq: 'FAQs',
    addressText: '123 Business Street, New York, NY 10001',
    phoneText: '+1 (234) 567-8900',
    emailText: 'support@example.com',
    copyright: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    sitemap: 'Sitemap',
    
    // 运输和退货
    freeShipping: 'Free Shipping',
    freeShippingDesc: 'On orders over $50',
    daysReturn: '30 Days Return',
    daysReturnDesc: 'Money back guarantee',
    
    // Hero 部分
    heroTitle: 'Discover Our Premium Collection',
    heroDescription: 'Explore our curated selection of high-quality products designed to enhance your lifestyle',
    shopNow: 'Shop Now',
    
    // 产品相关
    product1Title: 'Premium Leather Bag',
    product1Desc: 'Handcrafted from genuine Italian leather, this premium bag combines style with functionality.',
    product2Title: 'Wireless Headphones',
    product2Desc: 'Experience crystal-clear sound with our premium wireless headphones.',
    product3Title: 'Smart Watch Pro',
    product3Desc: 'Stay connected and track your fitness with our advanced smartwatch.',
    product4Title: 'Designer Sunglasses',
    product4Desc: 'Protect your eyes in style with our premium designer sunglasses.',
    product5Title: 'Premium Camera',
    product5Desc: 'Capture life\'s moments in stunning detail with our professional-grade camera.',
    product6Title: 'Laptop Pro',
    product6Desc: 'Power through your work with our high-performance laptop.',
    product7Title: 'Smart Speaker',
    product7Desc: 'Fill your room with rich, immersive sound with smart home integration.',
    product8Title: 'Luxury Watch',
    product8Desc: 'A timeless masterpiece combining classic design with modern technology.',
    product9Title: 'Gaming Console',
    product9Desc: 'Next-generation gaming with stunning graphics and performance.',
    product10Title: 'Drone Pro',
    product10Desc: 'Capture breathtaking aerial footage with our professional drone.',
    product11Title: 'Coffee Maker',
    product11Desc: 'Brew barista-quality coffee at home with our premium coffee maker.',
    stayUpdated: 'Stay Updated',
    newsletterDesc: 'Subscribe to our newsletter for exclusive offers and updates',
    enterEmail: 'Enter your email',
    subscribe: 'Subscribe',
    subscribeSuccess: 'Thank you for subscribing!',
    subscribeError: 'Please enter a valid email address.',
  },
  es: {
    // 通用
    language: 'Idioma',
    upgradeToPro: 'Actualizar a Pro',
    addToCart: 'Añadir al Carrito',
    quickView: 'Vista Rápida',
    viewAllProducts: 'Ver Todos los Productos',
    
    // 产品相关
    ourProducts: 'Nuestros Productos',
    featuredProducts: 'Productos Destacados',
    backToProducts: 'Volver a Productos',
    productDetails: 'Detalles del Producto',
    keyFeatures: 'Características Principales',
    quantity: 'Cantidad',
    price: 'Precio',
    description: 'Descripción',
    
    // 购物车相关
    cart: 'Carrito de Compras',
    checkout: 'Pagar',
    emptyCart: 'Tu carrito está vacío',
    total: 'Total',
    remove: 'Eliminar',
    
    // 认证相关
    signIn: 'Iniciar Sesión',
    signUp: 'Registrarse',
    emailInput: 'Correo',
    passwordInput: 'Contraseña',
    dontHaveAccount: '¿No tienes cuenta?',
    
    // 会员相关
    proBenefits: 'Beneficios Pro',
    unlimitedAccess: 'Acceso ilimitado a todos los productos',
    prioritySupport: 'Soporte prioritario',
    exclusiveDiscounts: 'Descuentos exclusivos',
    monthly: 'Mensual',
    yearly: 'Anual',
    perMonth: '9,99€/mes',
    perYear: '99,99€/año',
    choose: 'Elegir',
    
    // 页脚相关
    companyDescription: 'Ofrecemos productos de alta calidad y un servicio excepcional.',
    quickLinks: 'Enlaces Rápidos',
    customerService: 'Servicio al Cliente',
    contactInfo: 'Información de Contacto',
    aboutUs: 'Sobre Nosotros',
    blog: 'Blog',
    careers: 'Empleo',
    contactUs: 'Contáctanos',
    shippingPolicy: 'Política de Envíos',
    returnsExchanges: 'Devoluciones y Cambios',
    faq: 'Preguntas Frecuentes',
    addressText: 'Calle Negocio 123, Nueva York, NY 10001',
    phoneText: '+1 (234) 567-8900',
    emailText: 'soporte@ejemplo.com',
    copyright: 'Todos los derechos reservados',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    sitemap: 'Mapa del Sitio',
    
    // 运输和退货
    freeShipping: 'Envío Gratis',
    freeShippingDesc: 'En pedidos superiores a 50€',
    daysReturn: 'Devolución 30 Días',
    daysReturnDesc: 'Garantía de devolución',
    
    // Hero 部分
    heroTitle: 'Descubre Nuestra Colección Premium',
    heroDescription: 'Explora nuestra selección curada de productos de alta calidad diseñados para mejorar tu estilo de vida',
    shopNow: 'Comprar Ahora',
    
    // 产品相关
    product1Title: 'Bolso de Cuero Premium',
    product1Desc: 'Elaborado artesanalmente con cuero italiano genuino, este bolso premium combina estilo y funcionalidad.',
    product2Title: 'Auriculares Inalámbricos',
    product2Desc: 'Experimenta un sonido cristalino con nuestros auriculares inalámbricos premium.',
    product3Title: 'Reloj Inteligente Pro',
    product3Desc: 'Mantén la conexión y controla tu estado físico con nuestro reloj inteligente avanzado.',
    product4Title: 'Gafas de Sol Premium',
    product4Desc: 'Protege tus ojos con estilo con nuestras gafas de sol premium.',
    product5Title: 'Cámara Profesional',
    product5Desc: 'Captura los momentos de la vida en detalle espectacular con nuestra cámara profesional.',
    product6Title: 'Portátil Pro',
    product6Desc: 'Mejora tu productividad con nuestro portátil de alto rendimiento.',
    product7Title: 'Altavoz Inteligente',
    product7Desc: 'Rellena tu habitación con un sonido rico y envolvente con integración inteligente del hogar.',
    product8Title: 'Reloj de Lujo',
    product8Desc: 'Una obra maestra clásica que combina el diseño clásico con la tecnología moderna.',
    product9Title: 'Consola de Juegos',
    product9Desc: 'Nueva generación de juegos con gráficos imponentes y rendimiento.',
    product10Title: 'Dron Pro',
    product10Desc: 'Captura vídeo aéreo profesional con nuestro dron profesional.',
    product11Title: 'Máquina de Café',
    product11Desc: 'Disfruta de una experiencia de café profesional en casa con nuestra máquina de café premium.',
    stayUpdated: 'Mantente Actualizado',
    newsletterDesc: 'Suscríbete a nuestro boletín para ofertas exclusivas y actualizaciones',
    enterEmail: 'Ingresa tu correo',
    subscribe: 'Suscribirse',
    subscribeSuccess: '¡Gracias por suscribirte!',
    subscribeError: 'Por favor ingresa un correo válido.',
  },
  zh: {
    // 通用
    language: '语言',
    upgradeToPro: '升级至专业版',
    addToCart: '加入购物车',
    quickView: '快速预览',
    viewAllProducts: '查看所有产品',
    
    // 产品相关
    ourProducts: '我们的产品',
    featuredProducts: '精选产品',
    backToProducts: '返回产品列表',
    productDetails: '产品详情',
    keyFeatures: '主要特点',
    quantity: '数量',
    price: '价格',
    description: '描述',
    
    // 购物车相关
    cart: '购物车',
    checkout: '结算',
    emptyCart: '购物车是空的',
    total: '总计',
    remove: '删除',
    
    // 认证相关
    signIn: '登录',
    signUp: '注册',
    emailInput: '邮箱',
    passwordInput: '密码',
    dontHaveAccount: '还没有账号？',
    
    // 会员相关
    proBenefits: '专业版特权',
    unlimitedAccess: '无限访问所有产品',
    prioritySupport: '优先客户支持',
    exclusiveDiscounts: '专属会员折扣',
    monthly: '月付',
    yearly: '年付',
    perMonth: '¥69.99/月',
    perYear: '¥699.99/年',
    choose: '选择',
    
    // 页脚相关
    companyDescription: '我们提供高品质的产品和卓越的客户服务。',
    quickLinks: '快速链接',
    customerService: '客户服务',
    contactInfo: '联系信息',
    aboutUs: '关于我们',
    blog: '博客',
    careers: '招贤纳士',
    contactUs: '联系我们',
    shippingPolicy: '配送政策',
    returnsExchanges: '退换货政策',
    faq: '常见问题',
    addressText: '美国纽约市商业街123号 邮编：10001',
    phoneText: '+1 (234) 567-8900',
    emailText: 'support@example.com',
    copyright: '版权所有',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    sitemap: '网站地图',
    
    // 运输和退货
    freeShipping: '免费配送',
    freeShippingDesc: '订单满¥350',
    daysReturn: '30天退货',
    daysReturnDesc: '退款保证',
    
    // Hero 部分
    heroTitle: '探索我们的精选系列',
    heroDescription: '浏览我们精心挑选的优质产品，为您的生活增添品质',
    shopNow: '立即购买',
    
    // 产品相关
    product1Title: '高级真皮包',
    product1Desc: '采用意大利真皮手工制作，这款高级手包完美结合了时尚与实用性。',
    product2Title: '无线耳机',
    product2Desc: '体验我们高级无线耳机带来的清晰音质。',
    product3Title: '智能手表Pro',
    product3Desc: '先进的智能手表，助您保持连接并追踪健康。',
    product4Title: '设计师太阳镜',
    product4Desc: '时尚防护，优质太阳镜。',
    product5Title: '专业相机',
    product5Desc: '专业级相机，捕捉生活精彩瞬间。',
    product6Title: '笔记本电脑Pro',
    product6Desc: '高性能笔记本电脑，提升工作效率。',
    product7Title: '智能音箱',
    product7Desc: '智能家居音箱，带来震撼音效体验。',
    product8Title: '奢华手表',
    product8Desc: '经典设计与现代技术的完美结合。',
    product9Title: '游戏主机',
    product9Desc: '次世代游戏主机，带来极致游戏体验。',
    product10Title: '专业无人机',
    product10Desc: '专业航拍无人机，捕捉震撼航拍画面。',
    product11Title: '咖啡机',
    product11Desc: '在家享受专业级咖啡体验。',
    stayUpdated: '保持更新',
    newsletterDesc: '订阅我们的新闻通讯，获取独家优惠和更新',
    enterEmail: '输入您的邮箱',
    subscribe: '订阅',
    subscribeSuccess: '感谢您的订阅！',
    subscribeError: '请输入有效的邮箱地址。',
  }
}; 