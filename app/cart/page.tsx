import CartPage from "../components/cart";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Welcome to SembarkShop ',
  description: 'Cart PAge',
}
export default async function Cart() {
    return <CartPage />
}