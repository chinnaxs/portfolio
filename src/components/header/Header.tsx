import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

export default class Header extends Component {
  render() {
    return (
      <nav className="fixed w-full z-50 top-0 flex justify-between flex-wrap bg-blue backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-md shadow-black ">
        <div className="block flex-grow md:flex md:items-center md:w-auto">
          <div className="text-sm md:flex-grow">
            <HashLink
              to="/#about"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4 px-2 font-monospace"
            >
              About
            </HashLink>
            <HashLink
              to="/#portfolio"
              className="block mt-4 md:inline-block md:mt-0  text-white hover:text-white mr-4 px-2 font-monospace"
            >
              Portfolio
            </HashLink>
            <HashLink
              to="/#blog"
              className="block mt-4 md:inline-block md:mt-0  text-white hover:text-white px-2 font-monospace"
            >
              Blog
            </HashLink>
            <HashLink
              to="/#contact"
              className="block mt-4 md:inline-block md:mt-0  text-white hover:text-white px-2 font-monospace"
            >
              Contact
            </HashLink>
          </div>
          <div className="m-2">
            <a
              href="https://www.linkedin.com/in/matthias-lei/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg"
                alt="LinkedIn"
                style={{ width: 24, height: 24 }}
              />
            </a>
          </div>
          <div className="m-2">
            <a
              href="https://github.com/chinnaxs"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="Github"
                style={{ width: 20, height: 20 }}
              /> */}
              {/* <img
                className="invert"
                src="https://cdn.cdnlogo.com/logos/g/55/github.svg"
                alt="Github"
                style={{ width: 20, height: 20 }}
              /> */}
              <svg
                className="fill-white rounded-sm"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
