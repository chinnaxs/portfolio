import React, { Component } from "react";

export default class TextZone extends Component {
  render() {
    return (
      // <div className="flex flex-col font-monospace font-bold text-xl text-white">
      //  <div className="w-min p-1 border-2 border-green">
      //     <p className="mt-[-20px] ml-[-20px]">Driven by curiosity</p>
      //   </div>

      //   <p>Love talking tech</p>
      // </div>

      <div className="flex flex-col font-monospace text-white">
        {/* <div className="flex flex-row font-monospace ">
          <div className="font-bold text-3xl text-white">About</div>
        </div> */}
        <div className="font-monospace text-white mt-2">
          Hi, I am a passionate Full-Stack Developer.
          <br />
          I love building things.
        </div>
      </div>
    );
  }
}
