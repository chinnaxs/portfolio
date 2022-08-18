import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

export default class Header extends Component {
  state = { navBar: false };

  render() {
    return (
      <nav className="fixed w-full z-50 top-0 flex justify-between flex-wrap bg-blue backdrop-filter backdrop-blur-sm bg-opacity-10 p-1 shadow-md shadow-black ">
        <div className="px-4">
          <div>
            <div className="justify-between py-2 md:py-2">
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
            <a
              href="https://www.linkedin.com/in/matthias-lei/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg"
                alt="LinkedIn"
                style={{ width: 20, height: 20 }}
              />
            </a>
          </div>
          <div className="inline-block bv m-2">
            <a
              href="https://github.com/chinnaxs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="fill-white rounded-sm"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
