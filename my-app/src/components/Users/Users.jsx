import React from 'react';
import classes from './User.module.css';


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
            <img src="" alt="" className={classes.userImg}/>
            <div className={classes.userName}>
                {props.name}
            </div>
            <div className={classes.userDiscription}>
                {props.discription}
            </div>
            <div className={classes.userContry}>
                {props.location}
            </div>
            <button onClick={onClick} className={ classes.userButton + " " + (props.isFollowed ? classes.followed : classes.unfollowed) }>
                {props.isFollowed ? "Followed" : "Follow"}
            </button>
        </div>
    )
}



let Users = (props) => {
    return (
        <div className={classes.usersWrapper}>
            <div className={classes.users}>
                {props.users.map( el => <User 
                    name = {el.fullName} 
                    discription = {el.discription}
                    location = {el.location}
                    isFollowed = {el.isFollowed}
                    id = {el.id}
                    
                    follow={props.follow}
                    unfollow={props.unfollow}
                    selectUser={props.selectUser}
                />) }
            </div>

        </div>
    );
}


export default Users;




