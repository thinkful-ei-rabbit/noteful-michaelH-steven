import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {HelloWorld} from './state-drills/HelloWorld.js';
import Bombs from './state-drills/Bomb';
import Gun from './state-drills/RouletteGun';

ReactDOM.render(<Gun />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));