// src/layouts/commons/Input.tsx

// Import required modules and interfaces from Material-UI
import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

// CustomInput component definition
const CustomInput: React.FC<TextFieldProps> = (props) => {
  // Render the CustomInput component using Material-UI TextField with fullWidth enabled
  return <TextField fullWidth {...props} />;
};

export default CustomInput;
