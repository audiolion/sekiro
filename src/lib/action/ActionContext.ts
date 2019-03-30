import { createContext } from 'react';
import { ActionStore } from './ActionStore';

export const ActionContext = createContext(new ActionStore());
