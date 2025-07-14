const FOLLOW = "Follow-User";
const UNFOLLOW = "Unfollow_User";
const SET_USERS = "Set_Users";
const CHANGE_ID = "Change_Id";



let baseState = {
    users:[

    ],
    selectedId : -1,
}

const UsersReducer = (state = baseState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id == action.UserId){
                        return {...u, isFollowed : true}
                    };
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id == action.UserId){
                        return {...u, isFollowed : false}
                    };
                    return u;
                }),
            }
        case SET_USERS:
            return{
                ...state,
                users : [...state.users, ...action.users],
            }
        case CHANGE_ID:
            return{
                ...state,
                selectedId: action.id,
            }
        default:
            return state;
    }
}
export const followAC = (UserId) => {
    return {
        type: FOLLOW,
        UserId: UserId,
    }
}
export const unfollowAC = (UserId) => {
    return {
        type: UNFOLLOW,
        UserId: UserId,
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}
export const changeSelectedId = (id) => {
    return {
        type: CHANGE_ID,
        id: id,
    }
}

export default UsersReducer;





