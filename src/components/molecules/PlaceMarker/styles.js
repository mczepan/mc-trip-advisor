import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  markerWrapper: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  },

  pointer: {
    cursor: 'pointer',
  },
}));
