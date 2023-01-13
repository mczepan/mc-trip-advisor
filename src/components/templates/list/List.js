import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import SelectFormControl from 'components/molecules/SelectFormControl/SelectFormControl';
import PlaceList from 'components/organisms/place-list/PlaceList';

const List = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4">
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
          { value: 3, label: 'Above 3.0' },
          { value: 4, label: 'Above 4.0' },
          { value: 4.5, label: 'Above 4.5' },
        ]}
        value={rating}
        setValue={(e) => setRating(e.target.value)}
      />
      <PlaceList />
    </Box>
  );
};

export default List;
