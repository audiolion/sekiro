import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { AppState } from '../state/AppState';
import { windowSizeBehavior } from '../behaviors/windowSizeBehavior';
import { actionBehavior } from '../behaviors/actionBehavior';
import { actionNavigationBehavior } from '../behaviors/actionNavigationBehavior';
import { items } from '../assets/items';

const state = new AppState();
state.equipment.addItems(...items);
windowSizeBehavior(size => state.setViewportSize(size));
actionBehavior(state.actions);
actionNavigationBehavior(state.actions, state.nav);
render(<App state={state} />, document.getElementById('root'));
