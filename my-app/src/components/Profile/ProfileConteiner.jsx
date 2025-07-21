import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';

import { setProfile } from '../../redux/profile-reducer';




class ProfileConteiner extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
        .then(response =>{
            this.props.setProfile(response.data);
        });
    }

    render (){
        return (
            <div>
                <Profile {...this.props} profilePage = {this.props.profilePage}/>
            </div>
        )
    }
}

let mapSatateToProps = (state) => {
    return {
        profilePage : state.profilePage,
    } 
}



export default connect(mapSatateToProps, {setProfile})(ProfileConteiner);