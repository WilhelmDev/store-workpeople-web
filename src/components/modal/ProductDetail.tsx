import useInvoice from '@/hooks/useInvoice'
import { Box, CircularProgress, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../card/Product'

type Props = {
  // You can add props here if needed in the future
}

export default function ProductDetail({}: Props) {
  const { selectedProduct, closeModal, showModalProduct } = useInvoice()

  return (
    <Dialog 
      open={showModalProduct} 
      onClose={closeModal} 
      aria-labelledby="product-detail-dialog-title"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle id="product-detail-dialog-title">
        Detalles del Producto
      </DialogTitle>
      <DialogContent>
        {!selectedProduct ? (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="200px">
            <CircularProgress />
            <Typography variant="body1" style={{ marginTop: '16px' }}>
              Cargando producto...
            </Typography>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <ProductCard product={selectedProduct}/>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  )
}
