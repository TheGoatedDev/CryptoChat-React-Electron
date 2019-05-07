import React, { Component } from 'react';
import './App.css';

import Titlebar from './components/Titlebar/Titlebar';
import TabBar from './components/TabBar/TabBar';
import Chat from './components/Chat/Chat';

import GlobalContext from './context/GlobalContext';

import Socket from './socket/socket';

//TODO: Add Socket Communication

class App extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            user: null,
            Socket: new Socket(this.setTitleInfo.bind(this)),

            titleInfo: "Bippity Boopity Boo"
        };

        this.setGlobalState = this.setState.bind(this);
        

        this.callbacks = {
            setTitleInfo: this.setTitleInfo.bind(this)
        };


    }


    setTitleInfo( text ) {
        this.setState({titleInfo: text});
    }

    render() {
        return (
            <div className="App">
            <GlobalContext.Provider value={ {Socket: this.state.Socket, callbacks: this.callbacks} } >
                    
                    <Titlebar titleInfo={this.state.titleInfo} />

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
