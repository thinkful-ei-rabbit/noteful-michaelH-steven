import React from 'react';
import ReactDOM from 'react-dom';
import Gun from './RouletteGun';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Gun />, div);
    ReactDOM.unmountComponentAtNode(div);
});