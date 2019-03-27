import { createContext } from 'react';

export class AppState {
  static Context = createContext<AppState>(new AppState());
}
