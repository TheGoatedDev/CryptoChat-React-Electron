import React from 'react';
import * as style from './TabBarItem.css';



class TabBarItem extends React.Component {

    constructor( props ) {
        super(props);
        this.state = {

        };
    }

    sectionStyle = {
        backgroundImage: `url(${this.props.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    render() {
        return (
            <button className={style.container} style={ this.sectionStyle }>
                <span className={style.tooltiptext}>{this.props.name ? this.props.name : "Undefined"}</span>
            </button>
        );
    }

}

export default TabBarItem;