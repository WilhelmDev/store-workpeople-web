import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { InvoiceItem, Product } from '@/interfaces/product'
import { IconTrash } from '@tabler/icons-react'
import useInvoice from '@/hooks/useInvoice'

interface InvoiceProductItemProps {
  item: InvoiceItem
}

const InvoiceProductItem: React.FC<InvoiceProductItemProps> = ({ item }) => {
  const {product, quantity } = item
  const { removeProduct } = useInvoice()

  const totalPrice = () => (product.price * quantity).toFixed(2)

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} p={2} border="1px solid #e0e0e0" borderRadius={2}>
      <Box>
        <Typography variant="subtitle1">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Subtotal: ${ totalPrice() } | Cantidad: {quantity}
        </Typography>
      </Box>
      <IconButton onClick={() => removeProduct(product.id)} color="error">
        <IconTrash size={20} />
      </IconButton>
    </Box>
  )
}

export default InvoiceProductItem