import { Alert, Snackbar } from '@mui/material'
import React from 'react'

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  text: string;
}

export default function BaseSnackbar({ isOpen, handleClose, text }: Props) {
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
        className='testeo-perron'
      >
      {text}
      </Alert>
  </Snackbar>
  )
}