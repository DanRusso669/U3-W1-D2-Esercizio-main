import { Component } from "react";

import SingleBook from "./SingleBook";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchedParam: "",
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({searchedParam: e.target.value})
  };

  render() {
    return (
      <>
        {this.state.searchedParam === "" ? 
        <>
        <Container>
          <InputGroup className="mb-3" >
            <Form.Control placeholder="Cerca un libro" aria-label="Username" aria-describedby="basic-addon1" onSubmit={this.handleSubmit} />
            <Button variant="outline-secondary" id="searchBtn" type="submit">
              Cerca
            </Button>
          </InputGroup>
        </Container>
        <Container fluid>
          <Row xs={1} md={3} lg={6} className="gy-2">
            {this.props.lista.map(book => (
              <SingleBook libro={book} />
            ))}
          </Row>
          </Container> : 
          {this.props.lista.filter((libro) => libro.title.toLowerCase().includes(this.state.searchedParam.toLowerCase()).map(libro => (
            <Container fluid>
              <Row xs={1} md={3} lg={6} className="gy-2">
                <SingleBook libro={libro} />
              </Row>
            </Container>
          )))}}
        </>
      </>
    );
  }
}

export default BookList;
