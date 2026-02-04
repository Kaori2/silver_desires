import FreeShipping from "@/components/Header/FreeShipping";
import Hero from "@/components/Header/Hero";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";
import Banner from "@/components/Header/Banner";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <main className="w-full">
      <FreeShipping />
      <Hero />
      <Banner />
      <Categories />
      <div className="min-h-screen bg-gray-100 p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
