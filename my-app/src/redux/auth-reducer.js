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






export default authReducer;
