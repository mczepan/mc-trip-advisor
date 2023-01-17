import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/material';
import { PhoneWrapper } from './styles';

const Phone = ({ phone }) => {
  return (
    <Box sx={{ mt: 0.5 }}>
      <PhoneWrapper gutterBottom variant="subtitle2" color="textSecondary">
        <PhoneIcon /> {phone}
      </PhoneWrapper>
    </Box>
  );
};

export default Phone;
