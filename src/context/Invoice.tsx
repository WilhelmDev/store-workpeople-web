import useFirebase from "@/hooks/useFirebase";
import { ContextInvoice } from "@/interfaces/invoice";
import { Product } from "@/interfaces/product";
import { doc, getDoc } from "firebase/firestore";
import { createContext, PropsWithChildren, useMemo, useState } from "react";

const InvoiceContext = createContext<Partial<ContextInvoice>>({})

const InvoiceProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null)
  const [showModalProduct, setShowModalProduct] = useState<boolean>(false)
  const { db } = useFirebase()

  const closeModal = () => {
    setShowModalProduct(false);
    setSelectedProduct(null);
  }

  const getProduct = async (productId: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const docRef = doc(db, 'products', productId);
      const product = await getDoc(docRef);
      if (product.exists()) {
        setSelectedProduct(product.data() as Product);
        setShowModalProduct(true);
      } else {
        console.log("Product not found");
      }
    } catch (error) {
      console.error("Error getting document: ", error);
    } finally {
      setLoading(false);
    }
  }

  const memoizedValues = useMemo(() => {
    return {
      showModalProduct,
      selectedProduct,
      getProduct,
      loading,
      closeModal,
    }
  }, [showModalProduct, selectedProduct, getProduct, loading])

  return (
    <InvoiceContext.Provider value={memoizedValues}>
      {children}
    </InvoiceContext.Provider>
  )
}

export { InvoiceContext }
export default InvoiceProvider