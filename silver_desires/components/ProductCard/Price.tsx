type PriceProps = {
  price: number
}

export default function Price({ price }: PriceProps) {
  return (
    <p className="text-xl font-semibold">
      R$ {price.toFixed(2)}
    </p>
  )
}
