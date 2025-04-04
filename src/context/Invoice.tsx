import BaseSnackbar from "@/components/snackbar/Base";
import { Cart } from "@/interfaces/cart";
import { ContextInvoice } from "@/interfaces/invoice";
import { InvoiceItem, Product } from "@/interfaces/product";
import { addToCart, getCartUser } from "@/services/cart.service";
import { addCartItems } from "@/services/localstorage.service";
import { getProductById } from "@/services/product.service";
import { createContext, PropsWithChildren, useCallback, useMemo, useState } from "react";

const InvoiceContext = createContext<Partial<ContextInvoice>>({})

const InvoiceProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null)
  const [showModalProduct, setShowModalProduct] = useState<boolean>(false)
  const [products, setProducts] = useState<InvoiceItem[]>([])
  const [cart, setCart] = useState<Cart| null>(null)

  const [showSnackbar, setShowSnackbar] = useState<boolean>(false)

  const closeModal = () => {
    setShowModalProduct(false);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 200);
  }

  const getProduct = useCallback(async (productId: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const product = await getProductById(productId);
      setSelectedProduct(product);
      setShowModalProduct(true);
    } catch (error) {
      console.error("Error getting document: ", error);
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Begin functions for Products CRUD operations
  const addProduct = useCallback(async (item: InvoiceItem) => {
    const updatedCart = await addToCart(parseInt(item.product.id), item.quantity);

    setCart(updatedCart);

    setShowSnackbar(true)

  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setProducts(prevProducts => 
      prevProducts.map(item => 
        item.product.id === productId ? { product: item.product, quantity} : item
      )
    );
  }, []);

  const removeProduct = useCallback((productId: string) => {
    setProducts(prevProducts => 
      prevProducts.filter(item => item.product.id !== productId)
    );
  }, []);

  const getCart = useCallback(async() => {
    try {
      const data = await getCartUser();
      setCart(data);
    } catch (error) {
      console.error("Error getting cart: ", error);
    }
  }, []);

  //  End functions for Products CRUD operations

  const memoizedValues:ContextInvoice = useMemo(() => {
    return {
      showModalProduct,
      selectedProduct,
      getProduct,
      loading,
      closeModal,
      addProduct,
      updateQuantity,
      removeProduct,
      products,
      cart,
      getCart,
    }
  }, [showModalProduct, selectedProduct, getProduct, loading, addProduct, removeProduct, updateQuantity, products, cart, getCart])

  return (
    <InvoiceContext.Provider value={memoizedValues}>
      {children}
      <BaseSnackbar isOpen={showSnackbar} handleClose={() => setShowSnackbar(false)} />
    </InvoiceContext.Provider>
  )
}

export { InvoiceContext }
export default InvoiceProvider