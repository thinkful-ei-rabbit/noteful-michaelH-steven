import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {HelloWorld} from './state-drills/HelloWorld.js';
import Bombs from './state-drills/Bomb';

ReactDOM.render(<Bombs />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));