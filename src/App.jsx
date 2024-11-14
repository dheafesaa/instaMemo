import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/molecules/Navbar';
import ActivePage from './pages/ActivePage';
import AddMemoPage from './pages/AddMemoPage';
import DetailMemoPage from './pages/DetailMemoPage';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app">
      <header>
        {authUser && !isLoginOrRegisterPage && <Navbar onLogout={onLogout} />}
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/active" element={<ActivePage />} />
          <Route path="/add-memo" element={<AddMemoPage />} />
          <Route path="/detail-memo/:id" element={<DetailMemoPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;