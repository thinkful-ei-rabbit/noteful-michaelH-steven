import React from 'react';
import Main from './Main';
import { Route } from 'react-router-dom';
import Folders from './Folders';
import Notes from './Notes';
import STORE from './store';

class App extends React.Component {
  state = {
    folders: STORE.folders,
    notes: STORE.notes
  }

  


  render(){
    return (
      <main className='App'>
      
        <Route exact path='/' render={(routeProps) => {return <Main notes={this.state.notes}{...routeProps}folders={this.state.folders}/>}}/>
        <Route exact path='/Folders/:folderId' render={(routeProps) => {return <Folders notes={this.state.notes}{...routeProps}folders={this.state.folders}/>}}/>
        <Route exact path='/Notes/:noteId' render={(routeProps) => {return <Notes notes={this.state.notes}{...routeProps}folders={this.state.folders}/>}}/>
        
      </main>
   );
  };
};


export default App;



