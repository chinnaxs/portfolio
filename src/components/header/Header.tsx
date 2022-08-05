import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="fixed w-full z-50 top-0 flex justify-between flex-wrap bg-deep-blue backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-md shadow-black ">
        <div className="block flex-grow md:flex md:items-center md:w-auto">
          <div className="text-sm md:flex-grow">
            <Link
              to="/#about"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4 px-2 font-monospace"
            >
              About
            </Link>
            <Link
              to="/#portfolio"
              className="block mt-4 md:inline-block md:mt-0  text-white hover:text-white mr-4 px-2 font-monospace"
            >
              Portfolio
            </Link>
            <Link
              to="/#blog"
              className="block mt-4 md:inline-block md:mt-0  text-white hover:text-white px-2 font-monospace"
            >
              Blog
            </Link>
          </div>
          <div className="m-2">
            <Link
              to="https://www.linkedin.com/in/matthias-lei/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg"
                alt="LinkedIn"
                style={{ width: 20, height: 20 }}
              />
            </Link>
          </div>
          <div className="m-2">
            <a
              href="https://github.com/chinnaxs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="Github"
                style={{ width: 20, height: 20 }}
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
