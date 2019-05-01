import React from 'react';
import * as style from './Chat.css';



class Chat extends React.Component {

    constructor( props ) {

        super(props);

        this.state = {
            chatentries: [],
            textInput: ""
        };

        this.setTextInput = this.setTextInput.bind(this);
        this.testClick = this.testClick.bind(this);
        
    }

    testClick(e) {
        e.preventDefault();
        console.log(this.state.textInput);
    }    

    setTextInput(e) {

        this.setState( { textInput: e.target.value } );

    }

    render() {
        return (
        <div className={style.container}>
            
            
            <div className={style.logEntry}>
                Boop
            </div>
            
            <form className={style.textEntryWrapper} onSubmit={this.testClick}>
                <input onChange={this.setTextInput} type="text" maxLength="200"></input>
                <button>></button>
            </form>
            
        </div>
        );
    }

}

export default Chat;