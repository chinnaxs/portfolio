import React, {Component} from "react";
import TypeAnimation from "react-type-animation";

import Fade from "../reveal/Fade";

export default class Welcome extends Component {

  render() {

    // TODO: figure out how to insert flag at once
    return (
      <Fade>
        <div className="max-w-4xl mx-auto pt-[50px] bg-deep-blue h-screen flex items-center justify-center">
          {/* <div className="mx-auto bg-grayd" */}
          <div className="flex flex-nowrap my-auto mx-auto bg-white w-2/3 rounded-xl">
            <img
              className="inline-block rounded-l-xl"
              src="/assets/me_square.jpg"
              style={{ width: 250, height: 250 }}
              alt=""
              loading="lazy"
            />
            <div className="inline-block self-center px-4 text-black text-xl ">
              <p className="font-bold">Hi, I'm Matthias Lei</p>

              <TypeAnimation
                cursor={true}
                sequence={[500, "full-stack dev from 🇨🇭"]}
                wrapper="p"
                className="font-monospace"
              />

            </div>
          </div>
        </div>
      </Fade>
    );
  }
}