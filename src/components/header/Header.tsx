import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="sticky z-50 top-0 flex justify-between flex-wrap bg-teal-500 p-6">
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
          <div className="text-sm md:flex-grow">
            <a
              href="#about"
              className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Portfolio
            </a>
            <a
              href="#blog"
              className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div className="m-2">
            <a href="https://www.linkedin.com/in/matthias-lei/" target="_blank">
              <img src="https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg" alt="LinkedIn" style={{ width: 20, height: 20 }}/>
            </a>
          </div>
          <div className="m-2">
            <a href="https://github.com/chinnaxs" target="_blank">
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
