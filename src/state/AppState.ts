import { createContext } from 'react';
import { observable } from 'mobx';
import { createSekiroTheme } from '../assets/theme';

export class AppState {
  @observable theme = createSekiroTheme();

  static Context = createContext(new AppState());
}
