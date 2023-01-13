import { InputBase } from '@mui/material';
import SearchIconButton from 'components/atoms/SearchIconButton/SearchIconButton';
import React from 'react';
import { CustomPaper } from './styles';

const SearchInput = () => {
  return (
    <CustomPaper component="form">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <SearchIconButton />
    </CustomPaper>
  );
};

export default SearchInput;
