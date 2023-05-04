// src/layouts/commons/Alert.tsx

// Import required modules and interfaces from Material-UI
import React from 'react';
import { Alert as MuiAlert, AlertProps } from '@mui/material';

// CustomAlert component definition
const CustomAlert: React.FC<AlertProps> = (props) => {
  // Render the CustomAlert component using Material-UI components with the provided props
  return <MuiAlert {...props} />;
};

export default CustomAlert;
