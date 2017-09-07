import React, { Component } from 'react';
import {designs} from '../data';

// import Design_1 from '../styles/Images/Design/Design_1.jpg';
// import Design_2 from '../styles/Images/Design/Design_2.jpg';
// import Design_3 from '../styles/Images/Design/Design_3.jpg';


export default class Design extends Component {

  render() {
    let items = designs.map ((item) => {
      return (
        <div className="itemwrapper">
         <img src = {item.img} />
          <div className="itemdescription">
          <div>{item.description}</div>
           <div className="itemprice">{item.price}</div>
          </div>
        </div>
      )
    })

    return (
      <div>{items}</div>


      // <div className="design">
      // <h1 className="design_header">Graphic Design</h1>
      //   <img id="Design_1" src={Design_1} alt="" />
      //   <br></br>
      //   <img id="Design_2" src={Design_2} alt="" />
      //   <br></br>
      //   <img id="Design_2" src={Design_3} alt="" />
      // </div>


    );
  }
}
