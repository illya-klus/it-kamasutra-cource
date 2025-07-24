import classes from './Posts.module.css';
import Post from './Post/Post'
import { Navigate } from 'react-router-dom';




const Posts = (props) => {
    if(props.isAuth == false) return <Navigate to="/login" /> ; 
    return (
        <div className={classes.postsWrapper}>
            <div className={classes.postsTable}>
                {props.posts.map((e) => <Post description={e.description} postPhoto={e.postPhoto} profileImg={e.profileImg} name={e.name} likes={e.likes} comments = {e.comments}  /> )}
            </div>
        </div>
    );
}

export default Posts;
