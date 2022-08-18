import React, { Component } from "react";

import Fade from "../../reveal/Fade";
import SkillBarList from "./skill-bar-list/SkillBarList";
import TextZone from "./text-zone/TextZone";

export default class About extends Component {
  render() {
    return (
      <Fade>
        <div className="container mx-auto max-w-6xl flex flex-col">
          <div className="text-5xl font-monospace text-white text-center mt-36">
            about
          </div>

          <div className="grid grid-cols-3 gap-4 mx-36 mt-16 ">
            <div className="col-span-1 p-4">
              <TextZone />
            </div>
            <div className="col-span-2 ">
              <SkillBarList />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
