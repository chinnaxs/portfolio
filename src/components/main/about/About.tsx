import React, { Component } from "react";

import Fade from "../../reveal/Fade";
import SkillBarList from "./skill-bar-list/SkillBarList";
import TextZone from "./text-zone/TextZone";

export default class About extends Component {
  render() {
    return (
      <Fade>
        <div className="container mx-auto ">
          <div className="max-w-6xl mx-16 flex flex-col">
          <div className="text-5xl font-monospace text-white text-center mt-36">
            about
          </div>

          <div className="flex md:flex-row flex-col ">
            <div className="basis-1/2 my-16">
              <TextZone />
            </div>
            <div className="basis-1/2">
              <SkillBarList />
            </div>
          </div>
          </div>
        </div>
      </Fade>
    );
  }
}
