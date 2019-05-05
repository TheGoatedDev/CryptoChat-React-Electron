import React, { Component } from 'react';
import './App.css';

import Titlebar from './components/Titlebar/Titlebar';
import TabBar from './components/TabBar/TabBar';
import Chat from './components/Chat/Chat';

import GlobalContext from './context/GlobalContext';

//TODO: Add Socket Communication

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: null
        }

        this.setGlobalState = this.setState.bind(this);
    }


    render() {
        return (
            <div className="App">
            <GlobalContext.Provider value={ {setGlobalState: this.setGlobalState, GlobalState: this.state} } >
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
            </GlobalContext.Provider>
            </div>
        );
    }
}

export default App;
