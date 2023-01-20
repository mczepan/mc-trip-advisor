import React, { useState } from 'react';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';
import { useTheme } from '@emotion/react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from '@mui/material';

import { useStyles } from './styles';
import SearchInput from 'components/molecules/SearchInput/SearchInput';
import { setMapCordinates } from 'reducers/mapCordinates/mapCordinatesSlice';
import { useDispatch } from 'react-redux';
const placesLibrary = ['places'];

const Header = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();

  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: placesLibrary,
  });

  const [autoComplete, setAutoComplete] = useState(null);

  const handleOnLoad = (autoComplete) => setAutoComplete(autoComplete);

  const handlePlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    dispatch(setMapCordinates({ lat, lng }));
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor by MC
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          sx={{ width: onlySmallScreen ? '100%' : 'auto' }}
        >
          <Typography variant="h6" className={classes.innerTitle}>
            Explore new places
          </Typography>

          {isLoaded && (
            <Autocomplete
              onLoad={handleOnLoad}
              onPlaceChanged={handlePlaceChanged}
            >
              <SearchInput />
            </Autocomplete>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
