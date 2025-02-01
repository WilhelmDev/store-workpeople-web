'use client'
import PageContainer from '@/components/shared/PageContainer'
import React, { Fragment, useState } from 'react'
import DashboardCard from '../../components/shared/DashboardCard'
import ProductForm from '@/components/form/Product'
import { ProductPayload } from '@/interfaces/product'
import { createProduct } from '@/services/product.service'
import CustomSnackbar from '@/components/snackbar/Custom'
import { useRouter } from 'next/navigation'
import routes from '@/utils/routes'

export default function NewProduct() {
  const [loading, setLoading] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [message, setMessage] = useState('')
  const [alertSeverity, setAlertSeverity] = useState<"error" | "warning" | "info" | "success">('info')
  const router = useRouter()

  const handleSubmit = async (product:ProductPayload) => {
    setLoading(true)
    try {
      await createProduct(product)
      setAlertSeverity('success')
      setMessage('Producto agregado con éxito')
      setOpenSnackbar(true)
      setTimeout(() => {
        router.push(routes.products)
      }, 1200);
    } catch (error) {
      console.error('Error al agregar el producto:', error)
      setAlertSeverity('error')
      setMessage('Hubo un error al agregar el producto')
      setOpenSnackbar(true)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
    <PageContainer title='Agregar Producto' description='Aqui puedes agregar un producto'>
      <DashboardCard title="Listado de productos">
        <Fragment>
          <ProductForm callbackProduct={handleSubmit} loading={loading} />
        </Fragment>
      </DashboardCard>
    </PageContainer>
    <CustomSnackbar
      isOpen={openSnackbar}
      handleClose={() => setOpenSnackbar(false)}
      alertSeverity={alertSeverity}
      alertTitle={message}
      origin={{ horizontal: 'center', vertical: 'top' }}
    />
    </>
  )
}
