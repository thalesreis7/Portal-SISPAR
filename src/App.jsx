import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Login from './Components/Pages/Login/Login'
import './Components/Global_Styled/styled.scss'
import Reembolsos from './Components/Pages/Reembolsos/Reembolsos';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/reembolsos' element={<Reembolsos/>} />
      </Routes>
    </BrowserRouter>
  );
}
