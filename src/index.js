import React from 'react';
import ReactDOM from 'react-dom';

import CounterApp from './components/01-useState/CounterApp';
import HooksApp from './HooksApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

const root = document.getElementById('root');

ReactDOM.render(<CounterWithCustomHook />, root);
