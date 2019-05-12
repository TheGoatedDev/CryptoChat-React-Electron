import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import *  as style from './Profile.css';

import UserEditor from '../UserEditor/UserEditor';

import GlobalContext from '../../context/GlobalContext';


class Profile extends Component {

    static contextType = GlobalContext;

    constructor(props) {
        super(props);

        

        this.state = {
            
        };
        
        

    }

    componentDidMount() {
        this.context.callbacks.setTitleInfo("Profile");
    }

    render() {
        return (
            
            <div className={style.container}>
                <Link className={style.exitButton} to='/'>Back</Link>
                <br/>
                <UserEditor></UserEditor>
            </div>
            
        );
    }
}

export default Profile;
