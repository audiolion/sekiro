import { createContext } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { observable } from 'mobx';

export class AppState {
  @observable theme = createMuiTheme({
    typography: {
      useNextVariants: true
    }
  });

  static Context = createContext(new AppState());
}
