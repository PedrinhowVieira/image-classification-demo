import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Button, Form, FormControl, ListGroup, Col , Row, Container, Image, InputGroup} from 'react-bootstrap';

class Page extends Component {
  render() {
    return(
      <div name='page'>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Container fluid='true'>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  https://image-classificator.com/path/id:78544954/
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
          </Row>
          <Row>
              <Col md={2}>
                <ListGroup defaultActiveKey="#link1">
                  <ListGroup.Item action href="#link1">
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2" disabled>
                    Link 2
                  </ListGroup.Item>
                  <ListGroup.Item action>This one is a button</ListGroup.Item>
                </ListGroup>
              </Col>           
              <Col md={10}>
                <Image src={require('./gallery.jpg')} fluid='true' />;
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page;