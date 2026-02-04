"use client"

import { useState } from "react"

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(0)

  return (
    <div className="flex items-center border rounded-lg text-rose-950 h-full">
      <button
        onClick={() => setQuantity(q => Math.max(0, q - 1))}
        className="px-3 py-1 text-rose-950 text-lg"
      >
        −
      </button>

      <span className="px-4 text-rose-950 text-lg">{quantity}</span>

      <button
        onClick={() => setQuantity(q => q + 1)}
        className="px-3 py-1 text-rose-950 text-lg"
      >
        +
      </button>
    </div>
  )
}
