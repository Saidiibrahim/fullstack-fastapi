// src/layouts/commons/Card.tsx

// Import required modules and interfaces from Material-UI
import React from 'react';
import { Card as MuiCard, CardContent, CardProps, Typography } from '@mui/material';

// Define an interface for the CustomCardProps, extending the CardProps
interface CustomCardProps extends CardProps {
  title: string;
}

// CustomCard component definition
const CustomCard: React.FC<CustomCardProps> = ({ title, children, ...props }) => {
  // Render the CustomCard component using Material-UI components
  return (
    <MuiCard {...props}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        {children}
      </CardContent>
    </MuiCard>
  );
};

export default CustomCard;
