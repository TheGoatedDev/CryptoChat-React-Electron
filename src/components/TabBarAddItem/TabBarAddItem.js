import React from 'react';
import * as style from './TabBarAddItem.css';



class TabBarItem extends React.Component {

    constructor( props ) {
        super(props);

        this.state = {
            name: this.props.name
        };
    }


    render() {
        return (
            <button onClick={this.props.clicked} className={style.container}>
            +
            </button>
        );
    }

}

export default TabBarItem;