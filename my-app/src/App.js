import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import PostsConteiner from './components/Posts/PostsConteiner';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import AddPostConteiner from './components/AddPost/AddPostConteiner';




function App() {
  return (
    < BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Nav/>
        <div className="app-wrapper-content">
          <Routes>
              <Route path='/Posts' element={<PostsConteiner />} />
              <Route path='/Dialogs/*' element={<DialogsConteiner />}/>
              <Route path='/AddPost' element = {<AddPostConteiner/>}/>
          </Routes>
        </div>
    
      </div>
    </BrowserRouter>
  );
}



export default App;
