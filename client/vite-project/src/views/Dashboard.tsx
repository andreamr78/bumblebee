// import React from 'react'
import Row from "react-bootstrap/esm/Row"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { Col, Button } from "react-bootstrap"
import '../styles/ComponentsStyles.css'
import { Link } from "react-router-dom"
//import MovieApi from "../api/MovieApi"
import { useEffect, useState } from "react"
//import axios from "axios"
import MainMovieCard from "../components/MainMovieCard"

function Dashboard() {
  //  const [name, setName] = useState<any>();
  const [movieLike, setMovieLike] = useState([])
  const [arrayMoviesWatched, setArrayMoviesWatched] = useState<any>(JSON.parse(localStorage.getItem('movieposterWatched') || '[]'));

  // useEffect(() => {
  //   setName(localStorage.getItem('user'));
  // }, []);

  useEffect(() => {
    setMovieLike(JSON.parse(localStorage.getItem('movieposterLike') || '[]'));
  }, [])
  

  function sendToWatched(selectedData: any){
    alert('Add to Watched movie list?');
    // remove from liked
    const updatedLikes = movieLike.filter((movieLike) => (movieLike !== selectedData));
    setMovieLike(updatedLikes)
    localStorage.setItem('movieposterLike', JSON.stringify(updatedLikes))
    const updatedMovies = [...arrayMoviesWatched, selectedData];
    setArrayMoviesWatched(updatedMovies);
    localStorage.setItem('movieposterWatched', JSON.stringify(updatedMovies));
  }

  return (
    <div>
       <div className="dashboard-container">
          <Row className="h-100">

            <Col className="sidebar-col" lg={2}><Sidebar/></Col>

            <Col className="topbar-col justify-content-between"> <Topbar/>
             <div className="content-div d-flex h-75 flex-wrap flex-grow-1 overflow-auto" id="dashboard-content">
              {movieLike?.length !== 0 ? 
                movieLike.map((movie, i)=> {
                  return(
                  <div key={i} onClick={() => sendToWatched(movie)}>
                    <MainMovieCard props={movie} className="MainMovieCard"/>
                  </div>
                  )
                })
              : 
              <div className="no-likes d-flex flex-column align-items-center justify-content-center">
                <p>No Likes yet?</p>
                <Link id="swipe-link" to='/swipe'>Start Swiping</Link>
              </div>
              }
             </div>
             <div className="swipe-button-mobile fixed-bottom d-flex justify-content-center align-items-center mb-3">
              <Link id="swipe-link" to='/swipe'><Button id="swipe-button">Start Swiping<i className="bi bi-arrow-right"></i></Button></Link>
             </div>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Dashboard


