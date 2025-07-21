import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';

import { setProfile } from '../../redux/profile-reducer';




class ProfileConteiner extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${10}`)
        .then(response =>{
            this.props.setProfile(response.data);
        });
    }

    render (){
        return (
            <div>
                <Profile userProfilePage = {this.props.userProfilePage}/>
            </div>
        )
    }
}







let mapSatateToProps = (state) => {
    return {
        userProfilePage : state.userProfilePage,
    } 
}



export default connect(mapSatateToProps, {setProfile})(ProfileConteiner);