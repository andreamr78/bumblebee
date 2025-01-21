// import React from 'react';
import MovieCard from '../components/MovieCard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate} from "react-router-dom";


function Swipe() {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="d-flex p-4 back" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
        <i className="bi bi-arrow-left pe-3"></i>        
        <h5>Back</h5>
      </div>
      <div className="d-flex justify-content-center">    
        <MovieCard />
      </div>
    </div>
  );
}

export default Swipe;