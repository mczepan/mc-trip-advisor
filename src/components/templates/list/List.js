import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { fetchPlacesInBoundary } from 'reducers/places/placesSlice';

import SelectFormControl from 'components/molecules/SelectFormControl/SelectFormControl';
import PlaceList from 'components/organisms/PlaceList/PlaceList';
import Loader from 'components/atoms/Loader/Loader';

const List = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const { places, isLoading, activePlace } = useSelector(
    (state) => state.places
  );
  const { bounds } = useSelector((state) => state.mapCordinates);

  useEffect(() => {
    dispatch(fetchPlacesInBoundary({ bounds, type, rating }));
  }, [dispatch, bounds, type, rating]);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ typography: { md: 'h5', xs: 'h6' } }}>
        Restaurants, Hotels & Attractions around you
      </Typography>
      <SelectFormControl
        label={'Type'}
        items={[
          { value: 'restaurants', label: 'Restaurants' },
          { value: 'hotels', label: 'Hotels' },
          { value: 'attractions', label: 'Attractions' },
        ]}
        value={type}
        setValue={(e) => setType(e.target.value)}
      />
      <SelectFormControl
        label={'Rating'}
        items={[
          { value: 0, label: 'All' },
          { value: 3, label: '> 3.0' },
          { value: 4, label: '> 4.0' },
          { value: 5, label: '= 5.0' },
        ]}
        value={rating}
        setValue={(e) => setRating(e.target.value)}
      />
      <br />

      {isLoading ? (
        <Loader />
      ) : (
        <PlaceList places={places} activePlace={activePlace} />
      )}
    </Box>
  );
};

export default List;
