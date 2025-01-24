// import React from 'react'
import Row from "react-bootstrap/esm/Row"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { Col } from "react-bootstrap"
import '../styles/ComponentsStyles.css'
import { Link } from "react-router-dom"
//import MovieApi from "../api/MovieApi"
//import { useEffect, useState } from "react"

function Dashboard() {

  return (
    <div>
       <div className="dashboard-container">
          <Row>
            <Col className="sidebar-col" lg={2}><Sidebar/></Col>
            <Col className="topbar-col"> <Topbar name={'Mike'}/>
             <div className="content-div d-flex justify-content-center h-75 align-items-center">
              <div>
                <p>No Likes yet?</p>
                <Link id="swipe-link" to={'/swipe'}>Start Swiping</Link>
              </div>
             </div>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Dashboard


