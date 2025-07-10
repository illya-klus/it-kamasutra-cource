const ADD_POST = "ADD-POST";
const U_N_POST_IMG = "UPDATE-NEW-POST-IMG";
const U_N_POST_TEXT = "UPDATE-NEW-POST-TEXT";



const postsReducer = (state, action) => {
    if(action.type == ADD_POST){
      state.profilePage.mockPosts.unshift({
        id : action.id,
        name : action.name,
        profileImg : action.profileImg, 
        postPhoto : action.postPhoto, 
        description : action.description,
        likes: 0,
        comments: 0,
      });

    } else if(action.type == U_N_POST_TEXT) {
      state.newPostText = action.newText;

    } else if(action.type == U_N_POST_IMG){
      state.newPostImg = action.newPostImg;

    }
    
    
    return state;
}



export const postChangeActionCreator = (text) => {
    return {
        type: U_N_POST_TEXT,
        newText : text,
    }
}
export const imgChangeActionCreator = (imageURL) => {
    return {
        type: U_N_POST_IMG,
        newPostImg : imageURL,
    }
}
export const putPostActionCreator = (name, profileImg, postPhoto, description) => {
    return{
        type: ADD_POST,
        id: 1,
        name,
        profileImg,
        postPhoto,
        description,
    }
}

export default postsReducer;