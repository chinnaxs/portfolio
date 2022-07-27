import React, { Component } from "react";

export class IntroBox extends Component {
  render() {
    return (
      <div className="container">
        <img className="scale-50 rounded-md" src="assets/me.jpg" />
        
        <div className="">
          Hi, I'm Matthias Lei
          <br />
          I'm a full-stack dev
        </div>
      </div>
    );
  }
}
