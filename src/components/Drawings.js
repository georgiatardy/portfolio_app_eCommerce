import React, { Component } from 'react';


import Drawing_1 from '../styles/Images/Drawings/Drawing_1.jpg';
import Drawing_2 from '../styles/Images/Drawings/Drawings_2.jpg';
import Drawing_3 from '../styles/Images/Drawings/Drawing_3.jpg';


export default class Drawings extends Component {

  render() {
    return (
      <div className="drawings">
      <h1 className="drawings_header">Drawings</h1>
        <img id="Drawing_1" src={Drawing_1} alt="" />
        <br></br>
        <img id="Drawing_2" src={Drawing_2} alt="" />
        <br></br>
        <img id="Drawing_2" src={Drawing_3} alt="" />
      </div>

    );
  }
}
