import React, { Component } from "react";

export class IntroBox extends Component {
  render() {
    return (
      // <div className="container">
      //   <img className="scale-50 rounded-md" src="assets/me.jpg" />

      //   <div className="text-w">
      //     Hi, I'm Matthias Lei
      //     <br />
      //     I'm a full-stack dev living the dark mode
      //   </div>
      // </div>
      // <div className="block mx-20 bg-orange">
      //   <img className="scale-50 rounded-md" src="assets/me.jpg" />

      //   <div className="text-w">
      //     Hi, I'm Matthias Lei
      //     <br />
      //     I'm a full-stack dev living the dark mode
      //   </div>
      // </div>
      <div className="width-full mx-4 bg-gray rounded-s">
        <img className="mx-auto" src="/assets/me_square.jpg" alt="" loading="lazy"/>
      </div>
    //   <div className="mx-16 grid grid-flow-col grid-rows-2 grid-cols-8 gap-8">
    //   <div className="row-start-1 col-start-2 col-span-2">
    //     <img src="/assets/me_square.jpg" alt="" loading="lazy"/>
    //   </div>
    //   <div className="rounded row-start-1 col-span-4 ">
    //     <div className="container bg-gray-light">ASD</div>
    //   </div>
    // </div>
    );
  }
}
