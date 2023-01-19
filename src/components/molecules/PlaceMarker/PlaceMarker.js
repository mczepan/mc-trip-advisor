import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { Box, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Marker from 'components/atoms/Marker/Marker';
import { setActiveRestaurant } from 'reducers/restaurants/restaurantsSlice';

import { useStyles } from './styles';

const PlaceMarker = ({ place }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
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

  const handleRemoveActiveRestaurant = () =>
    dispatch(setActiveRestaurant(null));

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
        ) : activeRestaurant?.name === name ? (
          <LocationOnIcon
            color="primary"
            fontSize="large"
            className={classes.pointer}
            onClick={handleRemoveActiveRestaurant}
          />
        ) : (
          <LocationOnOutlinedIcon
            color="primary"
            fontSize="large"
            className={classes.pointer}
            onClick={() => {
              handleMouseOut();
            }}
          />
        )}
      </Box>
    </div>
  );
};

export default PlaceMarker;
