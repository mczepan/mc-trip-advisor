import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '20px',
    left: '-20px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '120px',
    zIndex: 2,
  },
}));
