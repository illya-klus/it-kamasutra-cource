const SET_USER_PROFILE_DATA = "Set-User-Profile-Data";

let baseState = {
    userId: -1,
    fullName: "No name",

    lookingForAJob: false,
    lookingForAJobDescription: "Нічого не вказано.",

    contacts : [],
    photos: {
        small: null,
        large: null,
    }
}


const ProfileReducer = (state = baseState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_DATA:
            return {
                userId: action.data.userId,
                fullName: "No name",
                
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










