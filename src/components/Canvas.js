import React, { Component } from "react";
import './../styles/Canvas.css'

class Canvas extends Component {
  render() {
    return (
      <img src={require('./../Images/gallery.jpg')} className='gallery' alt=""/>
    );
  }
}

export default Canvas;