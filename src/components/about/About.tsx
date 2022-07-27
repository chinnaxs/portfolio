import React, { Component } from "react";
import { IntroBox } from "./IntroBox";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-2xl">About</h1>
        <IntroBox/>
      </div>
    );
  }
}
