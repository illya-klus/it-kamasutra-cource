import {applyMiddleware, combineReducers, createStore} from 'redux';

import dialogsReducer from './dialogs-reducer';
import navReducer from './nav-reducer';
import postsReducer from './posts-reducer';
import userReducer from './user-reducer';
import UsersReducer from './users-reducer';
import ProfileReducer from './profile-reducer';
import authReducer from './auth-reducer';

import { thunk } from 'redux-thunk';


let reducers = combineReducers({
    user : userReducer,
    dialogsData : dialogsReducer,
    navBar : navReducer,
    profilePage : postsReducer,
    usersPage: UsersReducer,
    userProfilePage : ProfileReducer,
    auth:authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk) );

window.store = store;


export default store;
