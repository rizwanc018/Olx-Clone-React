import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
import Context from './store/context.jsx';
// import Post from './store/PostContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        {/* <Post> */}
          <App />
        {/* </Post> */}
      </Context>
    </BrowserRouter>
  </React.StrictMode>,
)
