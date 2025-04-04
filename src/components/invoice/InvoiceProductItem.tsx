import React from 'react'
import { Box, Typography, IconButton, Avatar } from '@mui/material'
import { CartItem } from '@/interfaces/cart'
import { IconTrash } from '@tabler/icons-react'
import useInvoice from '@/hooks/useInvoice'

interface InvoiceProductItemProps {
  item: CartItem
}

const InvoiceProductItem: React.FC<InvoiceProductItemProps> = ({ item }) => {
  const {product, quantity } = item
  const { removeProduct } = useInvoice()

  const totalPrice = () => (product.price * quantity).toFixed(2)

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} p={2} border="1px solid #e0e0e0" borderRadius={2}>
      <Box display="flex" alignItems="center">
        <Avatar
          src={product.images[0]?.url || '/images/products/s4.jpg'}
          alt={product.name}
          sx={{ width: 60, height: 60, marginRight: 2 }}
          variant="rounded"
        />
        <Box>
          <Typography variant="subtitle1">{product.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            Subtotal: ${ totalPrice() } | Cantidad: {quantity}
          </Typography>
        </Box>
      </Box>
      <IconButton onClick={() => removeProduct(product.id)} color="error">
        <IconTrash size={20} />
      </IconButton>
    </Box>
  )
}

export default InvoiceProductItem
