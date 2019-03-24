import React from 'react';
import * as style from './TabBar.css';



class TabBar extends React.Component {

    constructor( props ) {
        super(props);
    }

    render() {
        return (
        <div className={style.container}>
            {this.props.children}
        </div>
        );
    }

}

export default TabBar;