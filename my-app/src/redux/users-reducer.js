const FOLLOW = "Follow-User";
const UNFOLLOW = "Unfollow_User";
const SET_USERS = "Set_Users";
const CHANGE_ID = "Change_Id";
const SET_CURRENT_PAGE = "Set-current-Page";
const SET_USERS_COUNT = "Set-Users-Count";




let baseState = {
    users:[

    ],
    selectedId : -1,
    totalCount : 0,
    pageSize : 20,
    selectedPage : 1,
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
                users : [...action.users],
            }
        case CHANGE_ID:
            return{
                ...state,
                selectedId: action.id,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                selectedPage: action.page,
            }
        case SET_USERS_COUNT:
            return {
                ...state, 
                totalCount : action.count,
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
export const changeSelectedPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: page,
    }
} 
export const setUsersCount = (count) =>{
    if(count > 200) count = 200;
    return{
        type: SET_USERS_COUNT,
        count: count,
    }
}



export default UsersReducer;





