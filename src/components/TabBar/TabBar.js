import React from 'react';
import * as style from './TabBar.css';

import TabBarItem from '../TabBarItem/TabBarItem';
import TabBarAddItem from '../TabBarAddItem/TabBarAddItem';

class TabBar extends React.Component {

    constructor( props ) {
        super(props);

        this.state = {
            servers: [], // Stores the server infomation
            serverRender: null // Hold Real Render for Tab Bar
        };

        //this.serverListRender = null; //Stores Render for Server List for Setting to State


        this.testButton = this.testButton.bind(this);
    }

    addServer( ipAddress ) {

    }


    // Test the Appending Data on Tab Bar
    testButton(e) {
        e.preventDefault();


        this.state.servers.push("BITCH");
        
        // TEMP: using to mitigate Unique Key Warning
        var count = 0;
        // Adds Server to the Render Data
        this.serverListRenderData = (
            (this.state.servers).map( server=> {
                count++;
                return <TabBarItem key={count} name={server} />
            })
        )

        // Sets Render Data to serverRender State
        this.setState({serverRender: this.serverListRenderData}); 

        this.visitLink = this.visitLink.bind(this);
        //console.log(this.serverListRender);
    }

    visitLink(e) {
        e.preventDefault();
        require('open')(e.target.href);
    }

    render() {
        return (
        <div className={style.container}>
            <div className={style.wrapper}>

                <TabBarAddItem clicked={this.testButton}>
                </TabBarAddItem>

                {this.state.serverRender}

                <div className={style.shareBox}>
                    <a href="https://trello.com/b/EAICgB2X/crypto-chat"><i className="fab fa-trello"></i></a>
                    <a href="https://github.com/Royal-Code/CryptoChat-React-Electron"><i className="fab fa-github"></i></a>
                    <br/>
                    View
                </div>

            </div>
        </div>
        );
    }

}

export default TabBar;