import { Card } from "react-bootstrap"


function MainMovieCard(props:any) {
  console.log(props);
  return (
    <div>
      <Card style={{ width: '18rem' }} className="card rounded-4">
        <Card.Img variant="top" src={props.props} />
      </Card>
    </div>
  )
}

export default MainMovieCard