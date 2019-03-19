import React, { Component } from "react";
import { Image } from 'react-bootstrap';

class Canvas2 extends Component {
  render() {
    return (
      <Image src={require('./../Images/gallery2.jpeg')} fluid='true' />
    );
  }
}

export default Canvas2;