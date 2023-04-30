// src/FunnyGif.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const FunnyGif = () => {
  const giphyUrl = 'https://media.giphy.com/media/9k28UPUVIrvWnhHkP1/giphy.gif';

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Funny GIF
      </Typography>
      <Box>
        <img src={giphyUrl} alt="Funny GIF from GIPHY" />
      </Box>
    </Container>
  );
};

export default FunnyGif;
