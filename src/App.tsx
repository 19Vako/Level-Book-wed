import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';


import { useAppSelector } from './store/hooks';


// Stack
import Main from './stack/main';
import User from './stack/user';


function App() {
  const theme = useAppSelector(state => state)
  return (
    <div style={{backgroundColor: theme.Theme.bodyBackground, minHeight: '100vh'}}>
        <Router>
          <Routes>
          
            <Route path='/' element={<Main />} />
            <Route path='/user' element={<User />} />
            
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
