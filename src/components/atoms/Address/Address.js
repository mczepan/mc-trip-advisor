import React from 'react';
import { Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocationWrapper } from './styles';

const Address = ({ address }) => {
  return (
    <Box sx={{ mt: 0.5 }}>
      <LocationWrapper gutterBottom variant="subtitle2" color="textSecondary">
        <LocationOnIcon /> {address}
      </LocationWrapper>
    </Box>
  );
};

export default Address;
