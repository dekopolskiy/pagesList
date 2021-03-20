import React from 'react';
import './App.css';
import Paginator from './Paginator/Paginator';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Paginator allUsers={515} usersOnPage={10}/>
      </div>
    );
  }
}

export default App;
