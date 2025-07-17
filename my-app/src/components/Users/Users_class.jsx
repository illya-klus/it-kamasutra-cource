import React from 'react';
import classes from './User.module.css';
import axios from 'axios';

import defaultSrc from "../../assets/image/download.png"


let User = (props) => {

    let onClick = () =>{
        props.selectUser(props.id);

        if(props.isFollowed){
            props.unfollow(props.id);
        } else{
            props.follow(props.id);
        }
            
        props.selectUser(-1);
    }

    return (
        <div className={classes.user}>
            <img src={props.smallPhoto != null ? props.smallPhoto : defaultSrc} alt="" className={classes.userImg}/>
            <div className={classes.userName}>
                {props.name}
            </div>
            <div className={classes.userDiscription}>
                {"props.discription"}
            </div>
            <div className={classes.userContry}>
                {"props.location"}
            </div>
            <button onClick={onClick} className={ classes.userButton + " " + (props.isFollowed ? classes.followed : classes.unfollowed) }>
                {props.isFollowed ? "Followed" : "Follow"}
            </button>
        </div>
    )
}


class Users extends React.Component {

    render = () => {        
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        } 

        return (
            <div>
            {/*<button className={classes.getUsersButton} onClick={this.getPosts} >Get Users</button> */}
            
            <div className={classes.pages}>
                {pages.map(el => {
                    return <span onClick={() => this.getPosts(el)} className={ classes.item + " " + (el === this.props.selectedPage ? classes.selectedPage : "")  }>{el}</span>
                })
                }
            </div>

                <div className={classes.usersWrapper}>
            
                    <div className={classes.users}>
                        {this.props.users.map( el => <User 
                            name = {el.name} 
                            discription = {el.discription}
                            location = {el.location}
                            isFollowed = {el.isFollowed}
                            id = {el.id}
                            smallPhoto = {el.photos.small}

                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            selectUser={this.props.selectUser}
                        />) }
                    </div>
                </div>

            </div>
        )
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



export default Users;




