import React, { Component } from "react";
import Fade from "../../animation/Fade";
import Project, { ProjectProps } from "./Project";

const projectsPropsList: ProjectProps[] = [
  {
    label: "Personal page",
    imgSrc: "assets/portfolio_preview.png",
    desc: "My first iteration of my personal web page. Additionally, this was my first time coming up with a design from scratch and implementing it with TailwindCSS.",
    tags: ["React", "TailwindCSS", "Typescript"],
    githubLink: "https://github.com/chinnaxs/portfolio"
  },
  {
    label: "Tickmark",
    desc: "Coming soon"
  },
];

export default class Portfolio extends Component {
  renderProjectsList() {
    return projectsPropsList.map(
      ({ label, imgSrc, link, desc, tags, githubLink }: ProjectProps) => {
        return (
          <div key={label}>
            <Fade>
              <Project label={label} link={link} desc={desc} tags={tags} imgSrc={imgSrc} githubLink={githubLink}/>
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
