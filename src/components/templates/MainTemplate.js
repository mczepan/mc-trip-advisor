import React from 'react';
import { Grid } from '@mui/material';

import Header from 'components/organisms/header/Header';
import List from 'components/organisms/list/List';
import Map from 'components/organisms/map/Map';

import { useStyles } from './styles';

const MainTemplate = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default MainTemplate;
