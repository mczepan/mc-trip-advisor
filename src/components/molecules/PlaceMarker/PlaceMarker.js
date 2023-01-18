import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Marker from 'components/atoms/Marker/Marker';

import { useStyles } from './styles';
import { useSelector } from 'react-redux';

const PlaceMarker = ({ place, markerClickHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isHovering, setIsHovering] = useState(false);

  const { activeRestaurant } = useSelector((state) => state.restaurants);

  const { name, photo, rating } = place;

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
        ) : activeRestaurant.name === name ? (
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
              markerClickHandler(place);
            }}
          />
        )}
      </Box>
    </div>
  );
};

export default PlaceMarker;
