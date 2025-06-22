import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Navbar />
     <Routes>
          <Route path='/' element={
            <Home />
            } />
          <Route path='/profile' element={
            <Profile />
            } />
        </Routes>
    </>
  )
}

export default App
