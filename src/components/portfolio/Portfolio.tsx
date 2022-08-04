import React, { Component } from "react";
import Project from "./Project";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container max-w-4xl mx-auto flex flex-col">
        <div className="text-5xl font-monospace text-white text-center mt-36">
          Portfolio
        </div>
        <div className="flex flex-row justify-evenly mt-16">
          <div>
          <Project />
          </div>
          <div>
            <Project />
          </div>
        </div>
      </div>
    );
  }
}
