import React from 'react';
import { Box, Typography, Rating } from '@mui/material';

const CustomRating = ({ rating, numReviews }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Rating value={Number(rating)} readOnly />
      <Typography gutterBottom variant="subtitle1">
        {`out of ${numReviews}`}
      </Typography>
    </Box>
  );
};

export default CustomRating;
