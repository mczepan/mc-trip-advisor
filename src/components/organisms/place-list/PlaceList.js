import React from 'react';
import { Grid } from '@mui/material';

import PlaceDetails from 'components/molecules/place-details/PlaceDetails';
import { useStyles } from './styles';

const PlaceList = ({ places }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      {places?.map((place) => (
        <Grid item xs={12} key={place.name}>
          <PlaceDetails place={place} key={place.name} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlaceList;
