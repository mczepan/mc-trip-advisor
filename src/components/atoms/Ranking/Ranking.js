import React from 'react';
import { Box, Typography } from '@mui/material';

const Ranking = ({ ranking }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="subtitle1">Ranking</Typography>
      <Typography gutterBottom variant="subtitle1">
        {ranking ? ranking : '---'}
      </Typography>
    </Box>
  );
};

export default Ranking;
