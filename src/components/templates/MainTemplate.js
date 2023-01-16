import React from 'react';
import { Box, Grid } from '@mui/material';

import Header from 'components/organisms/header/Header';
import List from 'components/templates/list/List';
import Map from 'components/organisms/map/Map';

import { useStyles } from './styles';

const MainTemplate = () => {
  const classes = useStyles();
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
