import {connect} from "react-redux";
import { followThunkCreator, unfollowThunkCreator, selectUser,  following, getUsersThunkCreator } from "../../redux/users-reducer";

import React from 'react';
import Users from './Users'; 

import Preloader from '../common/Preloader'
import { getFollowingInProgress, getIsFatching, getPageSize, getSelectedPage, getTotalCount, getUsers } from "../../redux/users-selectors";


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
        users : getUsers(state),
        pageSize : getPageSize(state),
        totalCount : getTotalCount(state),
        selectedPage: getSelectedPage(state),
        isFatching : getIsFatching(state),
        followingInProgress : getFollowingInProgress(state),
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

