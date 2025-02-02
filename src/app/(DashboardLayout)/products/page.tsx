"use client"
import React, { Fragment, useEffect, useState } from 'react'
import PageContainer from '../../../components/shared/PageContainer'
import DashboardCard from '../components/shared/DashboardCard'
import { Box, CircularProgress, Typography } from '@mui/material'
import { collection, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import useFirebase from '@/hooks/useFirebase'
import { Product } from '@/interfaces/product'
import ProductList from '@/components/list/ProductList'
import useInvoice from '@/hooks/useInvoice'
import ProductDetail from '@/components/modal/ProductDetail'
import { getProducts } from '@/services/product.service'

export default function AllProdutsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const { db } = useFirebase()
  const { showModalProduct } = useInvoice()

  const fetchProducts = async () => {
    if (loading) return;
    try {
      setLoading(true)
      const products = await getProducts()
      setProducts(products)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <PageContainer title='Listado de Productos' description='Aqui puedes ver tus productos'>
      <DashboardCard title="Todos los productos">
        <Fragment>
          {loading 
          ? (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="200px">
              <CircularProgress />
              <Typography variant="body1" style={{ marginTop: '16px' }}>
                Cargando productos...
              </Typography>
            </Box>
            ) 
          : <ProductList elements={products}/>
          }
          <ProductDetail/>
        </Fragment>
      </DashboardCard>
  </PageContainer>
  )
}
