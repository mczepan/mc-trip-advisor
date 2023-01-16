import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/system';

import { theme } from 'assets/styles/theme';
import { store } from 'store';

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default AppProvider;
