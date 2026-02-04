import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

type RatingProps = {
  rating: number
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex width-full justify-center">
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={faStar}
          className={
            star <= rating ? "text-rose-950" : "text-gray-300"
          }
        />
      ))}
    </div>
    </div>
  )
}
