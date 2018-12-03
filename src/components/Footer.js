import React, { Component } from "react";
import "../styles/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="contact">
          <p id="verticalContact">CONTACT US</p>
          <div>773-999-9933</div>
          {/* <ul className="contactlist">
            <li>773-999-9933</li>
            <li>773-387-7901</li>
            <li>tsegtslawgroup999@gmail.com</li>
            <li>3657 W. Lawrence Ave, IL 60625</li>
          </ul>*/}
        </div>
      </div>
    );
  }
}
