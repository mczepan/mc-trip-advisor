import React from 'react';
import { Grid } from '@mui/material';

import PlaceDetails from 'components/molecules/place-details/PlaceDetails';
import { useStyles } from './styles';

const PlaceList = () => {
  const classes = useStyles();
  const places = [
    { name: '1 test' },
    { name: '2 test' },
    { name: '3 test' },
    { name: '11 test' },
    { name: '22 test' },
    { name: '33 test' },
    { name: '111 test' },
    { name: '222 test' },
    { name: '333 test' },
    { name: '2224 test' },
    { name: '3334 test' },
  ];
  return (
    <Grid container className={classes.gridContainer}>
      {places.map((place) => (
        <Grid item xs={12} key={place.name}>
          <PlaceDetails place={place} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlaceList;
