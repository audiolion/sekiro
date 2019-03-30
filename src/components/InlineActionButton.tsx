import * as React from 'react';
import { Action } from '../lib/action/Action';
import { ActionButton } from './ActionButton';
import { useAction } from '../lib/action/useAction';

export const InlineActionButton = (action: Action) => {
  useAction({ ...action, hidden: true });
  return <ActionButton {...action} />;
};
