import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import PostsConteiner from './components/Posts/PostsConteiner';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import AddPostConteiner from './components/AddPost/AddPostConteiner';
import UsersConteiner from './components/Users/UserConteiner';
import ProfileConteiner from './components/Profile/ProfileConteiner';


function App() {
  return (
    < BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Nav/>
        <div className="app-wrapper-content">
          <Routes>
              <Route path='/Profile/*' element={<ProfileConteiner/>} />
              <Route path='/Posts' element={<PostsConteiner />} />
              <Route path='/Dialogs/*' element={<DialogsConteiner />}/>
              <Route path='/AddPost' element = {<AddPostConteiner/>}/>
              <Route path='/Users' element = { <UsersConteiner/> }/>
          </Routes>
        </div>
    
      </div>
    </BrowserRouter>
  );
}



export default App;
