import React, { useState, useEffect } from 'react'
import { Snackbar, Box, Button } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import ErrorIcon from '@mui/icons-material/Error'
import './MessageToast.css'

const MessageToast = ({ open, setOpen, message, error }) => {
  const [toastOpen, setToastOpen] = useState(open)
  const handleClose = () => {
   
    setOpen(false)
    setToastOpen(false)
  }
  useEffect(() => {
    setTimeout(() => {
     
        setToastOpen(false)
        setOpen(false)
      
    }, 3000)
  }, [])

  return (
    <>
      <Snackbar
        className="toastmessage"
        message={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {error ? (
              <ErrorIcon
                fontSize="large"
                sx={{
                  color: '#fff',
                }}
              />
            ) : (
              <CheckCircle
                fontSize="large"
                sx={{
                  color: '#01A24C',
                }}
              />
            )}
            <Box
              component="span"
              pl={2}
              sx={{ color: error ? '#fff' : '#082545' }}
            >
              {message}
            </Box>
          </Box>
        }
        sx={{
          '& .MuiSnackbarContent-root': {
            borderRadius: '40px',
            backgroundColor: error ? '#e63333' : '#e3f5ff',
            color: '#000',
            marginTop: '45px',
          },
        }}
        autoHideDuration={2000}
        open={toastOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handleClose}
      />
    </>
  )
}

export default MessageToast
