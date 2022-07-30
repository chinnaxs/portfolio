import React, { Component } from "react";

import SkillBarList from "./skill-bar-list/SkillBarList";
import TextZone from "./text-zone/TextZone";


export default class About extends Component {


  render() {
    return <div className="flex flex-row grid grid-cols-3 gap-4 p-4">
      <div className="col-span-1"><TextZone/></div>
      <div className="col-span-2"><SkillBarList /> </div>
      </div>
  }
}
