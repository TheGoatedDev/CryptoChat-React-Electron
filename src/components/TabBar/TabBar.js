import React from 'react';
import * as style from './TabBar.css';



class TabBar extends React.Component {

    constructor( props ) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
        <div className={style.container}>
            <div className={style.wrapper}>
                {this.props.children}
            </div>
        </div>
        );
    }

}

export default TabBar;