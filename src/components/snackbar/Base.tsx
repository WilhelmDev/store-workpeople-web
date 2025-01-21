import { Alert, Snackbar } from '@mui/material'
import React from 'react'

type Props = {
  isOpen: boolean;
  handleClose: () => void;
}

export default function BaseSnackbar({ isOpen, handleClose}: Props) {
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
        className='testeo-perron'
      >
      Producto añadido satisfactoriamente a la factura!
      </Alert>
  </Snackbar>
  )
}