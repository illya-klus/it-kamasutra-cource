import classes from './Post.module.css'



const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.user}>
                <img src={props.profileImg} alt=""/>
                <span className={classes.username}>{props.name}</span>
            </div>
            
            <img src={props.postPhoto} alt="" />

            <div className={classes.discription}>
                <span className={classes.username}>{props.name}</span>
                <span className={classes.text}>{props.description}</span>
            </div>

            <div className={classes.actions}>
                <button className={classes.btn}>
                    ❤️ <span>{props.likes}</span>
                </button>
                <button className={classes.btn}>
                    💬 <span>{props.comments}</span>
                </button>
            </div>
        </div>
    );
}


export default Post;