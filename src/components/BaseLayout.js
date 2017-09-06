import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {NavLink} from 'react-router-dom';

import GTA_logo from '../styles/Images/GTA_logo.jpg';


export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
           <img id="logo" src={GTA_logo} alt="" />
           <div className="link"><NavLink to="/About">About</NavLink></div>
           <div className="link"><NavLink to="/Home">Home</NavLink></div>
           <div className="link"><NavLink to="/Paintings">Paintings</NavLink></div>
           <div className="link"><NavLink to="/Contact">Contact</NavLink></div>
           <div className="link"><NavLink to="/Blog">Blog</NavLink></div>
        </header>
           <section className="body">
           {this.props.children}
           </section>
        <footer>
           <a href="https://www.georgiatardyart.com">Fine Art & Design</a>
           <a href="https://www.instagram.com/georgiatardyart/">Instagram</a>
           <a href="https://www.facebook.com/georgiatardyart">Facebook</a>
           <a href="https://www.linkedin.com/in/georgiatardyartist/">Linkedin</a>
        </footer>
     </div>

    );
  }
}
