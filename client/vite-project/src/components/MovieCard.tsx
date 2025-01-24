import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import TransformersTest from '../assets/TransformersTest.jpg'
import '../styles/CardStyles.css'
import Popup from './Popup';
import { useState } from 'react';


function MovieCard(props:any) {

  const [show, setShow] = useState(false);
  const baseImgUrl = "https://image.tmdb.org/t/p"
  const size = "w500"

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <Card style={{ width: '18rem' }} className="card rounded-4">
      <Card.Img variant="top" src={`${baseImgUrl}/${size}${props.props.poster_path}`} />

      <Card.Body>
        <Card.Title className="d-flex justify-content-center">
          {props.props.title}
        </Card.Title>
        <Card.Text className="d-flex justify-content-center">
        {props.props.release_date}
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button variant="link" id="bio" onClick={handleShow}>Read Bio</Button>
        </div>  
      </Card.Body>
      <Popup show={show} props={props.props} handleClose={handleClose}/>
    </Card>
  );
}

export default MovieCard;