import BaseSnackbar from "@/components/snackbar/Base";
import useFirebase from "@/hooks/useFirebase";
import { ContextInvoice } from "@/interfaces/invoice";
import { Product } from "@/interfaces/product";
import { getProductById } from "@/services/product.service";
import { doc, getDoc } from "firebase/firestore";
import { createContext, PropsWithChildren, useCallback, useMemo, useState } from "react";

const InvoiceContext = createContext<Partial<ContextInvoice>>({})

const InvoiceProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null)
  const [showModalProduct, setShowModalProduct] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([])

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
  const addProduct = useCallback((product: Product) => {
    setProducts(prevProducts => {
      //TODO: Check repeated products
      setShowSnackbar(true);
      return [...prevProducts, product];
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId ? {...product, quantity} : product
      )
    );
  }, []);

  const removeProduct = useCallback((productId: string) => {
    setProducts(prevProducts => 
      prevProducts.filter(product => product.id !== productId)
    );
  }, []);

  const memoizedValues = useMemo(() => {
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
    }
  }, [showModalProduct, selectedProduct, getProduct, loading, addProduct, removeProduct, updateQuantity, products])
  //  End functions for Products CRUD operations

  return (
    <InvoiceContext.Provider value={memoizedValues}>
      {children}
      <BaseSnackbar isOpen={showSnackbar} handleClose={() => setShowSnackbar(false)} />
    </InvoiceContext.Provider>
  )
}

export { InvoiceContext }
export default InvoiceProvider