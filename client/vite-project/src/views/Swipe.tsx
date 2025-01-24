// import React from 'react';
import MovieCard from '../components/MovieCard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Key, useEffect, useRef, useState } from 'react';
import { useNavigate} from "react-router-dom";
import MovieApi from '../api/MovieApi';
import { Carousel, Button } from 'react-bootstrap';


function Swipe() {

  const [results, setResults] = useState<any>([]);
  const [index, setIndex] = useState(0);

   const baseImgUrl = "https://image.tmdb.org/t/p"
   const size = "w500"
  
  const getMovies = async () => {
    const data = await MovieApi();
    setResults(data);
  };
  useEffect(() => {
    getMovies()
    
  }, [])
  // console.log(results);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };


  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };
  const ref = useRef<any>(null);

  const onPrevClick = () => {
    ref.current?.next();
  };
  const onNextClick = (selectedData: any) => {
    ref.current?.next();
    console.log(`${baseImgUrl}/${size}${selectedData}`);
  };

  const watched = (selectedData: any) => {
    ref.current?.next();
    console.log(`${baseImgUrl}/${size}${selectedData}`);
  }
  

  return (
    <div>
      <div className="d-flex p-4 back" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
        <i className="bi bi-arrow-left pe-3"></i>        
        <h5>Back</h5>
      </div>
      <div className="d-flex justify-content-center">  

    <Carousel ref={ref} activeIndex={index} onSelect={handleSelect} indicators={false}  controls={false} interval={null} className='card shadow-sm rounded-4'>
         {results.map((result: any, i: Key | null | undefined) => {
          return(
            <Carousel.Item key={i}>
               <MovieCard props={result}/>
               <div className="d-flex justify-content-center gap-4">
                <Button className="like" id="cross" onClick={onPrevClick}>
                  <i className="bi bi-x-lg"></i>
                </Button>
                <Button className="like" id="check" onClick={() => onNextClick(result.poster_path)}>
                  <i className="bi bi-check-lg"></i>
                </Button>
              </div>
              <div className="d-flex justify-content-center mt-4 mb-4">
              <Button variant="outline-primary" className="watched" onClick={() => watched(result.poster_path)}>
                Mark as watched
                <i className="bi bi-eye ms-2"></i>
              </Button>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>  
      
      </div>
    </div>
  );
}

export default Swipe;