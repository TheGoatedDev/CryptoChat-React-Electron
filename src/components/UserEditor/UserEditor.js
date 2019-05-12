import React, { Component } from 'react';

import *  as style from './UserEditor.css';

import GlobalContext from '../../context/GlobalContext';

class UserEditor extends Component {

    static contextType = GlobalContext;

    constructor(props) {
        super(props);

        

        this.state = {
            
        };
        
        this.usernameInput = React.createRef();

        this.onChangeUsername = this.onChangeUsername.bind(this);

    }

    componentDidMount() {
        //this.context.callbacks.setTitleInfo("Profile");
    }

    onChangeUsername(e) {
        e.preventDefault(); // Stop Window Reloading on Submit
        this.context.callbacks.changeUsername(this.usernameInput.current.value);
        this.context.callbacks.setTitleInfo(`Username Updated to ${localStorage.getItem('username')}`);
    }

    render() {
        return (
            
            <div className={style.container}>
                <form onSubmit={this.onChangeUsername}>
                    <input ref={this.usernameInput} type="text" maxLength="16" minLength="3" placeholder="Username"></input>
                    <button type="submit">Change</button>
                </form>
            </div>
            
        );
    }
}

export default UserEditor;
