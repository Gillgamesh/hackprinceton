import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';
import deepPurple from '@material-ui/core/colors/deepPurple';
import grey from '@material-ui/core/colors/grey';

const outerTheme = createMuiTheme({
  palette: {
      primary : {
          light: '#000000',
          main: '#000000',
          dark: '#000000',
      },
      secondary: deepPurple,
  },
});

export default outerTheme;

