import * as React from 'react';
import { ActionContext } from './ActionContext';
import { Action } from './Action';

export const useAction = (action: Action) => {
  const store = React.useContext(ActionContext);
  React.useEffect(() => store.mount(action), Object.values(action));
};
