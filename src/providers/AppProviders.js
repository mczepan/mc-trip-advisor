import React from 'react';
import { ThemeProvider } from '@mui/system';

import { theme } from 'assets/styles/theme';

const AppProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
