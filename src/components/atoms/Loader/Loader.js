import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Loader = () => {
  return (
    <Box style={{ textAlign: 'center' }}>
      <CircularProgress size="2rem"></CircularProgress>
    </Box>
  );
};

export default Loader;
