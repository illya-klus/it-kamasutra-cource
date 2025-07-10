import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Posts from './components/Posts/Posts';
import Dialogs from './components/Dialogs/Dialogs';
import AddPostMenu from './components/AddPost/AddPost';




function App(props) {
  return (
    < BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Nav/>
        <div className="app-wrapper-content">
          <Routes>
              <Route path='/Posts' element={<div><Posts dispatch = {props.dispatch} posts = {props.state.profilePage}/></div>} />
              <Route path='/Dialogs/*' element={<Dialogs dispatch = {props.dispatch} dialogsData = {props.state.dialogsData}/>}/>
              <Route path='/AddPost' element = {<AddPostMenu state = {props.state} dispatch = {props.dispatch}/>}/>
          </Routes>
        </div>
    
      </div>
    </BrowserRouter>
  );
}



export default App;
