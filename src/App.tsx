import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

// Stack
import Main from './stack/main';
import User from './stack/user';
import Level from './stack/Level';

import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/user' element={<User />} />
          <Route path='/level' element={<Level />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
