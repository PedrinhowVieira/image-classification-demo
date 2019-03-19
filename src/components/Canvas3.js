import React, { Component } from "react";
import { Image } from 'react-bootstrap';

class Canvas3 extends Component {
  render() {
    return (
      <Image src={require('./../Images/gallery3.jpeg')} fluid='true' />
    );
  }
}

export default Canvas3;