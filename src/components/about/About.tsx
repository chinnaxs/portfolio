import React, { Component } from "react";

import SkillBar, {SkillBarProps} from "./skill_bar/SkillBar";

const Skills: SkillBarProps[] = [
  {label: "Java", percentage: 90},
  {label: "Typescript", percentage: 70}
]
export default class About extends Component {

  renderSkillBarList() {
    return Skills.map(({label, percentage}) => { 
      return (
        <div className="block" key={label}>
          <SkillBar label={label} percentage={percentage} />
        </div>);
    });
  }

  render() {
    return (
      <div>
        {this.renderSkillBarList()}
      </div>
    );
  }
}
