import { Alert, Snackbar, SnackbarOrigin } from '@mui/material'
import React from 'react'

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  origin?: SnackbarOrigin
  alertTitle: string;
  alertSeverity: "error" | "warning" | "info" | "success" 
}
export default function CustomSnackbar({ isOpen, handleClose, origin, alertTitle, alertSeverity }: Props) {
  return (
    <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose} anchorOrigin={origin}>
      <Alert
        onClose={handleClose}
        severity={alertSeverity}
        variant="filled"
        sx={{ width: '100%' }}
        className='testeo-perron'
      >
      {alertTitle}
      </Alert>
  </Snackbar>
  )
}