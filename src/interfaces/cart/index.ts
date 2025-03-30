import { Product } from '../product'

export interface CartItem {
  id: number
  cartId: number
  productId: number
  quantity: number
  product: Product
}

export interface Cart {
  id: number
  userId: number
  items: CartItem[]
}