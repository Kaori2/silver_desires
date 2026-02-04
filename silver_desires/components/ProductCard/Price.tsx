type PriceProps = {
  price: number
}

export default function Price({ price }: PriceProps) {
  return (
    <p className="text-xl font-semibold text-black">
      R$ {price.toFixed(2)}
    </p>
  )
}
