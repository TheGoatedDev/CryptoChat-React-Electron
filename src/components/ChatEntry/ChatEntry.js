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
            
            
            <span>Royal: </span>
            {this.props.msg}
            
        </div>
        );
    }

}

export default ChatEntry;