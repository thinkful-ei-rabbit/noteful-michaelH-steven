import React from 'react';
import ReactDOM from 'react-dom';
import Bombs from './Bomb';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bombs />, div);
    ReactDOM.unmountComponentAtNode(div);
});