import React, { Component } from "react";

import Fade from "../../reveal/Fade";
import SkillBarList from "./skill-bar-list/SkillBarList";
import TextZone from "./text-zone/TextZone";

export default class About extends Component {
  render() {
    return (
      <Fade>
        <div className="container max-w-6xl mx-auto  ">
          <div className="flex flex-row grid grid-cols-3 gap-4 mx-36">
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
