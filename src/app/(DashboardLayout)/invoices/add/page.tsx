'use client'
import React from 'react'
import useInvoice from '@/hooks/useInvoice'
import PageContainer from '@/components/shared/PageContainer'
import DashboardCard from '../../components/shared/DashboardCard'
import InvoiceProductList from '@/components/invoice/InvoiceProductList'

export default function AddInvoicePage() {
  const { products } = useInvoice()

  return (
    <PageContainer title='Crear Factura' description='Aquí puedes crear una nueva factura'>
      <DashboardCard title="Productos en la factura">
        <InvoiceProductList products={products} />
      </DashboardCard>
    </PageContainer>
  )
}

