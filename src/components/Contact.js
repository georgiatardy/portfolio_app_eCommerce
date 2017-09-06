import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

export default class Contact extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <section className="contact_page">
        <div className="email">
          <h3>Email</h3>
          <p>georgiatardyart@gmail.com</p>
        </div>

        <div className="phone">
          <h3>Phone</h3>
          <p>555-555-5555</p>
        </div>
     </section>

    )
  }
}
