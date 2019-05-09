import React from 'react';
import * as style from './ChatEntry.css';



class ChatEntry extends React.Component {

    constructor( props ) {

        super(props);

        this.state = {
            
        };

        
    }

    

    render() {
        return (
        <div className={style.container}>
            
            <span>{this.props.username}: </span>
            <div className={style.message}>
                {this.props.msg}
            </div>
            
        </div>
        );
    }

}

export default ChatEntry;