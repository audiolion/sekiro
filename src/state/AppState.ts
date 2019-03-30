import { createContext } from 'react';
import { action, observable } from 'mobx';
import { createSekiroTheme } from '../assets/theme';
import { Size } from './Size';
import { StatsStore } from './StatsStore';
import { Spatial } from '../lib/spatial/Spatial';
import { ActionStore } from '../lib/action/ActionStore';
import { EquipmentStore } from './EquipmentStore';

export class AppState {
  @observable theme = createSekiroTheme();
  @observable viewportSize: Size = { width: 0, height: 0 };
  stats = new StatsStore();
  actions = new ActionStore();
  nav = new Spatial();
  equipment = new EquipmentStore();

  static Context = createContext(new AppState());

  @action setViewportSize(size: Size) {
    this.viewportSize = size;
  }
}
