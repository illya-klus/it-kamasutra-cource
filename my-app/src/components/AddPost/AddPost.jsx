import classes from './AddPost.module.css';
import React from 'react';


const AddPostMenu = (props) => {
    let textRef = React.createRef();
    let imgRef = React.createRef();

    let putPost = () => {
        if(props.profilePage.newPostText === "") return;
        
        props.putNewPost(
            props.user.name,
            props.user.profileImg,
            props.profilePage.newPostImg,
            props.profilePage.newPostText,
        );
    }

    let onImgChange = () => {
        let file = imgRef.current.files[0], imageURL;
        if (file) imageURL = URL.createObjectURL(file);
        
        props.changeImj(imageURL);
    };

    let onPostChange = () => {
        let text = textRef.current.value;
        props.chandeText(text);
    };

    return(
        <div className={classes.addPostWrapper}>
            <label className={classes.addPhotoForm} htmlFor="photoInput">
                Натисни або перетягни фото сюди
                <input
                  ref= {imgRef}
                  id="photoInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={onImgChange}
                />
            </label>

                <div className={classes.addDiscriptionForm}>
                    <textarea
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}
                        ref={textRef}
                        placeholder="Введи опис до поста..."
                    />
                </div>
            <div className={classes.postCurrentPost}>
                <button className={classes.postButton} type="button" onClick={putPost}>
                    Запостити
                </button>
            </div>
        </div>
    );    
}


export default AddPostMenu;
