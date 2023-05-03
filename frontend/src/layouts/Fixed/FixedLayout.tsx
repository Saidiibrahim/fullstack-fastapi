// src/layouts/Fixed/FixedLayout.tsx
import React, { ReactNode } from 'react';
import CustomSidebar from './components/CustomSidebar';

interface FixedLayoutProps {
  children: ReactNode;
}

const FixedLayout: React.FC<FixedLayoutProps> = ({ children }) => {
  return (
    <div>
      <CustomSidebar />
      <main>{children}</main>
    </div>
  );
};

export default FixedLayout;
