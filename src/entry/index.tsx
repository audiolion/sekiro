import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { AppState } from '../state/AppState';
import { windowSizeBehavior } from '../behaviors/windowSizeBehavior';
import { controlBehavior } from '../behaviors/controlBehavior';

const state = new AppState();
windowSizeBehavior(size => state.setViewportSize(size));
controlBehavior(state.nav);
render(<App state={state} />, document.getElementById('root'));
