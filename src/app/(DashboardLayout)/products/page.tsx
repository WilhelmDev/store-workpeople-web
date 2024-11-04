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

export default function AllProdutsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { db } = useFirebase()
  const { showModalProduct } = useInvoice()

  useEffect(() => {
    const productsCollection = collection(db, 'products')
    const queryActives = query(productsCollection, where('active', '==', true))

    const unsubscribe = onSnapshot(queryActives, (snapshot) => {
      const updatedProducts = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })) as Product[]

      setProducts(updatedProducts)
      setLoading(false)
    }, (error) => {
      console.error("Error fetching products:", error)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [db])

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
