import React from 'react';
import { Route, Routes } from "react-router-dom"
import MyHomePage from './pages/Homepage';
import MyLoginPage from './pages/LoginPage';
import Register from './pages/Register';
import MyProfilePage from './pages/ProfilePage';
import NoteFound from './pages/NoteFound';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<MyHomePage />} path='/'></Route>
          <Route element={<MyProfilePage />} path='/me'></Route>
        </Route>

        <Route element={<MyLoginPage />} path='/login'></Route>
        <Route element={<Register />} path='/register'></Route>
        <Route element={<NoteFound />} path='*'></Route>

      </Routes>
    </>
  );
};

export default App;