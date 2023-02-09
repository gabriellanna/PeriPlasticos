import React from 'react';
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <RoutesApp />
      <GlobalStyle />
    </>
  )
}

export default App;
