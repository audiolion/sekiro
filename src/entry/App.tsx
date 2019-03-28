import * as React from 'react';
import { Observer } from 'mobx-react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { AppState } from '../state/AppState';
import { Sekiro } from '../components/Sekiro';

export type AppProps = {
  state: AppState;
};

/**
 * The root component of the application.
 * Provides all application state and renders current state.
 */
export const App = hot(({ state }: AppProps) => (
  <Observer>
    {() => (
      <AppState.Context.Provider value={state}>
        <MuiThemeProvider theme={state.theme}>
          <CssBaseline />
          <Sekiro />
        </MuiThemeProvider>
      </AppState.Context.Provider>
    )}
  </Observer>
));
