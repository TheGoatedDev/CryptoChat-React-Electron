import React from 'react';
import * as style from './Chat.css';



class Chat extends React.Component {

    constructor( props ) {

        super(props);

        this.state = {
            chatentries: []
        };
        
    }

    testClick(e) {
        e.preventDefault();
        console.log("Kujo")
    }    

    render() {
        return (
        <div className={style.container}>
            
            <div className={style.logEntry}>

            </div>

            <form className={style.textEntryWrapper} onSubmit={this.testClick}>
                <input type="text" maxLength="200"></input>
                <button>></button>
            </form>
            
        </div>
        );
    }

}

export default Chat;