import useInvoice from '@/hooks/useInvoice'
import { ProductImage } from '@/interfaces/product'
import { Box, Button, Chip, CircularProgress, Dialog, DialogContent, DialogTitle, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'

type Props = {
  // You can add props here if needed in the future
}

export default function ProductDetail({}: Props) {
  const { selectedProduct, closeModal, showModalProduct, addProduct } = useInvoice()
  const [ showSnackbar, setShowSnackbar] = useState(false)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const addToinvoice = () => {
    if (selectedProduct) {
      addProduct(selectedProduct)
      closeModal()
    }
  }

  const AddinvoiceBtn = () => {
    return (
      <Grid item xs={12} md={12}>
        <Button variant="contained" fullWidth color="primary" onClick={addToinvoice}>
          Añadir a factura
        </Button>
      </Grid>
    )
  }

  const RenderImage = ({images}: { images: ProductImage[]}) => {
    const imagesToDisplay = images.length > 0 ? images[0] : null
    return (
      <Box
      component="img"
      sx={{
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        aspectRatio: 1,
        borderRadius: 2,
        boxShadow: 3,
      }}
      src={imagesToDisplay?.url || '/images/products/s4.jpg'}
      alt={selectedProduct?.name}
    />
    )
  }

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
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <RenderImage images={selectedProduct.images} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" height="100%" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" gutterBottom>{selectedProduct.name}</Typography>
                  <Typography variant="body1" paragraph>{selectedProduct.description}</Typography>
                  <Typography variant="h6" gutterBottom>
                    Precio: <span style={{fontWeight: 700}}>{selectedProduct.price}$</span>
                  </Typography>
                  <Chip label={selectedProduct.category.name} color="primary" sx={{ mt: 1 }} />
                </Box>
                { !isMobile && (
                  <Box>
                    <AddinvoiceBtn/>
                  </Box>
                  )
                }
              </Box>
            </Grid>
            {isMobile && (
              <AddinvoiceBtn/>
            )}
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  )
}
