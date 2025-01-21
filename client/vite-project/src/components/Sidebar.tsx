// import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import '../styles/ComponentsStyles.css'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='inside-sidebar'>
        <img src={logo} alt="" />
        <h1>Cinematch</h1>
        <div className='sidebar-links'>
            <p><Link to="/">All</Link></p>
            <p><Link to="/">Watched</Link></p>
            <p><Link to="/">Log Out</Link></p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar