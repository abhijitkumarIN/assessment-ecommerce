'use client'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/lib/features/cart-slice'
import Container from '@/app/components/container/Index'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/app/interfaces'
import { AddToCart, CurrectIcon } from '../../icons'

type ProductPageProps = {
    productDetail: any
};

export default function ProductPage({ productDetail }: ProductPageProps) {
    const dispatch = useDispatch()
    const [product, _] = useState<Product | null>(productDetail)
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({
                ...product,
                quantity,
            }))
            setQuantity(1)
        }
    }

    if (!product) {
        return (
            <Container className="lg:w-282 md:w-auto m-auto">
                <div className="py-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <Link href="/catalog" className="text-blue-600 ">
                        {'<- Back to Catalog'}
                    </Link>
                </div>
            </Container>
        )
    }

    return (
        <Container className="lg:w-282 md:w-auto m-auto">
            <div className="py-8">
                <Link href="/catalog" className="text-blue-600  mb-4 inline-block">
                    {'<- Back to Catalog'}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
                    <div className="space-y-4">
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                            <Image
                                src={product.images[selectedImage]}
                                alt={product.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                        {product?.images?.length > 1 && (
                            <div className="grid grid-cols-4 gap-3">
                                {product?.images?.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 transition-all ${selectedImage === index
                                            ? 'border-blue-500 ring-2 ring-blue-200'
                                            : 'border-transparent hover:border-gray-300'
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${product.title} thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-4">
                            <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                {product.category.name}
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-4xl font-bold text-gray-900">
                                ${product.price}
                            </span>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-200'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-sm text-gray-500 ml-1">(4.0)</span>
                            </div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <div className="mt-auto space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-700 font-medium">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 font-medium">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="w-full py-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl "
                            >
                                <AddToCart />
                                Add to Cart - ${(product.price * quantity).toFixed(2)}
                            </button>

                            <div className="flex items-center gap-2 text-green-600 text-sm">
                                <CurrectIcon />
                                <span>In Stock </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}