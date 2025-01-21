import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TransformersTest from '../assets/TransformersTest.jpg'
import '../styles/CardStyles.css'

function MovieCard() {
  return (
    <Card style={{ width: '18rem' }} className="card shadow-sm rounded-3">
      <Card.Img variant="top" src={TransformersTest} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-center">
          Movie Name
        </Card.Title>
        <Card.Text className="d-flex justify-content-center">
          2010
        </Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-center gap-4">
        <Button className="like" id="cross">
          <i className="bi bi-x-lg"></i>
        </Button>
        <Button className="like" id="check">
          <i className="bi bi-check-lg"></i>
        </Button>
      </div>
      <div className="d-flex justify-content-center mt-4 mb-4">
      <Button variant="outline-primary" className="watched">
        Mark as watched
        <i className="bi bi-eye ms-2"></i>
      </Button>
      </div>
    </Card>
  );
}

export default MovieCard;