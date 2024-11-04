import { Product } from "../product";

export interface ContextInvoice {
  showModalProduct: boolean,
  selectedProduct: Product | null,
  loading: boolean,
  getProduct: (productId:string) => void,
  closeModal: () => void
}