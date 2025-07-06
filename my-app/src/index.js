import './index.css';

import State from "./redux/state";
import {addPost} from './redux/state'

import reportWebVitals from './reportWebVitals';
import { renderEntireTree } from './render';


renderEntireTree(State, addPost);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
