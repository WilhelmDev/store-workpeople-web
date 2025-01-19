export interface Category {
  id: number;
  name: string;
  color: string;
  storeId: number;
}

export type CategoryPayload = Omit<Category, 'id' | 'storeId' >;