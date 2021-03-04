import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CustomRouter from '../shared/custom-router';
import { getTheme, urlPlatform} from '../shared/ui/helpers';

const data = urlPlatform ? urlPlatform : '';
localStorage.setItem('theme', data );

export default function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <CustomRouter/>
    </ThemeProvider>
  );
}
