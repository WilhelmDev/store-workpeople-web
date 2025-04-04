'use client'
import React, { useEffect } from 'react'
import useInvoice from '@/hooks/useInvoice'
import PageContainer from '@/components/shared/PageContainer'
import DashboardCard from '../../components/shared/DashboardCard'
import InvoiceProductList from '@/components/invoice/InvoiceProductList'

export default function AddInvoicePage() {
  const { getCart, cart } = useInvoice()

  useEffect(() => {
    getCart()
  }, [getCart])

  return (
    <PageContainer title='Crear Factura' description='Aquí puedes crear una nueva factura'>
      <DashboardCard title="Productos en la factura">
        <InvoiceProductList cartItems={cart?.items || []} />
      </DashboardCard>
    </PageContainer>
  )
}

