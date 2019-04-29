import React, { Component } from 'react';
import './App.css';

import Titlebar from './components/Titlebar/Titlebar';
import TabBar from './components/TabBar/TabBar';
import Chat from './components/Chat/Chat';


//TODO: Add Socket Communication

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: null
        }
    }

    componentDidMount() {

    }

    render() {
        return (

          <div className="App">
                <Titlebar/>

                <div className="mainArea">

                    <div className="chatArea">
                        <Chat/>
                    </div>

                    <div className="userArea">

                    </div>

                </div>

                <TabBar >
                </TabBar>
          </div>
        );
    }
}

export default App;
