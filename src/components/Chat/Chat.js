import React from 'react';
import { Link } from 'react-router-dom';
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

        this.TextInput = React.createRef(); // Reference for the Chat Input Field
        this.logEntry = React.createRef(); // Reference for the Log Entry Div

        // Binding Functions
        this.setTextInput = this.setTextInput.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
        
        this.count = 0;


    }
    
    // Runs after the Render has re-ran
    componentDidUpdate() {
        this.logEntry.current.scrollTop = this.logEntry.current.scrollHeight;
    }

    // Run on Update of Props
    componentWillReceiveProps() {

        
        this.chatEntriesRenderData = (
            (this.props.chatEntries).map( chatEntry=> {
                this.count++;
                return <ChatEntry key={this.count} username={chatEntry.username} msg={chatEntry.msg}/>
            })
        )

        this.setState({chatEntriesRender: this.chatEntriesRenderData}); 
        //this.logEntry.current.scrollTop = this.logEntry.current.scrollHeight;

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
            
            
            <div ref={this.logEntry} className={style.logEntry}>
                {this.state.chatEntriesRender}
            </div>
            
            <div className={style.interactionZone}>

                <button className={style.settingsButton}><i className="fas fa-cog"></i></button>

                <Link to="/profile" className={style.profileButton}><i className="fas fa-user"></i></Link>

                <form className={style.textEntryWrapper} onSubmit={this.onSendMessage}>
                    <input ref={this.TextInput} onChange={this.setTextInput} type="text" maxLength="200"></input>
                    <button type="submit">></button>
                </form>

            </div>

            
            
        </div>
        );
    }

}

export default Chat;