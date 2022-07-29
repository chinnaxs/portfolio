import React, { Component } from "react";
import TypeAnimation from "react-type-animation";

export default class About extends Component {


  render() {

    // TODO: figure out how to insert flag at once
    return (
      <div>
        <div className="width-full pt-[50px] bg-deep-blue h-screen">
          {/* <div className="mx-auto bg-grayd" */}
          <div className="block flex flex-nowrap mx-auto bg-white w-2/3 rounded-s">
            <img
              className="inline-block rounded-l-s"
              src="/assets/me_square.jpg"
              style={{ width: 250, height: 250 }}
              alt=""
              loading="lazy"
            />
            <div className="inline-block self-center px-4 text-black text-xl ">
              <p className="font-bold">Hi, I'm Matthias Lei</p>

              <TypeAnimation
                cursor={true}
                sequence={["full-stack dev from 🇨🇭"]}
                wrapper="p"
                className="font-ubuntu"
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
