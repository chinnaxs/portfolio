import React, { Component } from "react";
import { Link } from "react-router-dom";

export type ProjectProps = {
  label: string;
  imgSrc?: string;
  desc?: string;
  tags?: string[];
  link: string;
};

export default class Project extends Component<ProjectProps> {
  static defaultProps = {
    label: "test label",
    imgSrc: "assets/me_square.jpg",
    link: "/personal-page",
    tags: []
  };

  renderTags(projectProps: ProjectProps) {
    return projectProps.tags?.map((tag) => {
        return (
          <div key={tag} className=" text-gray text-sm rounded-full px-1 m-2 w-min">
            {tag}
          </div>
        )
    });
  }

  render() {
    return (
      <div className="group relative">
        <div className="flex flex-row gap-12 items-center">
          <img
            className="max-w-[300px] object-contain rounded"
            src={this.props.imgSrc}
            alt="me"
          />
          <div className="flex flex-col place-content-between">
            <h2 className="text-white text-xl font-monospace font-bold mt-2">
              {this.props.label}
            </h2>
            <p className="text-white font-monospace m-4">
              {this.props.desc}
            </p>
            <div className="flex flex-row">
              {this.renderTags(this.props)}
            </div>
            <Link
              className="hover:scale-110 ease-in w-[6em] duration-300 flex-nowrap text-center bg-green text-deep-blue p-2 rounded font-monospace m-3"
              to={this.props.link}
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
