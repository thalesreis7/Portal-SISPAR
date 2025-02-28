import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Login from './Components/Pages/Login/Login'
import './Components/Global_Styled/styled.scss'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
