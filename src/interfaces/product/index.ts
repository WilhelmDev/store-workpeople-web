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
  images: ProductImage[];
  category: string;
  active: boolean
}

export interface ProductImage {
  id: number;
  url: string;
  productId: number;
}