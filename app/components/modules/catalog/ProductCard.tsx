'use client'
import { ProductCardProp } from "@/app/interfaces"
import { addToCart } from "@/lib/features/cart-slice"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddToCartIcon } from "../../icons"

export default function ProductCard({ product }: ProductCardProp) {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAdding(true)
    if (product) {
      dispatch(addToCart({
        ...product,
        quantity: 1,
      } as any))
    }
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div
        className="group relative bg-white rounded-2xl shadow-sm  transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
          )}
          <Image
            src={product.images?.at(0) as string}
            alt={product.title}
            fill
            className={`object-cover transition-transform duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onLoad={() => setImageLoaded(true)}
          />

          <div className="absolute top-3 left-3">
            <span className="bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-gray-700 px-2.5 py-1 rounded-full shadow-sm">
              {product.category.name}
            </span>
          </div>

          <div
            className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <button
              className={`w-full cursor-pointer py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${isAdding
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-900 hover:bg-gray-50'
                }`}
              onClick={handleAddToCart}
            >
              {isAdding ? (
                <>
                  Added successfully
                </>
              ) : (
                <>
                  <AddToCartIcon />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3rem] flex-shrink-0">
            {product.title}
          </h3>

          <p className="text-gray-500 text-sm mb-3 line-clamp-2 min-h-[2.5rem] flex-shrink-0">
            {product.description}
          </p>

          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.price >= 50 && (
                  <span className="text-xs text-green-600 font-medium">Free shipping</span>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500 font-medium">In Stock</span>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-200'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-400 ml-1">(4.0)</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
