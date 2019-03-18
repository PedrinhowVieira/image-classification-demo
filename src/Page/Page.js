import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Button, Form, FormControl, ListGroup, Col , Row, Container, Image, InputGroup} from 'react-bootstrap';
import './Page.css'

class Page extends Component {
  render() {
    return(
      <div name='page'>
        <Container fluid='true'>

          <Row>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">
                <Image src={require('./logo.png')} width="40" height="40"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <NavDropdown title="User" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Next Image</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Refresh</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Log Off</NavDropdown.Item>
                </NavDropdown>
              </Navbar.Collapse>
            </Navbar>
          </Row>

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
              <ListGroup defaultActiveKey="#tags">
                <ListGroup.Item action href="#enhance">
                  Enhance
                </ListGroup.Item>
                <ListGroup.Item action href="#document-type">
                  Document Type
                </ListGroup.Item>
                <ListGroup.Item action href="#document-title">
                  Document Title
                </ListGroup.Item>
                <ListGroup.Item action href="#receipt">
                  Receipt
                </ListGroup.Item>
              </ListGroup>
            </Col>           
            <Col md={10}>
              <Row>
                <Image src={require('./gallery.jpg')} fluid='true' className='gallery'/>
              </Row>
              <Row>
                <Button variant="primary" className='buttonzin'>Primary</Button>
              </Row>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default Page;