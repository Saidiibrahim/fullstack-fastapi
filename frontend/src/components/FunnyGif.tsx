// src/components/FunnyGif.tsx
import React from 'react';

interface FunnyGifProps {
  gifUrl: string;
}

const FunnyGif: React.FC<FunnyGifProps> = ({ gifUrl }) => {
  return (
    <div>
      <img src={gifUrl} alt="Funny Gif" />
    </div>
  );
};

export default FunnyGif;
