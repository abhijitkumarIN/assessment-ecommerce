
export interface Category {
  id: number
  name: string
  slug: string
}

export interface Product {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: {
    id: number
    name: string
    slug: string
  }
  images: string[]
}
export interface ProductCardProp {
  product: {
    id: number
    title: string
    slug: string
    price: number
    description: string
    category: {
      name: string
      slug: string
    }
    images: string[]
  }
}