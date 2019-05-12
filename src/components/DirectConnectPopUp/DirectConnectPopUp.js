import React, { Component } from 'react';

import *  as style from './DirectConnectPopUp.css';

import GlobalContext from '../../context/GlobalContext';

class UserEditor extends Component {

    static contextType = GlobalContext;

    constructor(props) {
        super(props);

        this.PopUpComponent = null;

        this.state = {
            showPopUp: false
        };

        this.IPAddressInput = React.createRef();

        this.onDisplayPopUp = this.onDisplayPopUp.bind(this);
        this.onConnectButton = this.onConnectButton.bind(this);
    }


    onDisplayPopUp(e) {
        e.preventDefault(); // Stop Window Reloading on Submit
        this.setState({ showPopUp: !this.state.showPopUp });

    }

    onConnectButton(e) {
        e.preventDefault(); // Stop Window Reloading on Submit
        this.context.Socket.connect(this.IPAddressInput.current.value);
    }

    render() {

        if (this.state.showPopUp) {
            this.PopUpComponent = (
                <div className={style.popupContainer}>
                    <div className={style.popupWrapper}>
                        <button className={style.popupExitButton} onClick={this.onDisplayPopUp}><i class="fas fa-times"></i></button>
                        <h2>Direct Connection</h2>
                        <form onSubmit={this.onConnectButton}>
                            <input ref={this.IPAddressInput} type="text" placeholder="IP Address e.g: 192.169.0.1"></input>
                            <button type="submit">Connect</button>
                        </form>
                    </div>
                </div>
            );
        } else {
            this.PopUpComponent = null;
        }
        

        return (
            <span>
                <button onClick={this.onDisplayPopUp} className={style.container}>
                    <i class="fas fa-coins"></i>
                </button>
                { this.PopUpComponent }
            </span>
            
        );
    }
}

export default UserEditor;
