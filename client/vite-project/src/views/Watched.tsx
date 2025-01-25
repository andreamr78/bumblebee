import { useEffect, useState } from 'react'
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
             <div className="content-div d-flex h-75 flex-wrap flex-grow-1 overflow-auto" id="dashboard-content">
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