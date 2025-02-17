import { InvoiceItem } from "@/interfaces/product";

export const saveUserToken = (token: string) => {
  localStorage.setItem('userToken', token);
}

export const getUserToken = () => {
  return localStorage.getItem('userToken');
}

export const removeUserToken = () => {
  localStorage.removeItem('userToken');
}

export const saveStoreName = (storeName: string) => {
  localStorage.setItem('storeName', storeName);
}

export const getCartItems = () => {
  return JSON.parse(localStorage.getItem('cartItems') || '[]') as InvoiceItem[];
}

export const addCartItems = (newCartItems: InvoiceItem[]) => {
  const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const updatedCartItems = [...existingCartItems, ...newCartItems];
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
}
