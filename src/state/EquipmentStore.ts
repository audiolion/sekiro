import { Item } from './Item';
import { action, computed, observable } from 'mobx';
import { ItemSlots } from './ItemSlots';

export class EquipmentStore {
  toolSlots = new ItemSlots(3);
  artSlots = new ItemSlots(1);
  ninjutsuSlots = new ItemSlots(1);
  itemSlots = new ItemSlots(5);

  @observable items: Item[] = [];

  @computed get tools() {
    return this.items.filter(item => item.type === 'tool');
  }

  @computed get arts() {
    return this.items.filter(item => item.type === 'art');
  }

  @computed get ninjutsu() {
    return this.items.filter(item => item.type === 'ninjutsu');
  }

  @computed get consumable() {
    return this.items.filter(item => item.type === 'consumable');
  }

  @action addItems(...items: Item[]) {
    this.items.push(...items);
  }
}
