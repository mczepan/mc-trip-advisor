import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import {
  setMapBounds,
  setMapCordinates,
} from 'reducers/mapCordinates/mapCordinatesSlice';
import { useStyles } from './styles';

const Map = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { defaultCordinates, cordinates } = useSelector(
    (state) => state.mapCordinates
  );

  return (
    <Box className={classes.mapWrapper}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultCordinates}
        center={cordinates}
        defaultZoom={14}
        options={''}
        onChange={(e) => {
          dispatch(setMapCordinates({ lat: e.center.lat, lng: e.center.lng }));
          dispatch(
            setMapBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          );
        }}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
