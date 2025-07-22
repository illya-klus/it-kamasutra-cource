import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';

import { setProfile } from '../../redux/profile-reducer';
import {useParams} from "react-router-dom";
 


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) userId = 10; // fallback userId if not in URL

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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


const WithRouterProfileContainer = (props) => {
  const params = useParams(); // get params from URL
  return <ProfileContainer {...props} params={params} />;
};


const mapStateToProps = (state) => ({
  userProfilePage: state.userProfilePage,
});


export default connect(mapStateToProps, { setProfile })(WithRouterProfileContainer);
