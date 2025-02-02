import useInvoice from '@/hooks/useInvoice'
import { Product, ProductImage } from '@/interfaces/product'
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
  const RenderImage = ({images}: { images: ProductImage[]}) => {
    const imagesToDisplay = images.length > 0 ? images[0] : null
    return (
    <Box sx={{ position: 'relative', paddingTop: '100%' }}>
      <CardMedia
        component="img"
        image={imagesToDisplay?.url || '/images/products/s4.jpg'}
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
    )
  }
  return (
    <Card onClick={handleClick} >
      <RenderImage images={product.images}/>
      <CardContent>
        <Typography 
          variant="h5" 
          sx={{
            height: '3em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: '1.5em',
          }}
        >
          {product.name}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="body1">
          Precio: <span style={{fontWeight: 700}}>{product.price}$</span>
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={product.category.name} size="small" color='info' style={{marginTop: '5px'}}/>
        </Stack>
      </CardContent>
    </Card>
  )
}