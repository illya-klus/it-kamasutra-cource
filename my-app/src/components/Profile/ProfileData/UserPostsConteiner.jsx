import classes from './UserPostsConteiner.module.css';
import Post from '../../Posts/Post/Post'

let UserPostsConteiner = (props) => {
    return (
        <div className={classes.postsWrapper}>
                <Post/>
        </div>
    );
}


export default UserPostsConteiner;

