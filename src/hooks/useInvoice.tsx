import { InvoiceContext } from "@/context/Invoice"
import { ContextInvoice } from "@/interfaces/invoice"
import { useContext } from "react"

const useInvoice = () => {
  return (
    useContext(InvoiceContext)
  ) as ContextInvoice
}

export default useInvoice