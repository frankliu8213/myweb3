import Image from "next/image";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroBanner } from "../components/features/HeroBanner";
import { ProductGallery } from "../components/features/ProductGallery";
import { FeaturedProducts } from "../components/features/FeaturedProducts";
import { Newsletter } from "../components/features/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroBanner />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 flex-grow">
        <ProductGallery />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
