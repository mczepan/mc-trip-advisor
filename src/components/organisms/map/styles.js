import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';

export const useStyles = makeStyles((theme) => ({
  mapWrapper: {
    height: '100%',
    minHeight: '300px',
    width: '100%',
    textAlign: 'center',
  },
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  marginTop: '10px',
  zIndex: '1',
  background: 'white',
  color: grey[700],
  border: `0.5px solid ${theme.palette.primary.light}`,
  '&:hover': {
    backgroundColor: grey[200],
  },
  borderRadius: '20px',
}));
