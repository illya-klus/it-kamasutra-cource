import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={classes.postsTable}>
            <Post likes = '12' coments = '1' postPhoto = "https://www.iphones.ru/wp-content/uploads/2022/02/ujgJD-7..v1633547653.jpg" name = "@catlover" profileImg = "https://i.pinimg.com/236x/b5/eb/43/b5eb43c9fc0ced8bc3f918864a049350.jpg" description = "Чудовий день для чудових справ!"/>
        </div>
    );
}

export default Posts;
