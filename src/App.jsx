// import React, { useEffect } from 'react';
// import './App.css';
// import Signup from './Pages/Signup'
// import Home from './Pages/Home'
// import Login from './Pages/Login'
// import { Route, Routes } from 'react-router-dom';

// function App() {

//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/login' element={<Login />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useContext } from 'react';
import './App.css';
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './store/context';

function App() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log('>>>>>>>>>>>>>>', user); // Access the value of user and log it to the console
  });
 

  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;

