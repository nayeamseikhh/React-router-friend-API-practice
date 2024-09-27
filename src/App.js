// // import React, { useEffect, useState } from 'react';
// import './App.css';
import FriendDetail from './components/FriendDetail/FriendDeatil';
// import Friend from './components/friends/Friend';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter,
  // createRoutesFromElements,
  Route,
  Routes,
  // Router,
  // RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element= {<NoMatch/>} />
      <Route path='/' element= {<Home/>} />
      <Route path='/Home' element= {<Home/>} />
      <Route path='/friend/:friendID' element={<FriendDetail/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
