"use client"

import { useState } from "react"

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex items-center border rounded-lg text-black h-full">
      <button
        onClick={() => setQuantity(q => Math.max(1, q - 1))}
        className="px-3 py-1"
      >
        −
      </button>

      <span className="px-4">{quantity}</span>

      <button
        onClick={() => setQuantity(q => q + 1)}
        className="px-3 py-1"
      >
        +
      </button>
    </div>
  )
}
