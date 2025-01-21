export interface ProductPayload {
  name: string;
  price: number;
  image: string;
  categoryId: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  active: boolean
}