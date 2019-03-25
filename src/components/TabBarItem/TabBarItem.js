import React from 'react';
import * as style from './TabBarItem.css';



class TabBar extends React.Component {

    constructor( props ) {
        super(props);
    }

    sectionStyle = {
        width: "60px",
        height: "60px",
        backgroundImage: `url(${this.props.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    render() {
        return (
            <button className={style.container} style={ this.sectionStyle }>

            </button>
        );
    }

}

export default TabBar;