import ProductCard from "@/components/ProductCard/ProductCard"
import { products } from "@/data/products"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </main>
  )
}
