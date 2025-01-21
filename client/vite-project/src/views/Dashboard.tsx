// import React from 'react'
import Row from "react-bootstrap/esm/Row"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { Container, Col } from "react-bootstrap"
import '../styles/ComponentsStyles.css'

function Dashboard() {
  return (
    <div>
       <div className="dashboard-container">
          <Row>
            <Col className="sidebar-col" lg={2}><Sidebar/></Col>
            <Col className="topbar-col" sm={12} lg={10}> <Topbar name={'Mike'}/></Col>
          </Row>
        </div>
    </div>
  )
}

export default Dashboard