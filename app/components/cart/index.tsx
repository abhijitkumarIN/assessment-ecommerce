'use client'

import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { removeFromCart, updateQuantity, clearCart } from '@/lib/features/cart-slice'
import Link from 'next/link'
import Image from 'next/image'
import { DeleteIcon } from '../icons';
import Container from '../container/Index'
export default function CartPage() {
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

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    if (cart.items.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
                <p className="text-gray-600 mb-8">Looks like you have not added any items to your cart yet.</p>
                <Link
                    href="/catalog"
                    className="inline-block border border-solid border-blue-600 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        )
    }

    return (
        <Container className="lg:w-282 md:w-auto m-auto mt-7">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {cart?.items?.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-4 last:mb-5">
                            <div className="flex gap-4">
                                <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                    <Image
                                        src={item?.image}
                                        alt={item?.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">{item.categoryName}</p>
                                            <h3 className="font-semibold text-gray-900 line-clamp-2">{item.title}</h3>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="text-gray-400 cursor-pointer transition-colors"
                                        >
                                          <DeleteIcon/>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                className="w-8 h-8 flex cursor-pointer items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 font-semibold transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex cursor-pointer items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 font-semibold transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                            <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                                <span className="font-medium">${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping</span>
                                <span className="font-medium text-green-600">Free</span>
                            </div>
                            <div className="border-t border-gray-200 pt-3 flex justify-between">
                                <span className="font-semibold text-gray-900">Total</span>
                                <span className="text-xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <Link
                            href="#"
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 px-6 rounded-xl mt-6 transition-colors"
                        >
                            Proceed to Checkout
                        </Link>
                        <Link
                            href="/catalog"
                            className="block w-full text-center border border-solid border-blue-600 text-blue-600 rounded-xl mt-3 hover:text-blue-700 font-medium py-3 mt-2 transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </Container>

    )
}
