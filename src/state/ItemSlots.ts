import { action, observable } from 'mobx';
import { Item } from './Item';

export class ItemSlots {
  @observable list: Array<Item | undefined>;

  constructor(public capacity: number) {
    this.list = new Array<Item>(capacity);
  }

  @action store(item: Item, index: number) {
    if (index < 0 || index >= this.capacity) {
      throw new Error('Index must be within slot capacity');
    }
    this.list[index] = item;
  }

  @action remove(index: number) {
    if (index < 0 || index >= this.capacity) {
      throw new Error('Index must be within slot capacity');
    }
    this.list[index] = undefined;
  }
}
