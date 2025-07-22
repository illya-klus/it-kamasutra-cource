import { UserAPI } from "../API/api";



const FOLLOW = "Follow-User";
const UNFOLLOW = "Unfollow_User";
const SET_USERS = "Set_Users";
const CHANGE_ID = "Change_Id";
const SET_CURRENT_PAGE = "Set-current-Page";
const SET_USERS_COUNT = "Set-Users-Count";
const SET_LOAD_FACTOR = "Set-Load-factor";
const SET_LOAD_FOLLOW = "Set-Load-follow";





let baseState = {
    users:[ ],

    selectedId : -1,
    
    totalCount : 0,
    pageSize : 20,
    selectedPage : 1,

    isFatching : false,
    followingInProgress: [],
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
        case SET_LOAD_FACTOR:
            return{
                ...state,
                isFatching : action.value,
            }
        case SET_LOAD_FOLLOW: 
            return {
                ...state,
                followingInProgress: action.following
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const follow = (UserId) => {
    return {
        type: FOLLOW,
        UserId: UserId,
    }
}
export const unfollow = (UserId) => {
    return {
        type: UNFOLLOW,
        UserId: UserId,
    }
}
export const downloadUsers = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}
export const selectUser = (id) => {
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
export const setLoader = (value) => {
    return {
        type: SET_LOAD_FACTOR,
        value: value,
    }
}
export const following = (userId, following) => {
    return {
        type: SET_LOAD_FOLLOW,
        userId,
        following,
    }
}

export const getUsersThunkCreator = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setLoader(true));
        dispatch(changeSelectedPage(page));

        UserAPI.getUsers(page, pageSize)
            .then(response => {
                dispatch(downloadUsers(response.items));
                dispatch(setUsersCount(response.totalCount));
                return response;
            })
            .then( () => dispatch(setLoader(false)) );
    }
}
export const followThunkCreator = (id) => {
    return (dispatch) => {
        UserAPI.followUser(id)
        .then(response => {
            if(response.resultCode === 0){
                dispatch(follow(id));
            }
            dispatch(following(id, false));
        }).catch(() => {
            alert("Сервер не працює");
            dispatch(following(id, false)); 
        });
    }
}
export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        UserAPI.unfollowUser(id)
        .then(response => {
            if(response.resultCode === 0){
                dispatch(unfollow(id));
            }
            dispatch(following(id, false));
        }).catch(() => {
            alert("Сервер не працює");
            dispatch(following(id, false)); 
        });
    }
}

export default UsersReducer;





