import React, { Component } from "react";

import SkillBar, { SkillBarProps } from "./SkillBar";

const Skills: SkillBarProps[] = [
  { label: "Java", percentage: 90 },
  { label: "Quarkus", percentage: 90 },
  { label: "Typescript", percentage: 70 },
  { label: "React", percentage: 50 },
  { label: "Spring Boot", percentage: 50},
  { label: "Angular", percentage: 30 },
  { label: "🧗", percentage: 100}
];

export default class SkillBarList extends Component {
  renderSkillBarList() {
    return Skills.map(({ label, percentage }) => {
      return (
          <div className="block" key={label}>
            <SkillBar key={label} label={label} percentage={percentage} />
          </div>
      );
    });
  }

  render() {
    return <div>{this.renderSkillBarList()}</div>;
  }
}
