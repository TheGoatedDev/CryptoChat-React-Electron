import React, { Component } from 'react';
import './App.css';

import Titlebar from './components/Titlebar/Titlebar';
import TabBar from './components/TabBar/TabBar';
import TabBarItem from './components/TabBarItem/TabBarItem';

class App extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        return (

          <div className="App">
                <Titlebar></Titlebar>

                <div className="mainArea">



                </div>

                <TabBar>


                    <TabBarItem
                        image="https://i.pinimg.com/originals/44/c7/73/44c773de9847d476e4731da0af23318e.jpg"
                        name="Oof"
                    />


                </TabBar>
          </div>
        );
    }
}

export default App;
