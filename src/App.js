import React, { Component } from 'react';
import { MemoryRouter, Route } from "react-router-dom";
import './App.css';

import Titlebar from './components/Titlebar/Titlebar';
import TabBar from './components/TabBar/TabBar';

import Chat from './components/Chat/Chat';
import Profile from './components/Profile/Profile';

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
                changeUsername: this.changeUsername.bind(this),
            }
        }

        this.state = {
            Socket: new Socket(this.ContextInfo),

            titleInfo: "Bippity Boopity Boo",

            chatEntries: []
        };
        
        this.ContextInfo.Socket = this.state.Socket;
        


    }


    changeUsername( username ) {
        localStorage.setItem('username', username);       
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
            <MemoryRouter>
                <div className="App">
                <GlobalContext.Provider value={ this.ContextInfo } >
                        
                        <Titlebar TitleInfo={this.state.titleInfo}/>

                        

                        <div className="mainArea">

                            

                            <div className="chatArea">

                                

                                <Route path="/" exact render={() => <Chat chatEntries={this.state.chatEntries} />} />
                                <Route path="/profile" render={() => <Profile></Profile>}/>
                            </div>


                        </div>

                        <TabBar >
                        </TabBar>
                </GlobalContext.Provider>
                </div>
            </MemoryRouter>
        );
    }
}

export default App;
