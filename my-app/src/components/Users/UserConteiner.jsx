import {connect} from "react-redux";
import { setLoader, setUsersCount, changeSelectedPage, downloadUsers, selectUser, unfollow, follow } from "../../redux/users-reducer";

import React from 'react';
import axios from 'axios';
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

                getPosts = {this.getPosts}
                follow ={this.props.follow}
                unfollow = {this.props.unfollow}
                selectUser = {this.props.selectUser}
            />
        </>;  
    }

    getPosts = (page) => {
        this.props.setLoader(true);
        this.props.changeSelectedPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.downloadUsers(response.data.items))
            .then(this.props.setLoader(false));
    }

    componentDidMount() {
        this.props.setLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.downloadUsers(response.data.items);
                return response;
            })
            .then(response => this.props.setUsersCount(response.data.totalCount))
            .then(this.props.setLoader(false));
    }
}



let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalCount : state.usersPage.totalCount,
        selectedPage: state.usersPage.selectedPage,
        isFatching : state.usersPage.isFatching,
    }
} 



const UsersConteiner = connect(mapStateToProps, {
    follow,
    unfollow,
    selectUser,
    downloadUsers,
    changeSelectedPage:changeSelectedPage,
    setUsersCount: setUsersCount,
    setLoader : setLoader,
})(UsersAPI);



export default UsersConteiner;

