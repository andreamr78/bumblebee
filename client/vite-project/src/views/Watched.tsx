import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MainMovieCard from '../components/MainMovieCard';

function Watched() {
      const [movieWatch, setMovieWatch] = useState([]);
    
      useEffect(() => {
        setMovieWatch(JSON.parse(localStorage.getItem('movieposterWatched') || '{}'))
      }, [])

  return (
    <div>
       <div className="dashboard-container">
          <Row>
            <Col className="sidebar-col" lg={2}><Sidebar/></Col>
            <Col className="topbar-col"> <Topbar name={name}/>
             <div className="content-div d-flex justify-content-center h-75 align-items-center">
             {movieWatch.length !== 0 ? 
                movieWatch.map((movie, i)=> {
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
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Watched