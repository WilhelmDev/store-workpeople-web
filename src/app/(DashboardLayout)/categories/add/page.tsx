'use client'
import PageContainer from '@/components/shared/PageContainer'
import React, { Fragment, useState } from 'react'
import DashboardCard from '../../components/shared/DashboardCard'
import CategoryForm from '@/components/form/Category'
import CustomSnackbar from '@/components/snackbar/Custom'
import { CategoryPayload } from '@/interfaces/category'
import { isAxiosError } from 'axios'
import { createCategory } from '@/services/category.service'
import { ResponseApi } from "@/interfaces/api";

export default function AddCategory() {
  const [message, setMessage] = useState('')
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState<"error" | "warning" | "info" | "success">('info')

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }
  const handleMessage = (msg:string, type: "error" | "warning" | "info" | "success") => {
    setOpenSnackbar(true)
    setMessage(msg)
    setOpenSnackbar(true)
    setAlertSeverity(type)
  }
  const AddCategory = async (payload:CategoryPayload) => {
    try {
      const data = await createCategory(payload)
      handleMessage('Categoría creada con éxito','success')
    } catch (error) { 
      if (isAxiosError(error)) {
        handleMessage((error.response?.data as ResponseApi<null>).message, 'error')
        
      } else {
        handleMessage('ocurrio un error inesperado', 'error')
      }
    }
  }
  return (
    <PageContainer title='Nueva categoria' description='Aqui puedes Crear una nueva categoria'>
      <DashboardCard title="Crea una categoria">
        <Fragment>
          <CategoryForm onSubmit={AddCategory}/>
          <CustomSnackbar
            isOpen={openSnackbar}
            handleClose={handleCloseSnackbar}
            alertSeverity={alertSeverity}
            alertTitle={message}
            origin={{horizontal: 'center', vertical: 'top' }}
          />
        </Fragment>
      </DashboardCard>
    </PageContainer>
  )
}
