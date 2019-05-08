import React from 'react';
import * as style from './Chat.css';
import GlobalContext from '../../context/GlobalContext';

import ChatEntry from '../ChatEntry/ChatEntry';

class Chat extends React.Component {

    static contextType = GlobalContext;

    constructor( props ) {

        super(props);

        this.state = {
            chatEntriesRender: null, // JSX Object with all the Current Chat Messages
            chatEntries: [], // Array of all the Chat Messages to be make in to JSX Objects
            textInput: "", // Current string in the Chat Entry Field
        };

        this.TextInput = React.createRef();

        this.setTextInput = this.setTextInput.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
        
        this.count = 0;

        setInterval(() => {
            this.chatEntriesRenderData = (
                (this.props.chatEntries).map( chatEntry=> {
                    this.count++;
                    return <ChatEntry key={this.count} username={chatEntry.username} msg={chatEntry.msg}/>
                })
            )

            this.setState({chatEntriesRender: this.chatEntriesRenderData}); 
        },0);

    }

    componentDidMount() {
        this.context.Socket.connect("localhost");
    }

    onSendMessage(e) {
        e.preventDefault(); // Stop Window Reloading on Submit
        this.TextInput.current.value = ""; // Clear the Text Input
        this.context.Socket.sendMessage(this.state.textInput); // Send the Message
        this.setState({textInput: ""}); // Clears the Text input State
    }    

    setTextInput(e) {

        this.setState( { textInput: e.target.value } );
        //this.context.callbacks.setTitleInfo(e.target.value);

    }

    render() {
        return (
        <div className={style.container}>
            
            
            <div className={style.logEntry}>
                {this.state.chatEntriesRender}
            </div>
            
            <form className={style.textEntryWrapper} onSubmit={this.onSendMessage}>
                <input ref={this.TextInput} onChange={this.setTextInput} type="text" maxLength="200"></input>
                <button type="submit">></button>
            </form>
            
        </div>
        );
    }

}

export default Chat;