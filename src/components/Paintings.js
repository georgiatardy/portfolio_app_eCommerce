import React, {Component} from 'react';
import {paintings} from '../data';


// import Woman_Lotus_1 from '../styles/Images/Paintings/Woman_Lotus_1.jpg';
// import Woman_Lotus_2 from '../styles/Images/Paintings/Woman_Lotus_2.jpg';
// import Woman_Lotus_3 from '../styles/Images/Paintings/Woman_Lotus_3.jpg';


export default class Paintings extends Component {
  constructor(props) {
    super (props);
  }
     render() {
       let items = paintings.map((item) => {
       return (
        <div className="itemimage">
          <img src={item.img} />
          <div className="itemdescription">
           <div>{item.description}</div>
           <div className="itemprice">{item.price}</div>
          </div>
        </div>
       )
     })
     return(
       <div>{items}</div>
     );
   }
 }

    // <h1 className="paintings_header">Paintings</h1>
    //   <img id="WL_1" src={Woman_Lotus_1} alt="" />
    //   <br></br>
    //   <img id="WL_2" src={Woman_Lotus_2} alt="" />
    //   <br></br>
    //   <img id="WL_3" src={Woman_Lotus_3} alt="" />
