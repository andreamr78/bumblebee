// import React from 'react'
import Row from "react-bootstrap/esm/Row"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { Col } from "react-bootstrap"
import '../styles/ComponentsStyles.css'
import { Link } from "react-router-dom"
//import MovieApi from "../api/MovieApi"
import { useEffect, useState } from "react"
//import axios from "axios"
import MainMovieCard from "../components/MainMovieCard"

function Dashboard() {
  //  const [name, setName] = useState<any>();
  const [movieLike, setMovieLike] = useState([])

  useEffect(() => {
    setMovieLike(JSON.parse(localStorage.getItem('movieposterLike') || '{}'));
  }, [])

  // const getUsername = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3001/api/auth/signup');
  //     setName(response.username);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  

  return (
    <div>
       <div className="dashboard-container">
          <Row>
            <Col className="sidebar-col" lg={2}><Sidebar/></Col>
            <Col className="topbar-col"> <Topbar name={name}/>
             <div className="content-div d-flex justify-content-center h-75 align-items-center">
              {movieLike.length !== 0 ? 
                movieLike.map((movie, i)=> {
                  return(
                  <div key={i}>
                    <MainMovieCard props={movie}/>
                  </div>
                  )
                })
              : 
              <div>
                <p>No Likes yet?</p>
                <Link id="swipe-link" to={'/swipe'}>Start Swiping</Link>
              </div>
              }
             </div>
             <div className="swipe-button-mobile fixed-bottom d-flex justify-content-center align-items-center mb-3">
              <button id="swipe-button">Start swiping! <i className="bi bi-arrow-right"></i></button>
             </div>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Dashboard


