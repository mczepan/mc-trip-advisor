import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { useTheme } from '@emotion/react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from '@mui/material';

import { useStyles } from './styles';
import SearchInput from 'components/molecules/SearchInput/SearchInput';

const Header = () => {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor by MC
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          sx={{ width: onlySmallScreen ? '100%' : 'auto' }}
        >
          <Typography variant="h6" className={classes.innerTitle}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <SearchInput />
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
