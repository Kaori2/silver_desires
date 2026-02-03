"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className="absolute top-3 right-3 transition-transform hover:scale-110"
      aria-label="Add to favorites"
    >
      <FontAwesomeIcon
        icon={isFavorite ? solidHeart : regularHeart}
        className={isFavorite ? "text-red-500" : "text-gray-400"}
        size="lg"
      />
    </button>
  )
}
