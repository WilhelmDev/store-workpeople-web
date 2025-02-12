import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { Product } from '@/interfaces/product'
import { IconTrash } from '@tabler/icons-react'
import useInvoice from '@/hooks/useInvoice'

interface InvoiceProductItemProps {
  product: Product
}

const InvoiceProductItem: React.FC<InvoiceProductItemProps> = ({ product }) => {
  const { removeProduct } = useInvoice()

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} p={2} border="1px solid #e0e0e0" borderRadius={2}>
      <Box>
        <Typography variant="subtitle1">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Precio: ${product.price.toFixed(2)} | Cantidad: {product.id}
        </Typography>
      </Box>
      <IconButton onClick={() => removeProduct(product.id)} color="error">
        <IconTrash size={20} />
      </IconButton>
    </Box>
  )
}

export default InvoiceProductItem