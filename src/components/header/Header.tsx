import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

export default class Header extends Component {
  state = { navBar: false };

  render() {
    return (
      <nav className="fixed w-full z-50 top-0 flex justify-between flex-wrap bg-blue backdrop-filter backdrop-blur-sm bg-opacity-10 p-1 shadow-md shadow-black ">
        <div className="px-4">
          <div>
            <div className="py-2">
              <div className="md:hidden">
                <button
                  className="p-2 rounded-md outline-none focus:border-white focus:border"
                  onClick={() => this.setState({ navBar: !this.state.navBar })}
                >
                  {this.state.navBar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
                this.state.navBar ? "block" : "hidden"
              }`} 
              onClick={() => this.setState({ navBar: !this.state.navBar })}
            >
              <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                <li>
                  <HashLink
                    to="/#about"
                    className="block md:inline-block md:mt-0 text-white mr-4 px-2 font-monospace"
                  >
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/#portfolio"
                    className="block md:inline-block md:mt-0 text-white mr-4 px-2 font-monospace"
                  >
                    Portfolio
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/#blog"
                    className="block md:inline-block md:mt-0 text-white mr-4 px-2 font-monospace"
                  >
                    Blog
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/#contact"
                    className="block md:inline-block md:mt-0 text-white mr-4 px-2 font-monospace"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="inline-block m-2">
            <LinkedInIcon />
          </div>
          <div className="inline-block bv m-2">
            <GithubIcon />
          </div>
        </div>
      </nav>
    );
  }

}
