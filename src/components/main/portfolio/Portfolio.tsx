import React, { Component } from "react";
import Fade from "../../reveal/Fade";
import Project, { ProjectProps } from "./Project";

const projectsPropsList: ProjectProps[] = [
  {
    label: "Personal page",
    link: "personal-page",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tags: ["React", "TailwindCSS", "Typescript"],
  },
  {
    label: "Test",
    link: "personal-page",
  },
];

export default class Portfolio extends Component {
  renderProjectsList() {
    return projectsPropsList.map(
      ({ label, link, desc, tags }: ProjectProps) => {
        return (
          <div key={label}>
            <Fade>
              <Project label={label} link={link} desc={desc} tags={tags} />
            </Fade>
          </div>
        );
      }
    );
  }

  render() {
    return (
      <div className="container mx-auto flex flex-col">
        <Fade>
          <div className="text-5xl font-monospace text-white text-center mt-36">
            portfolio
          </div>
        </Fade>
        <div className="flex flex-col align-evenly mt-16 space-y-32 w-full mx-auto">
          {this.renderProjectsList()}
        </div>
      </div>
    );
  }
}
