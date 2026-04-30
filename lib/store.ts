import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart-slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  })
}

let store: ReturnType<typeof makeStore> | null = null

export const initializeStore = () => {
  if (!store) {
    store = makeStore()
    if (typeof window !== 'undefined') {
      store.subscribe(() => {
        try {
          const state = store!.getState()
          localStorage.setItem('cart', JSON.stringify(state.cart.items))
        } catch (e) {
          console.error('Failed to save cart == ', e)
        }
      })
    }
  }
  return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']