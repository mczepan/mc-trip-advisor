import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { Box } from '@mui/material';
import { setMapBounds } from 'reducers/mapCordinates/mapCordinatesSlice';
import { SearchButton, useStyles } from './styles';
import PlaceMarker from 'components/molecules/PlaceMarker/PlaceMarker';
import { setActiveRestaurant } from 'reducers/restaurants/restaurantsSlice';

const Map = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchButtonVisible, setSearchButtonVisible] = useState(false);

  const [actualBounds, setActualBounds] = useState({});

  const { defaultCordinates } = useSelector(
    (state) => state.mapCordinates || null
  );

  const { restaurants, isLoading, activeRestaurant } = useSelector(
    (state) => state.restaurants
  );

  const handleMarkerClick = (activeMarker) => {
    if (activeMarker === activeRestaurant?.name) {
      dispatch(setActiveRestaurant(null));
    } else {
      dispatch(setActiveRestaurant(activeMarker));
    }
  };

  const handleSearchButton = () => {
    dispatch(setMapBounds(actualBounds));
    setSearchButtonVisible(false);
    dispatch(setActiveRestaurant(null));
  };

  return (
    <Box className={classes.mapWrapper}>
      {searchButtonVisible ? (
        <SearchButton
          variant="contained"
          size="small"
          onClick={handleSearchButton}
        >
          Szukaj
        </SearchButton>
      ) : null}
      {defaultCordinates ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
          }}
          defaultCenter={defaultCordinates}
          defaultZoom={14}
          options={''}
          onChange={(e) => {
            setSearchButtonVisible(true);
            setActualBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={handleMarkerClick}
        >
          {restaurants?.map((restaurant) => (
            <PlaceMarker
              lat={Number(restaurant.latitude)}
              lng={Number(restaurant.longitude)}
              place={restaurant}
              key={restaurant.name}
            />
          ))}
        </GoogleMapReact>
      ) : null}
    </Box>
  );
};

export default Map;
