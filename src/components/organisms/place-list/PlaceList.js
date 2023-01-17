import React from 'react';
import { Grid } from '@mui/material';

import PlaceDetails from 'components/molecules/place-details/PlaceDetails';
import { useStyles } from './styles';

const PlaceList = ({ places }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {places.data?.map((place, id) => (
        <Grid item xs={12} key={id}>
          <PlaceDetails place={place} key={id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlaceList;
