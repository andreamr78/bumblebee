// import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './views/Login'
import Singup from './views/Singup'
import Dashboard from "./views/Dashboard"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login/>} />
        <Route path="/signup" element={ <Singup /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
      
    </div>
  )
}

export default App