import React from 'react';

import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchIconButton = () => {
  return (
    <IconButton type="button" aria-label="search">
      <SearchIcon />
    </IconButton>
  );
};

export default SearchIconButton;
