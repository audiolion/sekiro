import { action, computed, observable } from 'mobx';
import { Item } from './Item';

export class ItemSelectStore {
  @observable available?: Item[];
  private callback?: (selected: Item) => any;

  @computed get isPicking() {
    return this.available !== undefined;
  }

  @action start(available: Item[], callback?: (selected: Item) => any) {
    this.callback = callback;
    this.available = available;
  }

  @action end(selected: Item) {
    this.available = undefined;
    if (this.callback) {
      this.callback(selected);
    }
    this.callback = undefined;
  }
}
