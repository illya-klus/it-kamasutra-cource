const SET_USER_PROFILE_DATA = "Set-User-Profile-Data";

let baseState = {
    aboutMe: "Nothing...",

    userId: -1,
    fullName: "No name",

    lookingForAJob: false,
    lookingForAJobDescription: "Нічого не вказано.",

    contacts : [],
    photos: {},
}


const ProfileReducer = (state = baseState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_DATA:
            console.log(action.data);
            return {
                aboutMe: action.data.aboutMe,

                userId: action.data.userId,
                fullName: action.data.fullName,
                
                lookingForAJob: action.data.lookingForAJob,
                lookingForAJobDescription: action.data.lookingForAJobDescription,

                contacts : {...action.data.contacts},
                photos: {...action.data.photos},
            }
        default:
            return state;
    }
}



export const setProfile = (data) => {
    return {
        type:  SET_USER_PROFILE_DATA,
        data,
    }
}









export default ProfileReducer;










