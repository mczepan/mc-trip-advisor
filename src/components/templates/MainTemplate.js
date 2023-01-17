import React from 'react';
import { Box, Grid } from '@mui/material';

import Header from 'components/organisms/header/Header';
import List from 'components/templates/list/List';
import Map from 'components/organisms/map/Map';

import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setMapCordinates } from 'reducers/mapCordinates/mapCordinatesSlice';

const MainTemplate = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          dispatch(setMapCordinates({ lat: latitude, lng: longitude }));
        }
      );
    })();
  }, [dispatch]);
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header />
      <Grid
        className={classes.gridContainer}
        container
        flex={1}
        // overflow="hidden"
      >
        <Grid item xs={12} md={4} p={2} className={classes.gridItem}>
          <List />
        </Grid>
        <Grid item xs={12} md={8} p={2}>
          <Map />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainTemplate;
