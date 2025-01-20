import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TransformersTest from '../assets/TransformersTest.jpg'

function MovieCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={TransformersTest} />
      <Card.Body>
        <Card.Title>Movie Name</Card.Title>
        <Card.Text>
          2010
        </Card.Text>
      </Card.Body>
      <div>
        <Button variant="danger">Dislike</Button>
        <Button variant="success">Like</Button>
      </div>
      <div>
      <Button variant="outline-primary">Primary</Button>
      </div>
    </Card>
  );
}

export default MovieCard;