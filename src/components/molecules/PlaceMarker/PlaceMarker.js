import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Marker from 'components/atoms/Marker/Marker';

import { useStyles } from './styles';

const PlaceMarker = ({
  place: { name, photo, rating },
  markerClickHandler,
  activeMarker,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      {isHovering && <Marker name={name} photo={photo} rating={rating} />}
      <Box
        className={classes.markerWrapper}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {isMobile ? (
          <LocationOnOutlinedIcon color="primary" fontSize="large" />
        ) : activeMarker === name ? (
          <LocationOnIcon
            color="primary"
            fontSize="large"
            className={classes.pointer}
          />
        ) : (
          <LocationOnOutlinedIcon
            color="primary"
            fontSize="large"
            className={classes.pointer}
            onClick={() => {
              handleMouseOut();
              markerClickHandler(name);
            }}
          />
        )}
      </Box>
    </div>
  );
};

export default PlaceMarker;
