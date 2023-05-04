// src/layouts/commons/LoadingSpinner.tsx

// Import required modules and interfaces from Material-UI
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

// Define an interface for the CustomLoadingSpinnerProps
interface CustomLoadingSpinnerProps {
  size?: number | string;
}

// CustomLoadingSpinner component definition
const CustomLoadingSpinner: React.FC<CustomLoadingSpinnerProps> = ({ size = 40 }) => {
  // Render the CustomLoadingSpinner component using Material-UI components
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default CustomLoadingSpinner;
