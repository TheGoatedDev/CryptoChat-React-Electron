import React, { Component } from 'react';
import './App.css';

import Titlebar from './components/Titlebar/Titlebar';
import TabBar from './components/TabBar/TabBar';
import Chat from './components/Chat/Chat';

import GlobalContext from './context/GlobalContext';

import Socket from './socket/socket';

class App extends Component {

    constructor(props) {
        super(props);

        this.ContextInfo = {

            Socket: null, // Root State Socket Class

            callbacks: {
                setTitleInfo: this.setTitleInfo.bind(this), // Binds setTitleInfo to the Context Info
                addChatEntry: this.addChatEntry.bind(this), 
            }
        }

        this.state = {
            user: null,
            Socket: new Socket(this.ContextInfo),

            titleInfo: "Bippity Boopity Boo",

            chatEntries: []
        };
        
        this.ContextInfo.Socket = this.state.Socket;
        


    }

    addChatEntry( chatEntry ) {
        var newChatEntries = this.state.chatEntries;
        newChatEntries.push(chatEntry);
        this.setState({chatEntries: newChatEntries});
    }

    setTitleInfo( text ) {
        this.setState({titleInfo: text});
    }

    render() {
        return (
            <div className="App">
            <GlobalContext.Provider value={ this.ContextInfo } >
                    
                    <Titlebar TitleInfo={this.state.titleInfo}/>

                    <div className="mainArea">

                        <div className="chatArea">
                            <Chat chatEntries={this.state.chatEntries}/>
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
