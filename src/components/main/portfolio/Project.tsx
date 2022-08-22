import React, { Component } from "react";
import { Link } from "react-router-dom";
import GithubIcon from "../../icons/GithubIcon";

export type ProjectProps = {
  label: string;
  imgSrc?: string;
  desc?: string;
  tags?: string[];
  link?: string;
  githubLink?: string;
};

export default class Project extends Component<ProjectProps> {
  static defaultProps = {
    label: "test label",
    imgSrc: "assets/me_square.jpg",
    tags: [],
  };

  renderTags() {
    return this.props.tags?.map((tag) => {
      return (
        <div
          key={tag}
          className=" text-gray text-sm rounded-full mr-4 w-min"
        >
          {tag}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12  md:items-start mx-16">
          <img
            className="max-w-xs object-contain rounded w-full  shadow-sm shadow-gray "
            src={this.props.imgSrc}
            alt="me"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-xl font-monospace ">
              {this.props.label}
            </h2>
            <p className="text-white font-monospace">{this.props.desc}</p>
            <div className="flex flex-row">{this.renderTags()}</div>
            <div className="flex flex-row gap-4">
              {this.props.link ? (
                <Link
                  className="hover:scale-110 ease-in w-[6em] duration-300 flex-nowrap text-center bg-green text-deep-blue p-2 rounded font-monospace m-3"
                  to={this.props.link}
                >
                  Learn more
                </Link>
                
              ) : null}
              {this.props.githubLink ? <GithubIcon link="https://github.com/chinnaxs/portfolio" size="25"/> : null }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
