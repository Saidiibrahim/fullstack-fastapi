// src/pages/FunnyGif.tsx
import React from 'react';
import FunnyGif from '../components/FunnyGif';

const FunnyGifPage: React.FC = () => {
  const gifUrl = 'https://media.giphy.com/media/OsZ6EdH1V2Po0XUUt4/giphy.gif';

  return (
    <div>
      <FunnyGif gifUrl={gifUrl} />
    </div>
  );
};

export default FunnyGifPage;
