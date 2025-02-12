import React from 'react'
import { Box, Typography } from '@mui/material'
import { Product } from '@/interfaces/product'
import InvoiceProductItem from './InvoiceProductItem'

interface InvoiceProductListProps {
  products: Product[]
}

const InvoiceProductList: React.FC<InvoiceProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <Typography variant="h6">No hay productos en la factura</Typography>
      </Box>
    )
  }

  return (
    <Box>
      {products.map((product) => (
        <InvoiceProductItem key={product.id} product={product} />
      ))}
    </Box>
  )
}

export default InvoiceProductList