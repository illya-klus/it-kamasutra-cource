import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Posts from './components/Posts/Posts';
import Dialogs from './components/Dialogs/Dialogs';



function App(props) {
  return (
    < BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Nav/>
        <div className="app-wrapper-content">
          <Routes>
              <Route path='/Posts' element={<div><Posts posts = {props.state.mockPosts}/></div>} />
              <Route path='/Dialogs/*' element={<Dialogs dialogsData = {props.state.dialogsData}/>}/>
          </Routes>
        </div>
    
      </div>
    </BrowserRouter>
  );
}



export default App;
