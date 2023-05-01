// src/svg/illustrations/Rocket.tsx
import React from 'react';

interface RocketProps {
  width?: number;
  height?: number;
}

const Rocket: React.FC<RocketProps> = ({ width = 50, height = 50 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 3.623 1.594 6.884 4.125 9.141 1.168 1.028 2.484 1.889 3.875 2.531V24h8v-2h2V12.002C20.019 8.758 16.675 6 12 6 12 6 12 0 12 0z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

export default Rocket;
