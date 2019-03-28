import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { AppState } from '../state/AppState';
import { windowSizeBehavior } from '../behaviors/windowSizeBehavior';

const state = new AppState();
windowSizeBehavior(size => state.setViewportSize(size));
render(<App state={state} />, document.getElementById('root'));
