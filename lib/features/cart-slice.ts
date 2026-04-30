import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/app/interfaces'

export interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
  categoryName: string
}

const loadCartFromStorage = (): CartItem[] => {
  try {
    const data = localStorage.getItem('cart')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: loadCartFromStorage(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product & { quantity: number }>) => {
      const product = action.payload
      const existingItem = state.items.find(item => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += product.quantity
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: product.quantity,
          image: product.images[0],
          categoryName: product.category?.name || 'Uncategorized',
        })
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    clearCart: (state) => {
      state.items = []
    },
    incrementItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart, incrementItem, decrementItem } = cartSlice.actions

export default cartSlice.reducer