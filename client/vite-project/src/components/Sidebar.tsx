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
        <div className='sidebar-links d-flex flex-column mt-5'>
            <div>
              <p><Link to="/dashboard">Liked</Link></p>
              <p><Link to="/watched">Watched</Link></p>
            </div>
            <div className='logout-container'>
              <p id='logout'>
                <Link to="/"><i className="bi bi-door-open"></i>Log Out</Link>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar