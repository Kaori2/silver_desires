import Image from "next/image"

type ProductImageProps = {
  src: string
  alt: string
}

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={150}
        height={200}
        className="object-contain"
      />
    </div>
  )
}
