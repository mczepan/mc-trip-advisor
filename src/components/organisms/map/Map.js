import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { Box, Button } from '@mui/material';
import {
  setMapBounds,
  setMapCordinates,
} from 'reducers/mapCordinates/mapCordinatesSlice';
import { ColorButton, SearchButton, useStyles } from './styles';
import PlaceMarker from 'components/molecules/PlaceMarker/PlaceMarker';
import { setActiveRestaurant } from 'reducers/restaurants/restaurantsSlice';

const Map = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchButtonVisible, setSearchButtonVisible] = useState(false);

  const [actualCordinates, setActualCordinates] = useState({});
  const [actualBounds, setActualBounds] = useState({});

  const { defaultCordinates, cordinates } = useSelector(
    (state) => state.mapCordinates
  );

  const { restaurants, loading } = useSelector((state) => state.restaurants);

  const handleMarkerClick = (activeMarker) => {
    dispatch(setActiveRestaurant(activeMarker));
  };

  const handleSearchButton = () => {
    dispatch(setMapCordinates(actualCordinates));
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

      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        }}
        defaultCenter={defaultCordinates}
        center={cordinates}
        defaultZoom={14}
        options={''}
        onChange={(e) => {
          setSearchButtonVisible(true);
          setActualCordinates({ lat: e.center.lat, lng: e.center.lng });
          setActualBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {restaurants?.map((restaurant) => (
          <PlaceMarker
            lat={Number(restaurant.latitude)}
            lng={Number(restaurant.longitude)}
            place={restaurant}
            key={restaurant.name}
            markerClickHandler={handleMarkerClick}
          />
        ))}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
