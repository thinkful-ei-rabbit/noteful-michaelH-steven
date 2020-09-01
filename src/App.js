import React from 'react';
import Main from './Main';
import { Route } from 'react-router-dom';
import Folders from './Folders';
import Notes from './Notes';
import STORE from './store';

class App extends React.Component() {
  state = {
    folders: STORE.folders,
    notes: STORE.folders
  }
  
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
