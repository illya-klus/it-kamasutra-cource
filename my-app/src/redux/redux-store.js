import {combineReducers, createStore} from 'redux';

import dialogsReducer from './dialogs-reducer';
import navReducer from './nav-reducer';
import postsReducer from './posts-reducer';
import userReducer from './user-reducer';


let reducers = combineReducers({
    user : userReducer,
    dialogsData : dialogsReducer,
    navBar : navReducer,
    profilePage : postsReducer,
});

let store = createStore(reducers);




export default store;
