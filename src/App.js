import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'

import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import UserProfile from './PAGES/User/UserProfile';
import ChangePassword from './COMPONENTS/UserProfile/ChangePassword';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to='/user/:activepage' replace={true} />} />
        <Route path='/user/:activepage' element={<UserProfile/>} />
        
        <Route path="*" element={<div>
          <h1>404 NOT FOUND</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App