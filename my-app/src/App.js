import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderConteiner from './components/Header/HeaderConteiner';
import Nav from './components/Nav/Nav';
import PostsConteiner from './components/Posts/PostsConteiner';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import AddPostConteiner from './components/AddPost/AddPostConteiner';
import UsersConteiner from './components/Users/UserConteiner';
import ProfileContainer from './components/Profile/ProfileConteiner';
import Login from './components/Login/login';
import MyProfileInfo from './components/MyProfile/MyProfileInfo/MyProfileInfo';




function App() {
  return (
    < BrowserRouter>
      <div className='wrapper'>
        <HeaderConteiner />
        <Nav/>
        <div className="app-wrapper-content">
          <Routes>
              <Route path="/Profile/:userId" element={<ProfileContainer />} />
              <Route path='/Posts' element={<PostsConteiner />} />
              <Route path='/Dialogs/*' element={<DialogsConteiner />}/>
              <Route path='/AddPost' element = {<AddPostConteiner/>}/>
              <Route path='/Users' element = { <UsersConteiner/> }/>
              <Route path='/Login' element = { <Login/> }/>
              <Route path='/MyProfile' element={<MyProfileInfo/>}/>
          </Routes>
        </div>
    
      </div>
    </BrowserRouter>
  );
}



export default App;
