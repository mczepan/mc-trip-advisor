import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDefaultMapCordinates } from 'reducers/mapCordinates/mapCordinatesSlice';

export const usePosition = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          dispatch(setDefaultMapCordinates({ lat: latitude, lng: longitude }));
        }
      );
    })();
  }, [dispatch]);
};
