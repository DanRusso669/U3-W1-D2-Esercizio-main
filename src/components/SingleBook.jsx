import { Component } from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Col key={this.props.libro.asin}>
        <Card id="cardCont">
          <Card.Img id="cardImage" variant="top" className="cardImage" src={this.props.libro.img} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{this.props.libro.title}</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Badge bg="secondary">{this.props.libro.price} $ </Badge>
              <Button id="addBtn" variant="success">
                Add To Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
