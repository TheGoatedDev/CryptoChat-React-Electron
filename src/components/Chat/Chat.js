import React from 'react';
import * as style from './Chat.css';
import GlobalContext from '../../context/GlobalContext';

import ChatEntry from '../ChatEntry/ChatEntry';

class Chat extends React.Component {

    static contextType = GlobalContext;

    constructor( props ) {

        super(props);

        this.state = {
            chatEntriesRender: null,
            chatEntries: [],
            textInput: ""
        };

        

        this.setTextInput = this.setTextInput.bind(this);
        this.testClick = this.testClick.bind(this);
        
    }

    testClick(e) {
        e.preventDefault();

        //Appending Chat Entry with text
        var newState = this.state.chatEntries;
        newState.push(this.state.textInput);
        this.setState({ chatEntries: newState})
    

        var count = 0;

        this.chatEntriesRenderData = (
            (this.state.chatEntries).map( message=> {
                count++;
                return <ChatEntry key={count} msg={message}/>
            })
        )

        // Sets Render Data to serverRender State
        this.setState({chatEntriesRender: this.chatEntriesRenderData}); 
    }    

    setTextInput(e) {

        this.setState( { textInput: e.target.value } );

    }

    render() {
        return (
        <div className={style.container}>
            
            
            <div className={style.logEntry}>
                {this.state.chatEntriesRender}
            </div>
            
            <form className={style.textEntryWrapper} onSubmit={this.testClick}>
                <input onChange={this.setTextInput} type="text" maxLength="200"></input>
                <button type="submit">></button>
            </form>
            
        </div>
        );
    }

}

export default Chat;