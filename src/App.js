import React, { Component } from 'react';
import './App.css';

import Titlebar from './components/Titlebar/Titlebar';
import TabBar from './components/TabBar/TabBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titlebar/>
        <TabBar> 
          Test
        </TabBar>
      </div>
    );
  }
}

export default App;
