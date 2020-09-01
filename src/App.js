import React from 'react';
import Main from './Main';
import { Route } from 'react-router-dom';
import Folders from './Folders';
import Notes from './Notes';
import STORE from './store';

function App() {
  // state: {
  //   folders: [],
  //   notes: []
  // };


  return (
    <main className='App'>
      {'/* content goes here */'}
      <Route exact path='/' component={Main} />'
      '/* route 2 */'
      '/* route 3 */'
    </main>
  );
};

export default App;
