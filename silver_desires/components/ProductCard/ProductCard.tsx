import { Product } from "@/types/Product"
import FavoriteButton from "./FavoriteButton"
import ProductImage from "./ProductImage"
import Rating from "./Rating"
import Price from "./Price"
import QuantitySelector from "./QuantitySelector"
import BuyButton from "./BuyButton"

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative border rounded-xl p-4 w-64 bg-white space-y-3">
      <FavoriteButton />

      <ProductImage
        src={product.image}
        alt={product.name}
      />

      <Rating rating={product.rating} />
      <Price price={product.price} />

      <div>
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="font-medium">{product.name}</h3>
      </div>

      <div className="flex justify-between items-center w-full mt-4 h-auto">
        <QuantitySelector />
        <BuyButton />
      </div>
    </div>
  )
}
