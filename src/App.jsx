import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Nav from'/.Nav.jsx'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallary" element={<Gallary/>}/>
          
          

      </Routes>

     
    </>
  )
}

export default App
