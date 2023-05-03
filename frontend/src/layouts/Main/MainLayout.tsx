// src/layouts/Main/MainLayout.tsx
import React, { ReactNode } from 'react';
import CustomHeader from './components/CustomHeader';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <CustomHeader />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
