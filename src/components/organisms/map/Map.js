import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  // const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const coordinates = { lat: 53.42, lng: 14.55 };

  return (
    <div
      style={{
        height: '100%',
        minHeight: '300px',
        width: '100%',
        border: '1px solid red',
      }}
    >
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        defaultZoom={14}
      ></GoogleMapReact> */}
    </div>
  );
};

export default Map;
