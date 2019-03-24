import React from 'react';
import * as style from './Titlebar.css';

const {remote} = window.require('electron');

class Titlebar extends React.Component {

    constructor( props ) {
        super(props);
    }

    handleMinimize() {
        remote.BrowserWindow.getFocusedWindow().minimize();
    }

    handleMaximize() {
        var window = remote.BrowserWindow.getFocusedWindow();
        if (window.isMaximized()) {
            window.unmaximize();
        } else {
            window.maximize();
        }
    }

    handleClose() {
        remote.BrowserWindow.getFocusedWindow().close();
    }

    render() {
        return (
        <div className={style.container}>
            
            
            <div className={style.title}>Crypto-Chat</div>
            
            
            
            <div className={style.contextMenu}>
    
                <button className={style.minBtn} onClick={this.handleMinimize}>
                    <i className="far fa-window-minimize"></i>
                </button>
    
                <button className={style.maxBtn} onClick={this.handleMaximize}>
                    <i className="far fa-window-maximize"></i>
                </button>
    
                <button className={style.closeBtn} onClick={this.handleClose}>
                    <i className="fas fa-times"></i>
                </button>
    
            </div>
            
        </div>
        );
    }

}

export default Titlebar;