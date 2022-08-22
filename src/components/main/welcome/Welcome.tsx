import React, {Component} from "react";
import TypeAnimation from "react-type-animation";

import Fade from "../../animation/Fade";

export default class Welcome extends Component {

  render() {

    // TODO: figure out how to insert flag at once
    return (
      <Fade>
        <div className="container max-w-4xl mx-auto pt-4 h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row my-auto mx-auto bg-white w-[250px] md:w-2/3 rounded-xl">
            <img
              className="rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
              src="/assets/me_square.jpg"
              style={{ width: 250, height: 250 }}
              alt=""
              loading="lazy"
            />
            <div className="self-center px-4 text-black text-xl my-4 md:mt-0">
              <p className="font-bold">Hi, I'm Matthias Lei</p>

              <TypeAnimation
                cursor={true}
                sequence={[500, "full-stack dev from 🇨🇭"]}
                wrapper="p"
                className="font-monospace overflow-hidden"
              />

            </div>
          </div>
        </div>
      </Fade>
    );
  }
}