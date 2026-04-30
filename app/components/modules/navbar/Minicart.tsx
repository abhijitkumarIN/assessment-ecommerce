'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { removeFromCart, incrementItem, updateQuantity } from '@/lib/features/cart-slice'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import { BasketIcon } from '../../icons'

export default function Minicart() {
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cart)

    const totalPrice = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0)

    const handleQuantityChange = (id: number, newQuantity: number) => {
        if (newQuantity < 1) return
        dispatch(updateQuantity({ id, quantity: newQuantity }))
    }

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id))
    }


    if (totalItems === 0) {
        return (
            <div className="relative  cursor-pointer">
                <BasketIcon />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                </span>
            </div>
        )
    }

    return (
        <div className="relative group">
            <div className="relative cursor-pointer">
                <BasketIcon />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                </span>
            </div>

            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-96 overflow-y-auto">
                <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Shopping Cart ({totalItems} items)</h3>
                </div>
                <ScrollArea className="h-52 px-1 w-full ">
                    {cart?.items?.map((item) => (
                        <div key={item.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                            <div className="flex gap-3">
                                <Link href={`/product/${item?.id}`}>

                                    <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </Link>
                                <div className="flex-1 min-w-0">
                                    <Link href={`/product/${item?.id}`}>
                                        <h4 className="text-sm font-medium text-gray-900 max-w-44">{item.title}</h4>
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.categoryName}</p>
                                    <p className="text-sm font-semibold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            className="w-6 h-6 cursor-pointer flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded text-gray-600 text-sm"
                                        >
                                            -
                                        </button>
                                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            className="w-6 cursor-pointer h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded text-gray-600 text-sm"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="ml-auto cursor-pointer text-red-500 hover:text-red-700 text-sm"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </ScrollArea>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-gray-900">Total:</span>
                        <span className="text-lg font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                    </div>
                    <Link
                        href="/cart"
                        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        View Cart
                    </Link>
                </div>
            </div>
        </div>
    )
}
