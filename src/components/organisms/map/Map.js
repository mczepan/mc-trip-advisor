import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { Box } from '@mui/material';
import { setMapBounds } from 'reducers/mapCordinates/mapCordinatesSlice';
import { SearchButton, useStyles } from './styles';
import PlaceMarker from 'components/molecules/PlaceMarker/PlaceMarker';
import { setActivePlace } from 'reducers/places/placesSlice';

const placesLibrary = ['places'];

const Map = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchButtonVisible, setSearchButtonVisible] = useState(false);

  const [actualBounds, setActualBounds] = useState({});

  const { defaultCordinates, cordinates } = useSelector(
    (state) => state.mapCordinates || null
  );

  const { places, isLoading, activePlace } = useSelector(
    (state) => state.places
  );

  const handleMarkerClick = (activeMarker) => {
    if (activeMarker === activePlace?.name) {
      dispatch(setActivePlace(null));
    } else {
      console.log(activeMarker);
      dispatch(setActivePlace(activeMarker));
    }
  };

  const handleSearchButton = () => {
    dispatch(setMapBounds(actualBounds));
    setSearchButtonVisible(false);
    dispatch(setActivePlace(null));
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
            libraries: ['places'],
          }}
          defaultCenter={defaultCordinates}
          center={cordinates}
          defaultZoom={14}
          options={''}
          onChange={(e) => {
            setSearchButtonVisible(true);
            setActualBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={handleMarkerClick}
        >
          {places?.map((restaurant) => (
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
