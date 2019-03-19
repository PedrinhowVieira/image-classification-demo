import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Col, Row, Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import IdSelector from '../components/IdSelector';
import SideList from '../components/SideList';
import Canvas from '../components/Canvas';
import Canvas2 from '../components/Canvas2';
import Canvas3 from '../components/Canvas3';
import Canvas4 from '../components/Canvas4';

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid='true'>
          <NavBar />
          <IdSelector />
          <Row>
            <Col md={2}>
              <SideList />
            </Col>
              <Route path="/enhance" exact component={Canvas} />
              <Route path="/document-type" exact component={Canvas2} />
              <Route path="/document-title" exact component={Canvas3} />
              <Route path="/receipt" exact component={Canvas4} />
            <Col md={10}>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;