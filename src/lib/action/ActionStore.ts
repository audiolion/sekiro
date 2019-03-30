import { observable, action, computed } from 'mobx';
import { Action } from './Action';
import { InputId } from 'responsive-gamepad';

export class ActionStore {
  list = observable.array<Action>([], { deep: false });
  @observable highlighted?: Action;

  @computed get visible() {
    return this.list.filter(action => !action.hidden);
  }

  @action setHighlighted(action: Action) {
    this.highlighted = action;
  }

  @action removeHighlighted() {
    this.highlighted = undefined;
  }

  @action mount(action: Action) {
    this.list.push(action);
    return () => this.unmount(action);
  }

  @action unmount(action: Action) {
    const index = this.list.indexOf(action);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  perform(inputs: InputId[]) {
    const actions = this.list.slice();
    for (const action of actions) {
      if (inputs.includes(action.input) && action.callback) {
        action.callback();
      }
    }
  }
}
