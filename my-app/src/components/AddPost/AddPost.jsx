import classes from './AddPost.module.css';
import React from 'react';
import { renderEntireTree } from '../../render'; // обовʼязково імпортуй


const AddPostMenu = (props) => {
    let textRef = React.createRef();
    let imgRef = React.createRef();

    let putPost = () => {
        debugger;
        let description = textRef.current.value;
        let photo = imgRef.current.files[0];

        if(description == undefined) return;

        props.addPost(
            1, 
            props.State.user.name,
            props.State.user.profileImg,
            photo,
            description
        );

        renderEntireTree(props.State, props.addPost);
    }

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
                  // onChange поки не юзаємо
                />
            </label>

                <div className={classes.addDiscriptionForm}>
                    <textarea
                        ref={textRef}
                        placeholder="Введи опис до поста..."
                        // value і onChange поки не використовуємо
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
