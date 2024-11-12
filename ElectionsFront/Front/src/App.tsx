import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VotePage from './pages/VotePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import PrivateRoute from './utils/PrivateRoute'
import IsAdminProvider from './utils/IsAdminProvider'
import Statistics from './components/statistics/Statistics'

function App() {
 

  return (
    <>
    <Routes> 
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} /> 
      <Route path="/" element={<LoginPage />} />
      <Route path="/votePage" element={<PrivateRoute component= {<VotePage />} />} />
      <Route path='/statistics' element={<IsAdminProvider component ={<Statistics/>} />}/>
    </Routes>
    </>
  )
}

export default App
