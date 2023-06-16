import React, { useEffect, useContext } from 'react';
import './App.css';
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Create from './Pages/Create'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthContext } from './store/context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import View from './Pages/ViewPost'
import Post from './store/PostContext';

function App() {
  const { setUser } = useContext(AuthContext);
  const location = useLocation()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user)
    })
  });


  return (
    <div>
      <Post>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </Post>
    </div>
  );
}

export default App;

