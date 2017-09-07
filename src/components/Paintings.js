import React, {Component} from 'react';



import Woman_Lotus_1 from '../styles/Images/Paintings/Woman_Lotus_1.jpg';
import Woman_Lotus_2 from '../styles/Images/Paintings/Woman_Lotus_2.jpg';
import Woman_Lotus_3 from '../styles/Images/Paintings/Woman_Lotus_3.jpg';


export default class Paintings extends Component {
  render() {
    return (
    <div className="paintings">
    <h1 className="paintings_header">Paintings</h1>
      <img id="WL_1" src={Woman_Lotus_1} alt="" />
      <br></br>
      <img id="WL_2" src={Woman_Lotus_2} alt="" />
      <br></br>
      <img id="WL_3" src={Woman_Lotus_3} alt="" />
    </div>

    )
  }
}
