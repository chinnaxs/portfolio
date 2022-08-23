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
    tags: [],
  };

  renderTags() {
    return this.props.tags?.map((tag) => {
      return (
        <div key={tag} className=" text-gray text-sm rounded-full mr-4 w-min">
          {tag}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12  md:items-start mx-16">
          {this.props.imgSrc ? (
            <img
              className="max-w-xs object-contain rounded w-full  shadow-sm shadow-gray "
              src={this.props.imgSrc}
              alt="me"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="128"
              height="128"
              className="fill-white"
            >
              <path
                fill-rule="evenodd"
                d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
              ></path>
            </svg>
          )}
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
              {this.props.githubLink ? (
                <GithubIcon
                  link="https://github.com/chinnaxs/portfolio"
                  size="25"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
