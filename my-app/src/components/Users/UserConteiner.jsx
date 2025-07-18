import {connect} from "react-redux";
import { setUsersCount, changeSelectedPage, setUsers, changeSelectedId, followAC, unfollowAC } from "../../redux/users-reducer";

import React from 'react';
import axios from 'axios';
import Users from './Users'; 



class UsersAPI extends React.Component {

    render = () => {        
        return <Users 
            totalCount = {this.props.totalCount} 
            pageSize = {this.props.pageSize} 
            selectedPage = {this.props.selectedPage} 
            users = {this.props.users}

            getPosts = {this.getPosts}
            follow ={this.props.follow}
            unfollow = {this.props.unfollow}
            selectUser = {this.props.selectUser}
        />;  
    }

    getPosts = (page) => {
        this.props.changeSelectedPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.downloadUsers(response.data.items));
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.downloadUsers(response.data.items);
                return response;
            })
            .then(response => this.props.setUsersCount(response.data.totalCount));
    }
}



let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalCount : state.usersPage.totalCount,
        selectedPage: state.usersPage.selectedPage,
    }
} 
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch(followAC(id)) ,
        unfollow: (id) => dispatch(unfollowAC(id)) ,
        selectUser: (id) => dispatch(changeSelectedId(id)),
        downloadUsers : (users) => dispatch(setUsers(users)),
        changeSelectedPage: (page) => dispatch(changeSelectedPage(page)),
        setUsersCount: (count) => dispatch(setUsersCount(count)),
    }
}
const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);



export default UsersConteiner;

