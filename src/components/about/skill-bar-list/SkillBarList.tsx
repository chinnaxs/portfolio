import React, { Component } from "react";

import SkillBar, { SkillBarProps } from "./SkillBar";

const Skills: SkillBarProps[] = [
  { label: "Java", percentage: 90 },
  { label: "Typescript", percentage: 70 },
];

export default class SkillBarList extends Component {
  renderSkillBarList() {
    return Skills.map(({ label, percentage }) => {
      return (
        <div>
          <div className="block w-1/2" key={label}>
            <SkillBar label={label} percentage={percentage} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSkillBarList()}</div>;
  }
}
