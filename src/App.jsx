import React from 'react';
import './App.css';
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
