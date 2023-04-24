import React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts({ open, setOpen }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert severity="error" 
        
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
        <strong>Error:</strong> Por favor complete los campos requeridos
        </Alert>
      </Collapse>

    </Box>
  );
}

/*
export default function BasicAlerts() {

    return (
        <Alert severity="error">Error</Alert>
    );
  }*/
  