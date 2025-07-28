import { profileAPI } from "../API/profileAPI";

const SET_DATA = "Set-My-Data"; 
const UPDATE_NEW_STATUS = "Update-New-Status";



let baseState = {
    name: 'Illya',
    profileImg: 'https://i.pinimg.com/236x/b5/eb/43/b5eb43c9fc0ced8bc3f918864a049350.jpg',

    status: "Nothing...",

    userId: -1,
    fullName: "No name",

    lookingForAJob: true,
    lookingForAJobDescription: "Нічого не вказано.",

    contacts : [],
    photos: {},
}




 const myProfileReducer = (state = baseState, action) => {
    switch (action.type) {
        case SET_DATA :
            return{
                status: action.data.aboutMe,

                userId: action.data.userId,
                fullName: action.data.fullName,
                
                lookingForAJob: action.data.lookingForAJob,
                lookingForAJobDescription: action.data.lookingForAJobDescription,

                contacts : {...action.data.contacts},
                photos: {...action.data.photos},
            }
        case UPDATE_NEW_STATUS:
            return {
                ...state,
                status : action.status,
            }
        default:
            return state;        
    }
}

export const setProfile = (data) => {
    return {
        type:  SET_DATA,
        data,
    }
}


export const updateStatus = (status) => {
    return{
        type: UPDATE_NEW_STATUS,
        status,
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI
            .updateStatus(status)
            .then(response => {if(response.code === 0) dispatch(status) });
    } 
}

export default myProfileReducer;