import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { useAppSelector, useAppDispatch } from './store/hooks';
import { GetA1 } from './store/slices/serverSlice';

// Stack
import Main from './stack/main';
import User from './stack/user';

// Levels
import A1 from './stack/levels/A1';
import A2 from './stack/levels/A2';
import B1 from './stack/levels/B1';
import B2 from './stack/levels/B2';
import C1 from './stack/levels/C1';
import C2 from './stack/levels/C2';

function App() {
  const theme = useAppSelector((state) => state);

  const Dispatch = useAppDispatch();

  useEffect(() => {
    Dispatch(GetA1());
  }, [Dispatch]);

  return (
    <div
      style={{
        backgroundColor: theme.Theme.bodyBackground,
        minHeight: '100vh',
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/A1" element={<A1 />} />
          <Route path="/A2" element={<A2 />} />
          <Route path="/B1" element={<B1 />} />
          <Route path="/B2" element={<B2 />} />
          <Route path="/C1" element={<C1 />} />
          <Route path="/C2" element={<C2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
