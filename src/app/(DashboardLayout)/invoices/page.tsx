"use client"
import PageContainer from '@/components/shared/PageContainer'
import React from 'react'
import DashboardCard from '../components/shared/DashboardCard'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import routes from '@/utils/routes'
import { IconCircleDashed, IconFilePlus } from '@tabler/icons-react'

export default function InvoicesPage() {
  return (
    <PageContainer title='facturas' description='aqui puedes ver todas tus facturas'>
      <DashboardCard title='Todas las facturas'>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="200px">
          <Typography variant='h5' textAlign={'center'}>
            Aun no tienes facturas registradas.
          </Typography>
          <Box mt={2}/>
          <Button color='primary' variant='contained' size='large'
          component={Link} href={routes.newInvoice} startIcon={<IconFilePlus/>}
          >
            Crear factura
          </Button>
        </Box>
      </DashboardCard>
    </PageContainer>
  )
}
