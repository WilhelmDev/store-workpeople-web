'use client'
import PageContainer from '@/components/shared/PageContainer'
import React, { Fragment, useState } from 'react'
import DashboardCard from '../../components/shared/DashboardCard'
import ProductForm from '@/components/form/Product'
import { ProductPayload } from '@/interfaces/product'
import { createProduct } from '@/services/product.service'

export default function NewProduct() {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (product:ProductPayload) => {
    setLoading(true)
    try {
      const data = await createProduct(product)
      console.log('Producto agregado con éxito:', data)
    } catch (error) {
      console.error('Error al agregar el producto:', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <PageContainer title='Agregar Producto' description='Aqui puedes agregar un producto'>
      <DashboardCard title="Listado de productos">
        <Fragment>
          <ProductForm callbackProduct={handleSubmit} loading={loading} />
        </Fragment>
      </DashboardCard>
    </PageContainer>
  )
}
