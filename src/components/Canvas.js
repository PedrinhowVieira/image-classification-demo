import React, { Component } from "react";
import { Image } from 'react-bootstrap';
import './../styles/Canvas.css'

class Canvas extends Component {
  render() {
    return (
      <Image src={require('./../Images/gallery.jpg')} fluid='true' className='gallery' />
    );
  }
}

export default Canvas;