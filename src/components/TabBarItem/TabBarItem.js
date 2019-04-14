import React from 'react';
import * as style from './TabBarItem.css';



class TabBarItem extends React.Component {

    constructor( props ) {
        super(props);

        var Notation;
        Notation = this.props.name.split(' ');


        this.state = {
            name: this.props.name
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
                { this.state.name }
            </button>
        );
    }

}

export default TabBarItem;