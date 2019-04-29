import React from 'react';
import * as style from './TabBarItem.css';



class TabBarItem extends React.Component {

    constructor( props ) {
        super(props);

        this.state = {
            name: this.props.name
        };
    }

    sectionStyle = {
        backgroundImage: `url(${this.props.image ? this.props.image : "https://ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png"})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    render() {
        return (
            <button className={style.container} style={ this.sectionStyle }>
            </button>
        );
    }

}

export default TabBarItem;