import useInvoice from '@/hooks/useInvoice'
import { Product } from '@/interfaces/product'
import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'

type Props = {
  product: Product,
}

export default function ProductCard({ product }: Props) {
  const { getProduct, loading } = useInvoice()
  const handleClick = () => {
    if (loading) return
    getProduct(product.id)
  }
  return (
    <Card onClick={handleClick} >
      <Box sx={{ position: 'relative', paddingTop: '100%' }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            aspectRatio: 1,
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="body1">
          Precio: <span style={{fontWeight: 700}}>{product.price}$</span>
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={product.category} size="small" color='info' style={{marginTop: '5px'}}/>
        </Stack>
      </CardContent>
    </Card>
  )
}