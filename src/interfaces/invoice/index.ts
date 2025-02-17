import { InvoiceItem, Product } from "../product";

export interface ContextInvoice {
  showModalProduct: boolean,
  selectedProduct: Product | null,
  loading: boolean,
  getProduct: (productId:string) => void,
  closeModal: () => void
  addProduct: (product: InvoiceItem) => void,
  updateQuantity: (productId: string, quantity: number) => void,
  removeProduct: (productId: string) => void,
  products: InvoiceItem[]
}