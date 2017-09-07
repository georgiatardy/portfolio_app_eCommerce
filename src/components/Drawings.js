import React, { Component } from 'react';
// import {drawings} from '../data';


import Drawing_1 from '../styles/Images/Drawings/Drawing_1.jpg';
import Drawing_2 from '../styles/Images/Drawings/Drawings_2.jpg';
import Drawing_3 from '../styles/Images/Drawings/Drawing_3.jpg';


export default class Drawings extends Component {
  constructor(props) {
    super(props);
  }
render() {
    return (
      <div className="drawings">
       <h1 className="drawings_header">Drawings</h1>
        <img id="Drawing_1" src={Drawing_1} alt="" />
        <br></br>
        <img id="Drawing_2" src={Drawing_2} alt="" />
        <br></br>
        <img id="Drawing_2" src={Drawing_3} alt="" />
        <section className="drawing_info">
          <div className="email">
            <h3>Custom Portraits</h3>
            <p>Graphite on bristol</p>
            <p>Price: $500</p>
            <p>24 in x 36 in</p>
          </div>

       </section>

   </div>
  );
 }
}
