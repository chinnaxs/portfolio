import React, { Component } from "react";
import Fade from "../../reveal/Fade";

export default class Contact extends Component {
  render() {
    return (
      <Fade>
        <div className="max-w-lg mx-auto pb-16">
          <div className="mx-8">
            <div className="mx-auto m-16">
              <h1 className="font-monospace text-white text-5xl text-center">
                contact
              </h1>
            </div>

            <form>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block tracking-wide font-monospace text-white text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    first Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                  />
                  <p className="text-white text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block tracking-wide font-monospace text-white text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide font-monospace text-white text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    e-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide font-monospace text-white text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    message
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-white text-gray border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                  ></textarea>
                </div>
              </div>
              <button
                className="block mx-auto bg-green hover:scale-110 ease-in duration-200 font-monospace text-deep-blue font-bold py-1 px-4 rounded"
                type="button"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Fade>
    );
  }
}
