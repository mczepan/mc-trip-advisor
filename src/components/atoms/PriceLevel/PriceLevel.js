import React from 'react';
import { Box, Typography } from '@mui/material';

const PriceLevel = ({ priceLevel }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="subtitle1">Price</Typography>
      <Typography gutterBottom variant="subtitle1">
        {priceLevel ? priceLevel : '---'}
      </Typography>
    </Box>
  );
};

export default PriceLevel;
