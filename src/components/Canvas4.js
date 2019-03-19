import React, { Component } from "react";
import { Image } from 'react-bootstrap';

class Canvas4 extends Component {
  render() {
    return (
      <Image src={require('./../Images/gallery4.jpg')} fluid='true' />
    );
  }
}

export default Canvas4;