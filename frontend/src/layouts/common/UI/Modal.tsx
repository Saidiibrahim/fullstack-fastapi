// src/layouts/commons/Modal.tsx

// Import required modules and interfaces from Material-UI
import React from 'react';
import { Modal as MuiModal, ModalProps, Box } from '@mui/material';

// CustomModal component definition
const CustomModal: React.FC<ModalProps> = ({ children, ...props }) => {
  // Render the CustomModal component using Material-UI components with predefined styles
  return (
    <MuiModal {...props}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
      </Box>
    </MuiModal>
  );
};

export default CustomModal;
