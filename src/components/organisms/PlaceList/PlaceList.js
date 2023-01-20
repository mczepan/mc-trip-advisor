import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid } from '@mui/material';

import PlaceDetails from 'components/molecules/PlaceDetails/PlaceDetails';
import { useStyles } from './styles';
import { setActivePlace } from 'reducers/places/placesSlice';

const PlaceList = ({ places, activePlace }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRemoveActiveRestaurant = () => dispatch(setActivePlace(null));

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      {activePlace ? (
        <Grid item xs={12} key={activePlace.name}>
          <Button onClick={handleRemoveActiveRestaurant}>
            Remove active place
          </Button>
          <PlaceDetails place={activePlace} key={activePlace.name} />
        </Grid>
      ) : (
        places?.map((place) => (
          <Grid item xs={12} key={place.name}>
            <PlaceDetails place={place} key={place.name} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default PlaceList;
