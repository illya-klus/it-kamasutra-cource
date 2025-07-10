import classes from './Posts.module.css';
import Post from './Post/Post'





const Posts = (props) => {
    return (
        <div className={classes.postsWrapper}>
            <div className={classes.postsTable}>
                {props.posts.mockPosts.map((e) => <Post description={e.description} postPhoto={e.postPhoto} profileImg={e.profileImg} name={e.name} likes={e.likes} comments = {e.comments}  /> )}
            </div>
        </div>
    );
}

export default Posts;
