import { Component } from "react";

import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

class BookList extends Component {
  render() {
    return (
      <Container fluid>
        <Row xs={1} md={3} lg={6} className="gy-2">
          {this.props.lista.map(book => (
            <SingleBook libro={book} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
