// src/layouts/commons/Pagination.tsx

// Import required modules and interfaces from Material-UI
import React from 'react';
import { Pagination as MuiPagination, PaginationProps, Stack } from '@mui/material';

// CustomPagination component definition
const CustomPagination: React.FC<PaginationProps> = (props) => {
  // Render the CustomPagination component using Material-UI components with predefined spacing
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <MuiPagination {...props} />
    </Stack>
  );
};

export default CustomPagination;
