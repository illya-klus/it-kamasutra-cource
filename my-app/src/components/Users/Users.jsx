import defaultSrc from "../../assets/image/download.png";
import classes from './User.module.css';
import { NavLink } from "react-router-dom";


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
            <NavLink to={'/Profile/' + props.id}>
                <img 
                    src={props.smallPhoto != null ? props.smallPhoto : defaultSrc} 
                    alt="" 
                    className={classes.userImg}
                />
            </NavLink>
            
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

const UsersFunc = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for(let i = 1; i <= pagesCount; i++) pages.push(i);
    

    return (
        <div>

            <div className={classes.pages}>
                {pages.map(el => {
                    return <span onClick={() => props.getPosts(el)} className={ classes.item + " " + (el === props.selectedPage ? classes.selectedPage : "")  }>{el}</span>
                })
                }
            </div>

            <div className={classes.usersWrapper}>
        
                <div className={classes.users}>
                    {props.users.map( el => <User 
                        name = {el.name} 
                        discription = {el.discription}
                        location = {el.location}
                        isFollowed = {el.isFollowed}
                        id = {el.id}
                        smallPhoto = {el.photos.small}
                        
                        follow={props.follow}
                        unfollow={props.unfollow}
                        selectUser={props.selectUser}
                    />) }
                </div>
            </div>

        </div>
        )
}


export default UsersFunc;
