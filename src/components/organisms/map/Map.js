import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import GoogleMapReact from 'google-map-react';
import {
  setMapBounds,
  setMapCordinates,
} from 'reducers/mapCordinates/mapCordinatesSlice';
import { useDispatch, useSelector } from 'react-redux';

const Map = () => {
  // const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { cordinates } = useSelector((state) => state.mapCordinates);

  return (
    <div
      style={{
        height: '100%',
        minHeight: '300px',
        width: '100%',
        border: '1px solid red',
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={cordinates}
        defaultZoom={14}
        options={''}
        onChange={(e) => {
          dispatch(setMapCordinates({ lat: e.center.lat, lng: e.center.lng }));
          dispatch(
            setMapBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          );
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
