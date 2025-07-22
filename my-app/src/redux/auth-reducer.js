import { UserAPI } from "../API/api";

const SET_USER_DATA = "set-user-data";




let baseState = {
    userId:null,
    emeil:null,
    login: null,
    isAuth: false,
}



const authReducer = (state = baseState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth:true,
            }
        default:
            return state;
    }
}




export const setUserData = (userId, emeil, login) => {
    return {
        type: SET_USER_DATA,
        data : {
            userId,
            emeil,
            login,
        }, 
    }
}


export const authThunk = () => {
    return (dispatch) => {
        UserAPI
        .authUser()
        .then(response =>{
            if(response.resultCode === 0){
                let {login, id, email} = response.data;
                dispatch(setUserData(id, email, login));
            }
        });
    }
}





export default authReducer;
