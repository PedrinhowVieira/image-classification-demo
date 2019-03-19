import React, { Component } from "react";
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

class SideList extends Component {
  render() {
    return (
      <ListGroup defaultActiveKey="/enhance">
        <ListGroup.Item>
          <Link to="/enhance">Enhance</Link>
        </ListGroup.Item>
        <ListGroup.Item action href="/document-type">
          Document Type
        </ListGroup.Item>
        <ListGroup.Item action href="/document-title">
          Document Title
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/receipt">Receipt</Link>
        </ListGroup.Item>
        <ListGroup.Item action href="#summary">
          Summary
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default SideList;