import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const outerTheme = createMuiTheme({
  palette: {
      primary : {
          light: green['A100'],
          main: green['A100'],
          dark: green[100],
      },
      secondary:red,
  },
});

export default outerTheme;

