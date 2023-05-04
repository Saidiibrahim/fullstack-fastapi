// src/layouts/commons/Button.tsx
import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

export interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  variant: 'outlined' | 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant, ...props }) => {
  const buttonStyles =
    variant === 'primary'
      ? { backgroundColor: '#3f51b5', color: 'white' }
      : variant === 'secondary'
      ? { backgroundColor: '#f50057', color: 'white' }
      : {};

  return <MuiButton style={buttonStyles} {...props} />;
};

export default CustomButton;
