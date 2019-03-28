import * as React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { AppState } from '../state/AppState';
import { Viewport } from '../components/Viewport';
import { useObserver } from 'mobx-react-lite';

export type AppProps = {
  state: AppState;
};

/**
 * The root component of the application.
 * Provides all application state and renders current state.
 */
export const App = hot(({ state }: AppProps) =>
  useObserver(() => (
    <AppState.Context.Provider value={state}>
      <MuiThemeProvider theme={state.theme}>
        <CssBaseline />
        <Viewport />
      </MuiThemeProvider>
    </AppState.Context.Provider>
  ))
);
