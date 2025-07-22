import {connect} from "react-redux";
import { followThunkCreator, unfollowThunkCreator, selectUser, unfollow, follow, following, getUsersThunkCreator } from "../../redux/users-reducer";

import React from 'react';
import Users from './Users'; 

import Preloader from '../common/Preloader'


class UsersAPI extends React.Component {

    render = () => {   
            
        return <>
            {this.props.isFatching ? <Preloader/> : null}
            <Users 
                totalCount = {this.props.totalCount} 
                pageSize = {this.props.pageSize} 
                selectedPage = {this.props.selectedPage} 
                users = {this.props.users}
                followingInProgress = {this.props.followingInProgress}

                following = {this.props.following}
                unfollowThunkCreator = {this.props.unfollowThunkCreator}
                followThunkCreator = {this.props.followThunkCreator}
                getPosts = {this.getPosts}
                selectUser = {this.props.selectUser}
            />
        </>;  
    }

    getPosts = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    componentDidMount() {
        this.props.getUsers(this.props.selectedPage, this.props.pageSize);
    }
}



let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalCount : state.usersPage.totalCount,
        selectedPage: state.usersPage.selectedPage,
        isFatching : state.usersPage.isFatching,
        followingInProgress : state.usersPage.followingInProgress,
    }
} 



const UsersConteiner = connect(mapStateToProps, {
    selectUser,
    following,
    getUsers : getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
})(UsersAPI);



export default UsersConteiner;

